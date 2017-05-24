import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    var url = "http://www.indianrail.gov.in/enquiry/PnrEnquiry.html";
    Ember.$.ajax({
      url:url,
      dataType: 'html',
      success: function(data,status,xhr){

      },error: function(data,status,xhr){

      }

    });
    return params;
  },
  setupController: function (controller, model) {
    controller.set("title","PNR "+model.pnr_number);
  }
});
