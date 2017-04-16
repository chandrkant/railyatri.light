import Ember from 'ember';

export default Ember.View.extend({
    templateName: 'home',
    didInsertElement : function(){
      this._super();
      Ember.Logger.log('test');


    },
    

});
