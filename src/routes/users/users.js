const User = require('../../modules/schemas/user');

const usersRoute = (req, res) => {

    const user = new User(req.body);

    user.save()
        .then(() => {
            res.status(200)
                .json({
                    status: 'success',
                    user
                });
        })
        .catch(() => {
            res.status(400)
                .json({
                    status: "failed"
                });
        })
};

module.exports = usersRoute;