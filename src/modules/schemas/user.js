const mongoose = require('mongoose');
const { Schema } = mongoose;
var uniqueValidator = require('mongoose-unique-validator');

const userSchema = new Schema({
    username: String,
    telephone: String,
    password: {
        type: String,
        select: false
    },
    email: String,
    favoriteProducts: Array,
    viewedProducts: Array,
    orders: Array
}, {versionKey: false})

userSchema.plugin(uniqueValidator);

const User = mongoose.model('User', userSchema);

module.exports = User;
