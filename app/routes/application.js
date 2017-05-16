import Ember from 'ember';
import RouteHistoryMixin from 'ember-cli-history-mixin/mixins/route-history';
import ParentRouteMixin from 'ember-cli-history-mixin/mixins/parent-route';
export default Ember.Route.extend(ParentRouteMixin,RouteHistoryMixin,{
  actions: {
    openModal: function(modalName,model) {
     this.controllerFor(modalName).set('model', model);
      return this.render(modalName, {
        into: 'application',
        outlet: 'modal'
      });
    },
    closeModal: function() {
      return this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    },
    drawer: function(){
      Ember.$('.drawer').drawer();
    }
  }
});