import Ember from 'ember';
import config from 'railyatri/config/environment';
var $ = Ember.$;
export default Ember.Controller.extend({
	title: "Time Table",
	showMyModal: false,
	platformData: [],
	showResult: false,
	showRecent: true,
	timeTableResult: [],
	firstRout: null,
	lastRoute: null,
	countDay:1,
	actions: {
		editForm: function(){
          $("#searchForm").slideToggle( "slow" );
		},
		toggleShow(dataP) {
			var platform={
				train_number: this.get('timeTableResult').train_number,
				train_name: this.get('timeTableResult').train_name,
				dataPlatForm: dataP
			};
			this.set('platformData',platform);
			return this.send('openModal', 'modals.new', this.get('platformData'));
            // this.set('showMyModal', !this.get('showMyModal'));
        },
		getTimeTable: function(){
			var self = this;
			$('.search-train').button('loading');
			var tm = [];
			var train_number = self.get('model.trainNumber');
			if(train_number === undefined || train_number===""){
				alertify.error("Please Enter a valid train number");
				self.set('showResult',false);
				$('.search-train').button('reset');
			}else{
			train_number =train_number.split('-')[0];
			var api = new RestClient(config.RAILS_SERVER+'/api/time_table/'+train_number.trim());
			api.get().then(function(json){
        	  $("#searchForm").slideToggle();	
        	  $('.search-train').button('reset');
	          self.set('showResult',true);
	          self.set('showRecent',false);
	          self.set('timeTableResult',json[0]);
	          tm = self.get('timeTableResult');
	          self.set('firstRout',tm.route[0]);
	          self.set('lastRoute',tm.route[tm.route.length-1]);
	          console.log(self.get('timeTableResult')); 
			},function(xhr) {
	          $('.search-train').button('reset');   //XMLHtppRequest instance
	          alertify.error(xhr);
      		});
			}
		}
	}
});
