const Order = require('../../modules/schemas/order')

const ordersRoute = (req, res) => {

    const order = new Order(req.body);
    order.save()
        .then((order) => {
            res.status(200).json({
                status: 'success',
                order
            });
        })
        .catch((err) => {
            console.log(err.ValidatorError)
            res.status(400).json({
                status: err.name
            });
        })
}

module.exports = ordersRoute;