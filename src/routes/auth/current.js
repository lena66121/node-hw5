const jwt = require('jsonwebtoken');
const User = require('../../modules/schemas/user')

const currentUser = (req, res, next) => {

    const token = req.get('Authorization').replace('Bearer ', '');

    const email = jwt.decode(token).email;
    console.log(email);

    User.find({email})
    .then((user) => {
        if (user.length === 0) {
            return res.status(404).json({
                message: 'User does not exist'
            })
        }

        return res.status(404).json({
            status: 'success',
            user
        })
    })
    .catch(err => {
        return res.status(500).json({
            message: err.message
        })
    })
}

module.exports = currentUser;