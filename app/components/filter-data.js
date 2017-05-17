import Ember from 'ember';
var $ =Ember.$;
export default Ember.Component.extend({
  didInsertElement: function() {
		Ember.run.scheduleOnce('afterRender', this, function() {
      $('#ex1').bootstrapSlider({tooltip_position:'bottom'});
      $("#ex1").on("slide", function(slideEvt) {
        $("#ex1SliderVal").val(slideEvt.value);
      });
    })
  }
});
