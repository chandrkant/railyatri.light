import Ember from 'ember';
export default Ember.Route.extend({
 model: function() {
   return this.store.createRecord('time-table-search');
  }
});
