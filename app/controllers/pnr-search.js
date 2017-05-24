import Ember from 'ember';

export default Ember.Controller.extend({
  title: "PNR Search",
  actions: {
     gePnrStatus: function(){
       var pnr_number = Ember.$("#pnr-number").val();
       this.transitionToRoute('pnr-result',pnr_number);
     }
  }
});
