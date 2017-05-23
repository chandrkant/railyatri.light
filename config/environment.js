/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'railyatri',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      pageTitle: {
        replace: true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.RAILS_SERVER ="";
    ENV['ember-cli-styles-reloader'] = {
     animateChanges: true
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.RAILS_SERVER ="";
    ENV.locationType = 'none';
    ENV['ember-cli-styles-reloader'] = {
     animateChanges: true
    };
    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.RAILS_SERVER ="https://railyatrilight.herokuapp.com";
  }

  return ENV;
};
