module.exports = function (app) {
  var proxy = require('http-proxy-middleware');
  var apiProxy = proxy('/api', {
    target: 'http://localhost:3000',
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug'
  });
  app.use(apiProxy);
};

