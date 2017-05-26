import Ember from 'ember';
import config from 'railyatri/config/environment';
export default Ember.Controller.extend({
  title: "Seat Availability",
  stations: [],
  stationList: null,
  actions: {
  	getTimeTable: function(train){
  		var self = this;
  		Ember.$.blockUI({ css: { border: 'none',padding: '15px',backgroundColor: '#000', '-webkit-border-radius': '10px', '-moz-border-radius': '10px', opacity: 0.5, color: '#fff' },
				message:'<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i><span class="sr-only">Loading...</span>'
			});
  		var api = new RestClient(config.RAILS_SERVER+'/api/time_table/'+train);
      api.get().then(function(data){
        self.set('stations',data[0]);
        self.set('stationList',data[0]['route']);
        Ember.$.unblockUI();
      });
  	}
  }
});
