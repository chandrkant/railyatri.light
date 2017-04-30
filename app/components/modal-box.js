import Ember from 'ember';
import config from 'railyatri/config/environment';
export default Ember.Component.extend({
  actions: {
    ok: function() {
      this.$('.modal').modal('hide');
      this.sendAction('ok');
    },
    doSave: function(){
      var gettime = new Date();
      var platFormData = {
            platform_number: $("#form_platform_number").val(),
            station_code: $("#form_station_code").val().toUpperCase(),
            train_number: $("#form_train_number").val(),
            lat: "0.0",
            lng: "0.0",
            app_id: "FOR_WEB_IGNORE_FOR_MOBILE" + gettime.getTime()
        }
      var api = new RestClient(config.RAILS_SERVER+'/api/instant_platform_update');
      api.post(platFormData).then(function(data){
        alertify.success("Thank you for your input! \n \n" + data.platform_update[0].msg);
        Ember.$('.modal').modal('hide');
      },function(xhr) {
         alertify.error("something went wrong, please try in some time");
     });
    }

  },
  show: function() {
    Ember.$('.modal').modal().on('hidden.bs.modal', function() {
      this.sendAction('close');
    }.bind(this));
  }.on('didInsertElement')
});

  