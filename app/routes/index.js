import Ember from 'ember';

export default Ember.Route.extend({
 redirect: function() {
    this.transitionTo('home');
  },
   actions: {
    openConfirmationModal: function() {
      return this.send('openModal', 'confirmation/new');
    }
  }
});
