import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';
var $ = Ember.$;
export default Ember.Controller.extend({
	session: Ember.inject.service('session'),
	queryParams: ['from_code','to_code','doj','num_of_pass',"page", "perPage"],
	page: 1,
  perPage: 5,
  pagedContent: pagedArray('availableTrips', {
    page: Ember.computed.alias("parent.page"),
    perPage: Ember.computed.alias("parent.perPage")
  }),
  totalPages: Ember.computed.oneWay("pagedContent.totalPages"),
	title: "Bus Booking",
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
	sortByFare: function(trip,asc){
    trip = trip.sort( function(a,b){
    	if(asc =='asc'){
         return parseFloat(a.fareDetails[0].baseFare) - parseFloat(b.fareDetails[0].baseFare);
    	}else{
         return parseFloat(b.fareDetails[0].baseFare) - parseFloat(a.fareDetails[0].baseFare); 	
    	} 
    });
    return trip;
	},
	sortByDuration: function(trip,asc){
		trip = trip.sort( function(a,b){
		if(asc =='asc'){
			return parseFloat(a.durationTime) - parseFloat(b.durationTime);
		}else{
      return parseFloat(b.durationTime) - parseFloat(a.durationTime);
		}
		});
		return trip;
	},
	sortByDeptime: function(trip,asc){
		trip = trip.sort( function(a,b){
		if(asc =='asc'){
			 return parseFloat(a.departure_time) - parseFloat(b.departure_time);
		}else{
       return parseFloat(b.departure_time) - parseFloat(a.departure_time);
		}
	});
		return trip;
	},
	actions: {
	 sort: function(attribute_val,el){
	 	 var self = this;
	 	 var trip =null;
	 	 if(attribute_val=="fare"){
       trip = self.sortByFare(self.get('responseData.availableTrips'),'asc');
	 	 }else if(attribute_val=="duration"){
       trip = self.sortByDuration(self.get('responseData.availableTrips'),'asc');
	 	 }else{
       trip = self.sortByDuration(self.get('responseData.availableTrips'),'asc');
	 	 }
	 	 self.set('availableTrips',Ember.copy(trip), true);

	 }
	},
	 authenticate: function() {
      let { identification, password } = this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:oauth2', identification, password).catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      });
    }
});
