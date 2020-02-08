const User = require('../../modules/schemas/user');

const userId = (req, res) => {
    const id = req.params.id;

    if (req.method === 'GET') {

        User.findById(id)
        .then(user => {
            res.status(200).json({status: 'success', user})
        })
        .catch(err => {
            res.status(400).json({status: 'not found'});
        })

    } else if (req.method === 'PUT') {

        User.findByIdAndUpdate(id, req.body, (err, data) => {
            if(err) {
                console.log(err)
            } else {
                res.status(200).json({status: 'success', "product": data});
            }
        })

    }

    
}

module.exports = userId;