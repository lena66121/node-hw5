const mongoose = require('mongoose');
const { Schema } = mongoose;

const ingredientSchema = new Schema({
    name: String,
    description: String
}, {versionKey: false})

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;
