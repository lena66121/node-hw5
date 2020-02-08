const Order = require('../../modules/schemas/order');

const orderById = (req, res) => {
    const id = req.params.id;

    Order.findById(id)
    .then(order => {
        res.status(200).json({status: 'success', order})
    })
    .catch(err => {
        res.status(400).json({status: 'not found'});
    })

}

module.exports = orderById;