const proxy = require("http-proxy-middleware");

module.exports = function (app) {

  app.use(
    proxy(`/episituation-service`, {
      target: "http://jsonplaceholder.typicode.com" ,
      changeOrigin: true,
      pathRewrite: { '/episituation-service': '' }
    })
  );
};
