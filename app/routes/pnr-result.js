import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    $.ajaxSetup({
       headers: { 'Host': 'www.indianrail.gov.in','Referer':'http://www.indianrail.gov.in/enquiry/PnrEnquiry.html','Cookie':'JSESSIONID=2wy8qMACCSmbmDPakKo2fZwNKtL8c-NDKESaUOz9.webprs02'}
    });
    var api = new RestClient('http://www.indianrail.gov.in/enquiry/captchaDraw.png')
    api.get().then(function(data){
       debugger;
    });
    // var url = "http://www.indianrail.gov.in/enquiry/captchaDraw.png";
    // Ember.$.ajax({
    //   url:url,
    //   dataType: 'jsonp',
    //   success: function(data,status,xhr){
    //    debugger
    //   },error: function(data,status,xhr){
    //     debugger;
    //   }

    // });
    return params;
  },
  setupController: function (controller, model) {
    controller.set("title","PNR "+model.pnr_number);
  }
});
