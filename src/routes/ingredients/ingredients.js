const Ingredient = require('../../modules/schemas/ingredient');

const createIngredient = (req, res) => {

    const newIngredient = new Ingredient(req.body);

    newIngredient.save()
        .then((ingredient) => {
            res.status(200).json({
                status: 'created',
                ingredient
            })

        })
        .catch(err => {
            res.status(400).json({
                status: 'no products',
                products: []
            });
        })

}

module.exports = createIngredient;