import Ember from 'ember';

export default Ember.Controller.extend({
  title: "Home",
  actions: {
    openDetailsModal: function (result) {

      return this.send('openModal', 'modals.new', result);
    }
  }
});
