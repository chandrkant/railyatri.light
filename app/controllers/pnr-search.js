import Ember from 'ember';

export default Ember.Controller.extend({
  title: "PNR Search",

  actions: {
    gePnrStatus: function(){
      var pnr_number = Ember.$("#pnr-number").val();
      var cpt =  Ember.$("#captcha-value").val();
      try{
        // this.transitionToRoute('pnr-result',pnr_number);
        Ember.$("#captcha-value").val();
        var url = "http://www.indianrail.gov.in/enquiry/CommonCaptcha?inputCaptcha="+cpt+"&inputPnrNo="+pnr_number+"&inputPage=PNR&callback=?";
        console.log(url);
        Ember.$.getJSON(url);
      }catch(e){
       console.log(e);
      }

    }
  }
});
