const Product = require('../../modules/schemas/product');

const productId = (req, res) => {
     const id = req.params.id;

     if (req.method === 'GET') {

          Product.findById(id)
               .populate('ingredients')
               .then(product => {
                    res.status(200).json({
                         status: 'success',
                         product
                    })
               })
               .catch(err => {
                    res.status(400).json({
                         status: 'no products',
                         products: []
                    });
               })

     } else if (req.method === 'PUT') {

          Product.findByIdAndUpdate(id, req.body, (err, data) => {
               if (err) {
                    console.log(err)
               } else {
                    res.status(200).json({
                         status: 'success',
                         "product": data
                    });
               }
          })

     }
}

module.exports = productId;