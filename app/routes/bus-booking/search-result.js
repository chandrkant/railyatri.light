import Ember from 'ember';
import config from 'railyatri/config/environment';
export default Ember.Route.extend({
	model: function(params) {
    Ember.$.blockUI({ css: { border: 'none',padding: '15px',backgroundColor: '#000', '-webkit-border-radius': '10px', '-moz-border-radius': '10px', opacity: 0.5, color: '#fff' },
		message:'<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i><span class="sr-only">Loading...</span>'
	});
     var qury = "?from_name="+params.from+"&from_code="+params.from_code+"&to_code="+params.to_code+"&doj="+params.doj+"&num_of_pass="+params.num_of_pass;
	 var api = new RestClient(config.RAILS_SERVER+'/api/bus/get_available_bus_trips'+qury);
	 return api.get();
	},setupController: function (controller, model) {
    Ember.$.unblockUI();
    if(model.success){
      var sort_data =controller.sortByFare(model.availableTrips,'asc');
      controller.set('availableTrips',sort_data);
      controller.set('responseData',model);
    }else{
      Ember.$.unblockUI();
    }
		console.log(model);
	}
});
