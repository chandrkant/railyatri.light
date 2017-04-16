import Ember from 'ember';
export default Ember.Route.extend({
 model: function() {
   return this.store.createRecord('live-arr-dep-search');
  }
});

