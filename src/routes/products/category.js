const Product = require('../../modules/schemas/product');

const productsCategory = (req, res) => {
    const foundCategory = req.query.category;
    const lastIndex = foundCategory.lastIndexOf('"');
    const firstIndex = foundCategory.indexOf('"');
    const category = foundCategory.slice(firstIndex + 1, lastIndex);

    Product.find({
            categories: [category]
        })
        .then(products => {
            res.status(200).json({
                status: 'success',
                products
            })
        })
        .catch(err => {
            res.status(400).json({
                status: 'no products',
                products: []
            });
        })
}

module.exports = productsCategory;