import Ember from 'ember';
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
        },
		getTimeTable: function(){
			var self = this;
			$('.search-train').button('loading');
			var train_number = self.get('model.trainNumber');
			if(train_number === undefined || train_number===""){
				alertify.error("Please Enter a valid train number");
				self.set('showResult',false);
				$('.search-train').button('reset');
			}else{
			train_number =train_number.split('-')[0];
			self.transitionToRoute('time-table', train_number.trim());
			}
		}
	}
});
