import Ember from 'ember';

export default Ember.Controller.extend({
  title: "PNR Search",
   myJsonMethod: function(data) {
   debugger
  },
  actions: {
     gePnrStatus: function(){
       var pnr_number = Ember.$("#pnr-number").val();
       var cpt =  Ember.$("#captcha-value").val();
       // this.transitionToRoute('pnr-result',pnr_number);
       Ember.$("#captcha-value").val();
       var url = "http://www.indianrail.gov.in/enquiry/CommonCaptcha?inputCaptcha="+cpt+"&inputPnrNo="+pnr_number+"&inputPage=PNR";
       console.log(url);
       Ember.$.ajax({
	      url:url,
	      dataType: 'jsonp',
	      contentType: 'application/json; charset=utf-8',
		  dataType: 'jsonp',
		  ajaxSuccess: function(data)
          {
           data = JSON.parse(data);
           console.log("data _" +data);
          },
		  jsonpCallback: "myJsonMethod",
          error: function(data,st,xhr){
          debugger;
          } 
		 });
		}
    }
});
