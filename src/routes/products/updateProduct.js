const User = require('../../modules/schemas/user');

const updateProduct = (req, res) => {
    const id = req.params.id;

    User.findByIdAndUpdate(id, req.body, (err, data) => {
        if(err) {
            console.log(err)
        } else {
            res.status(200).json({status: 'success', "product": data});
        }
    })


}