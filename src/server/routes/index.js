const productRoutes = require('./productRoutes');

module.exports = function routes(app) {
  app.use('/products', productRoutes);
};
