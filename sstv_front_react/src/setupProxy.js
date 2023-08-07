const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    ['/user','/fan','/Community','/community', '/purchase', '/ticket' , '/product'],
    createProxyMiddleware({
      // target: 'http://223.130.135.131:8080',
        // target: 'http://localhost:8080',
        target: 'http://192.168.0.21:8080',
      changeOrigin: true,
    })
  );

  

  app.use(
    ['/donation', '/streaming'],
    createProxyMiddleware({
      // target: 'http://www.api.ssstvv.com',
        target: 'http://localhost:3001',
        // target: 'http://192.168.0.21:3001',
      changeOrigin: true,
    })
  );
};