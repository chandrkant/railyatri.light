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
  this.route('live-arr-dep-search');
  this.route('trains-between-station');
  this.route('time-table-search');
});

export default Router;
