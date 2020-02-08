const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
    creator: String,
    productsList: [{
        product: Number,
        type: {
            type: String,
            enum: ['M', 'XL', 'XXL']
        },
        itemsCount: Number
    }],
    deliveryType: {
        type: String,
        enum: ['delivery', 'office']
    },
    deliveryAddress: String,
    sumToPay: Number,
    status: {
        type: String,
        enum: ['inProgress', 'declined', 'finished', 'failed']
    }
}, {versionKey: false})

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;