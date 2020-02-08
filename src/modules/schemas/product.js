const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    sku: String,
    name: String,
    description: String,
    price: Number,
    currency: String,
    categories: Array,
    creatorId: Number,
    ingredients: {
      type: Schema.Types.ObjectId,
      ref: 'Ingredient'
    },
    created:{
        type: String,
        default: Date.now
      },
    modified: Date, 
    likes: Number
}, {versionKey: false})

const Product = mongoose.model('Product', userSchema);

module.exports = Product;
