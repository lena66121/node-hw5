const findProductsByCategory = require('./category')

const productsRoute = (req, res) => {
    if (req.method === 'GET' && req.url.includes('category')) {
        findProductsByCategory(req, res);
    }
}

module.exports = productsRoute;