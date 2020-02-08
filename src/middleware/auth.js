const jwt = require('jsonwebtoken');
const { secretKey } = require('../config')

const auth = (req, res, next) => {

    const authHeader = req.get('Authorization');
    if (!authHeader) {
        return res.status(401).json({message: 'Token not provided'});
    }

    const token = authHeader.replace('Bearer ', '');

    try {
        jwt.verify(token, secretKey)
    } catch (e) {
        res.status(400).json({message: e.message})

    }

    next()
}

module.exports = auth;