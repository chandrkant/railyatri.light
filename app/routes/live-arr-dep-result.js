import Ember from 'ember';
import config from 'railyatri/config/environment';
export default Ember.Route.extend({
model: function(params) {
Ember.$.blockUI({ css: { border: 'none',padding: '15px',backgroundColor: '#000', '-webkit-border-radius': '10px', '-moz-border-radius': '10px', opacity: 0.5, color: '#fff' },
	message:'<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i><span class="sr-only">Loading...</span>'
});
 var api = new RestClient(config.RAILS_SERVER+'/api/live_arr_dep/'+params.from_code.split('-')[0]+"/"+params.from_code.split('-')[1]);
 return api.get();
 },
 setupController: function (controller, model) {
 	if(model.success){
   controller.set('trainResult',model.all_trains);
	 controller.set('showResult',true);
	 controller.set('showRecent',false);
	 controller.set('filter',controller.filterResultData(controller.get('trainResult'),2));
	 Ember.$.unblockUI();
 	}else{
   Ember.$.unblockUI();
   alertify.error(model.message);
   this.transitionTo('live-arr-dep-search');
 	}
 	
 }
});