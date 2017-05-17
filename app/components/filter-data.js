import Ember from 'ember';
var $ =Ember.$;
export default Ember.Component.extend({
  didInsertElement: function() {
		Ember.run.scheduleOnce('afterRender', this, function() {
      $('#ex1').bootstrapSlider({tooltip_position:'bottom'});
      $("#ex1").on("slide", function(slideEvt) {
        $("#ex1SliderVal").val(slideEvt.value);
      });
      var selector = '.row-body-bt div';

      $(selector).on('click', function(){
          //$(selector).removeClass('selected');
          $(this).toggleClass('selected');
          var arr = [];
          $(".selected").each(function() {
            arr.push($(this).data('text'));
          });
          $("#row-body-bt").val(arr);
      });
      var selector_dt = '.row-body-dt div';

      $(selector_dt).on('click', function(){
          //$(selector).removeClass('selected');
          $(this).toggleClass('selected_dt');
          var arr = [];
          $(".selected_dt").each(function() {
            arr.push($(this).data('text'));
          });
          $("#row-body-dt").val(arr);
      });
    });
  }
});
