const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

const commentSchema = new Schema({
    product: Schema.Types.ObjectId,
    author: Schema.Types.ObjectId,
    text: String,
    mark: {
        type: Number,
        min: 1,
        max: 5
    }
}, {versionKey: false})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment;