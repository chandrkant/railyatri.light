// To use it create some files under `routes/`
// e.g. `server/routes/ember-hamsters.js`
//
// module.exports = function(app) {
//   app.get('/ember-hamsters', function(req, res) {
//     res.send('hello');
//   });
// };

var bodyParser = require('body-parser');
var globSync = require('glob').sync;
var routes = globSync('./routes/**/*.js', { cwd: __dirname }).map(require);

/*
This sets up the proxying to the rails server, or will use the API stubs.

The environment variable RAILS_SERVER is used, and can have the following values:

<missing>         : defaults to http://localhost:3000...the default port for Rails.
API_STUBS         : use the generated API stubs under /server/routes/api/.
<everything else> : Use value+'/api' as the API endpoint.
 */
module.exports = function (app) {
  //To get PUTs and POSTs to work via the Proxy
  // comment the following line
  //app.use(bodyParser());

  // TODO - figure out why proxy option on ember server does not work and remove this
  // and proxy-middleware in package.json
  var proxy = require('proxy-middleware');
  var server = railsServer();
  if (server === 'API_STUBS') {
    console.log('API Stubs.');
    routes.forEach(function (route) {
      route(app);
    });
  }
  else {
    var apiEndpoint = server + '/api';
    console.log('API:', apiEndpoint);
    app.use('/api', proxy(require('url').parse(apiEndpoint)));
  }

};

// Return RAILS_SERVER env var, or default to localhost:3000
function railsServer() {
  // process.env has environment vars in Node.
  var backend = process.env['RAILS_SERVER'];
  if (!backend) {
    backend = 'http://test.railyatri.in';
    console.log("No RAILS_SERVER set, defaulting to", backend);
  }
  else {
    console.log('RAILS_SERVER is', backend);
  }
  return backend;
}
