import Ember from 'ember';
var $= Ember.$;
export default Ember.Component.extend({
  actions: {
    doSave(d, meta) {
      //d.reject();
      var gettime = new Date();
      $.ajax({
        url: "http://test.railyatri.in/instant_platform_update.json",
        type: "POST",
        dataType: "jsonp",
        data: {
            platform_number: $("#form_train_number").val(),
            station_code: $("#form_station_code").val().toUpperCase(),
            train_number: $("#form_platform_number").val(),
            lat: "0.0",
            lng: "0.0",
            app_id: "FOR_WEB_IGNORE_FOR_MOBILE" + gettime.getTime()
        },
        success: function(data) {
          if (data.success == false) {
            alertify.error("something went wrong, please try in some time");
            d.resolve();
          }
          else {
            d.resolve();
            alertify.success("Thank you for your input! \n \n" + data.platform_update[0].msg);
          }
        }

    }); 
      
    },
    doAfterClose() {
      // 
    },
    doClose(d) {
      if(true) {
        d.resolve();
      } else {
        d.reject();
      }
    }
  }
});