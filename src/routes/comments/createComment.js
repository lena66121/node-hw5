const Comment = require('../../modules/schemas/comment')

const createComment = (req, res) => {

    const comment = new Comment(req.body);

    comment.save()
    .then(comment => {
                res.status(200).json({
                    status: 'created',
                    comment
                })
            })
            .catch(err => {
                console.log(err);
                res.status(400).json({
                    status: 'failed',
                    err: err.message
                });
            })

}

module.exports = createComment;