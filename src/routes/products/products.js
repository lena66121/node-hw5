const Product = require('../../modules/schemas/product')


const productsRoute = (req, res) => {

    Product.find({})
    .then(products => {
        res.status(200).json({
            status: 'success',
            products
        })
    })
    .catch(err => {
        res.status(400).json({
            status: 'failed'
        });
    })
}

module.exports = productsRoute;