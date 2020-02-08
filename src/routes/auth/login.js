const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../modules/schemas/user');
const {
    secretKey
} = require('../../config');


const login = (req, res) => {

    const {
        email,
        password
    } = req.body;

    User.find({
            email
        })
        .then((user) => {

            if (user.length === 0) {
                return res.status(404).json({
                    message: 'User does not exist'
                })
            }

            const isValidPassword = bcrypt.compareSync(password, user[0].password);

            if (isValidPassword) {
                const token = jwt.sign(user[0]._id.toString(), secretKey);
                return res.status(200).json({
                    success: true,
                    token
                })
            } else {
                return res.status(403).json({
                    message: 'Authentication failed'
                })
            }
        })
        .catch(err => {
            return res.status(500).json({
                message: err.message
            })
        })
}

module.exports = login;