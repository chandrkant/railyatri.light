import Ember from 'ember';

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
	actions:{
		toggleShow(dataP) {
			var platform={
				train_number: this.get('timeTableResult').train_number,
				train_name: this.get('timeTableResult').train_name,
				dataPlatForm: dataP
			};
			this.set('platformData',platform);
			return this.send('openModal', 'modals.new', this.get('platformData'));
            // this.set('showMyModal', !this.get('showMyModal'));
        }
	}
});
