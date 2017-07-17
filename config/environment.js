/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    // BACKEND: process.env['RAILS_SERVER'] || 'NOTDEFINED',
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
       // when it is created
      NAMESPACE: 'api/v1',
      LOGIN_URI: '/users/sign_in',
      REGISTER_URI: '/users',
      HOST: '',
      // BACKEND: BACKEND,
      environment: environment
    },
    'simple-auth': {
        authorizer: 'simple-auth-authorizer:devise'
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.RAILS_SERVER ="";
    ENV.apiURL = 'http://127.0.0.1:3000';
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
    ENV.apiURL = 'https://railyatrilight.herokuapp.com';
  }
  // ENV['simple-auth-devise'] = {
  //   serverTokenEndpoint:  ENV.RAILS_SERVER + ENV.APP.LOGIN_URI,
  //   resourceName: 'user'
  // };
  
  return ENV;
};
