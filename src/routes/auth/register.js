const User = require('../../modules/schemas/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {
    secretKey
} = require('../../config');


const registerUser = (req, res) => {

    const {
        username,
        telephone,
        email
    } = req.body;

    const user = new User({
        username,
        telephone,
        email,
    })
    const token = jwt.sign({username, email}, secretKey);

    bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
        if (err) throw err;

        user.password = hashedPassword;

        user.save()
        .then(() => {
            return res.status(201).json({
                status: 'success',
                user: {
                    username,
                    telephone,
                    email,
                    token
                }
            })
        })
               .catch(() => {
            res.status(400)
                .json({
                    status: "failed"
                });
        })
    })

}

module.exports = registerUser;