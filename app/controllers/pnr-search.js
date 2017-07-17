import Ember from 'ember';
import config from 'railyatri/config/environment';
export default Ember.Controller.extend({
  title: "PNR Search",

  actions: {
    gePnrStatus: function(){
      var pnr_number = Ember.$("#pnr-number").val();
      var cpt =  Ember.$("#captcha-value").val();
      var url = "http://www.indianrail.gov.in/enquiry/CommonCaptcha?inputCaptcha="+cpt+"&inputPnrNo="+pnr_number+"&inputPage=PNR&callback=?";
      Ember.$.ajax({
         dataType :"jsonp",
         url: url,
         success: function(){

         },
         error: function(){
            // this.transitionToRoute('pnr-result',pnr_number);
        var api = new RestClient(config.RAILS_SERVER+"/api/pnr_status");
        var data = {url: this.url};
        api.post(data).then(function(pnr) {
            console.log(pnr);    //just object, i.e. {id: 123, name: 'Moo', color: 'white'}
        }, function(xhr) {
            console.log(xhr);   //XMLHtppRequest instance
        });
         }
      });
      
      try{
       
      }catch(e){
       console.log(e);
      }

    }
  }
});
