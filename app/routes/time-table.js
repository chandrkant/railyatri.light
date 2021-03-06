import Ember from 'ember';
import config from 'railyatri/config/environment';
export default Ember.Route.extend({
model: function(params) {
Ember.$.blockUI({ css: { border: 'none',padding: '15px',backgroundColor: '#000', '-webkit-border-radius': '10px', '-moz-border-radius': '10px', opacity: 0.5, color: '#fff' },
	message:'<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i><span class="sr-only">Loading...</span>'
});
 var api = new RestClient(config.RAILS_SERVER+'/api/time_table/'+params.train_number);
 return api.get();
 },
 setupController: function (controller, model) {
 	var tm = [];
 	 controller.set('showResult',true);
	 controller.set('showRecent',false);
	 controller.set('timeTableResult',model[0]);
	 tm = controller.get('timeTableResult');
	 controller.set('firstRout',tm.route[0]);
	 controller.set('lastRoute',tm.route[tm.route.length-1]);
	 Ember.$.unblockUI();
	 console.log(tm);
 }
});
