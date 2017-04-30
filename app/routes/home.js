import Ember from 'ember';
export default Ember.Route.extend({
actions: {
    openConfirmationModal: function() {
      return this.send('openModal', 'confirmation/new');
    }
  }
});
