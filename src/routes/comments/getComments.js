const Comment = require('../../modules/schemas/comment');

const getComment = (req, res) => {
    const findId = req.query.productId;
    const lastIndex = findId.lastIndexOf('"');
    const firstIndex = findId.indexOf('"');
    const id = findId.slice(firstIndex + 1, lastIndex);
    console.log(id);

    Comment.find({product: id})
        .then(comments => {
            res.status(200).json({
                status: 'success',
                comments
            })
        })
        .catch(err => {
            res.status(400).json({
                status: 'success',
                comments: []
            });
        })
}

module.exports = getComment;