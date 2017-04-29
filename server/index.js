module.exports = function (app) {
  var proxy = require('http-proxy-middleware');
  var apiProxy = proxy('/api', {
    target: 'https://railyatrilight.herokuapp.com',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
  });
  app.use(apiProxy);
};

