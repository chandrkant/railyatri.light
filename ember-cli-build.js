/*jshint node:true*/
/* global require, module */
var pickFiles = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  
var bootstrapFonts = pickFiles('bower_components/bootstrap/dist/fonts', {
    srcDir: '/',
    destDir: '/fonts'
  });

var bootstrapCssMap = pickFiles('bower_components/bootstrap/dist/css', {
  srcDir: '/',
  files: ['bootstrap.css.map'],
  destDir: '/assets'
});

var countryImages= pickFiles('bower_components/bootstrap-formhelpers/dist/img', {
    srcDir: '/',
    destDir: '/img'
});

var faFonts = pickFiles('bower_components/font-awesome/fonts', {
    srcDir: '/',
    files: ['fontawesome-webfont.eot','fontawesome-webfont.ttf','fontawesome-webfont.svg','fontawesome-webfont.woff'],
    destDir: '/fonts'
});

var jqueryImages= pickFiles('bower_components/jquery-ui/themes/base/images', {
    srcDir: '/',
    destDir: '/assets/images'
});

var app = new EmberApp(defaults, {
    name: require('./package.json').name,
    minifyCSS: {
      enabled: true,
      options: {}
    }
  });

app.import('bower_components/bootstrap/dist/css/bootstrap.css');
app.import('bower_components/bootstrap/dist/css/bootstrap-theme.min.css');
app.import('bower_components/multiselect/css/multi-select.css');
app.import('bower_components/bootstrap/dist/js/bootstrap.js');
// Bootstrap form helper
app.import('bower_components/bootstrap-formhelpers/dist/css/bootstrap-formhelpers.min.css');
app.import('bower_components/bootstrap-formhelpers/dist/js/bootstrap-formhelpers.min.js');

// font-awesome
app.import('bower_components/font-awesome/css/font-awesome.min.css');

//datatables
app.import('bower_components/moment/moment.js');
app.import('bower_components/moment-timezone/builds/moment-timezone-with-data-2010-2020.js');
app.import('bower_components/jstz/jstz.js');
app.import('bower_components/jquery.cookie/jquery.cookie.js');
app.import('bower_components/multiselect/js/jquery.multi-select.js');
app.import('bower_components/jquery-ui/ui/jquery.ui.core.js');
app.import('bower_components/jquery-ui/ui/jquery.ui.widget.js');
app.import('bower_components/jquery-ui/ui/jquery.ui.mouse.js');
app.import('bower_components/jquery-ui/ui/jquery.ui.draggable.js');
app.import('bower_components/jquery-ui/ui/jquery.ui.droppable.js');
app.import('bower_components/jquery-ui/ui/jquery.ui.menu.js');
app.import('bower_components/jquery-ui/ui/jquery.ui.position.js');
app.import('bower_components/jquery-ui/ui/jquery.ui.autocomplete.js');
app.import('bower_components/jquery-ui/themes/base/jquery-ui.css');
app.import('bower_components/jquery-ui/themes/base/jquery.ui.theme.css');
// pikaday date picker
app.import('bower_components/pikaday/pikaday.js');

// Add fullcalendar
app.import('bower_components/fullcalendar/dist/fullcalendar.css');
app.import('bower_components/fullcalendar/dist/fullcalendar.js');

// Add timepicker
app.import('bower_components/jquery-timepicker-jt/jquery.timepicker.css');
app.import('bower_components/jquery-timepicker-jt/jquery.timepicker.min.js');


app.import('bower_components/alertifyjs/dist/js/alertify.js');
app.import('bower_components/alertifyjs/dist/css/alertify.css');
app.import('bower_components/pluralize/pluralize.js');
app.import('bower_components/fakeLoader/fakeLoader.min.js');
app.import('bower_components/fakeLoader/fakeLoader.css');


app.import('bower_components/ic-ajax/dist/named-amd/main.js', {
  exports: {
    'ic-ajax': [
      'default',
      'defineFixture',
      'lookupFixture',
      'raw',
      'request',
    ]
  }
});

//Fix for prduction build issue
// http://stackoverflow.com/a/25916762
var handlebars_runtime_index = app.legacyFilesToAppend.indexOf('bower_components/handlebars/handlebars.runtime.js');
if(handlebars_runtime_index) {
  app.legacyFilesToAppend[handlebars_runtime_index] = 'bower_components/handlebars/handlebars.js';
}

  return mergeTrees([app.toTree(),bootstrapFonts,bootstrapCssMap,countryImages,countryImages,faFonts,jqueryImages],{overwrite: true });
};
