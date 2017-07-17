import Ember from 'ember';
import config from 'railyatri/config/environment';
var $ = Ember.$;
export default Ember.Controller.extend({
	session: Ember.inject.service('session'),
	queryParams: ['from_code','to_code','doj','num_of_pass','operator_id','trip_id'],
	title: "Bus Booking",
	titleText: "Filter",
	from_code: null,
	to_code: null,
	doj:null,
	from_name: '',
	to_name: '',
	num_of_pass: null,
	availableTrips: null,
	tempData: null,
	responseData: null,
	filterCheck: true,
	currentTrip: null,
	currentTripDetails: null,
	upper: false,
	showLayout: false,
	sortByFare: function(trip,asc){
    trip = trip.sort( function(a,b){
    	if(asc ==='asc'){
         return parseFloat(a.fareDetails[0].baseFare) - parseFloat(b.fareDetails[0].baseFare);
    	}else{
         return parseFloat(b.fareDetails[0].baseFare) - parseFloat(a.fareDetails[0].baseFare); 	
    	} 
    });
    return trip;
	},
	sortByDuration: function(trip,asc){
		trip = trip.sort( function(a,b){
		if(asc ==='asc'){
			return parseFloat(a.durationTime) - parseFloat(b.durationTime);
		}else{
      return parseFloat(b.durationTime) - parseFloat(a.durationTime);
		}
		});
		return trip;
	},
	sortByDeptime: function(trip,asc){
		trip = trip.sort( function(a,b){
		if(asc ==='asc'){
			 return parseFloat(a.departure_time) - parseFloat(b.departure_time);
		}else{
       return parseFloat(b.departure_time) - parseFloat(a.departure_time);
		}
	});
		return trip;
	},
	actions: {
	 sort: function(attribute_val){
	 	 var self = this;
	 	 var trip =null;
	 	 if(attribute_val==="fare"){
       trip = self.sortByFare(self.get('responseData.availableTrips'),'asc');
	 	 }else if(attribute_val==="duration"){
       trip = self.sortByDuration(self.get('responseData.availableTrips'),'asc');
	 	 }else{
       trip = self.sortByDuration(self.get('responseData.availableTrips'),'asc');
	 	 }
	 	 self.set('availableTrips',Ember.copy(trip), true);

	 },
	 	authenticate: function() {
      let { identification, password } = this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:oauth2', identification, password).catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      });
    },
    getTripDetails: function(trip){
      var self = this;
      $('.open-seat').hide();
       self.set('titleText',null);
       self.set('currentTripDetails',null);
       self.set('upper',false);
       self.set('showLayout',false);
      Ember.$.blockUI({ css: { border: 'none',padding: '15px',backgroundColor: '#000', '-webkit-border-radius': '10px', '-moz-border-radius': '10px', opacity: 0.5, color: '#fff' },
		  	message:'<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i><span class="sr-only">Loading...</span>'
		  });
      var query = "?trip_id="+trip.id+"&num_of_pass="+self.get('responseData').num_of_pass+"&operator_id="+trip.operator;
      var api = new RestClient(config.RAILS_SERVER+'/api/bus/get_trip_details'+query);
      self.set('currentTrip',trip);
      api.get().then(function(res) {
      	  Ember.$.unblockUI();
      	  self.set('titleText','Seat Select');
          self.set('currentTripDetails',res);
          self.set('upper',res.show_upper);
          self.set('showLayout',true);
          $('#drawerExample').drawer('toggle');
          $('.open-seat').show();
        },function(xhr) {
          console.log(xhr);
          Ember.$.unblockUI();
        });

    }
	},

});
