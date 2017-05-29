import Ember from 'ember';
var $ = Ember.$;
export default Ember.Component.extend({
	didInsertElement: function() {
	 Ember.run.scheduleOnce('afterRender', this, function() {
	 	// debugger;

	 	$('.date-picker').datepicker({
      changeMonth: true,
      changeYear: true,
			dateFormat: 'dd-mm-yy',
			minDate: 0,
			maxDate: "+4M +1D"
    });
	   // $('.date-picker').datetimepicker();
	});
	},
});
