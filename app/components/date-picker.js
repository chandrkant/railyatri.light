import Ember from 'ember';
var $ = Ember.$;
export default Ember.Component.extend({
	didInsertElement: function() {
	 Ember.run.scheduleOnce('afterRender', this, function() {
	 	// debugger;
	 	$('.date-picker').datepicker();
	   // $('.date-picker').datetimepicker();
	});	
	},
});
