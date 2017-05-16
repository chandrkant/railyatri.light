import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('time-table');
  this.route('live-arr-dep');
  this.route('live-arr-dep-search',{path: "/arrival-departure"});
  this.route('trains-between-station');
  this.route('time-table-search',{path: '/time-table'} );
  this.route('time-table',{path: '/time-table/:train_number'});
  this.route('live-arr-dep-result',{path: "/arrival-departure/:from_code"});
  this.route('confirmation', function() {
    this.route('new');
  });

  this.route('modals', function() {
    this.route('new');
  });
  // this.route('live-arr-dep-result',{path: "/arrival-departure/:from_code/:to_code"});

  this.route('bus-booking', function() {
    this.route('search');
    this.route('search-result',{path: "/operator-list/:from" });
    this.route('change-seat');
    this.route('review-details');
  });

  this.route('payment', function() {
    this.route('select-payment');
  });
});

export default Router;
