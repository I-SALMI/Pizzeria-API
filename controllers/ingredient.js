const Ingredient = require('../models/ingredient');

//Function connected to the pizzeria/ingredient/ POST route
exports.createIngredient = (req, res, next) => {
    const { name, price } = req.body;
    const ingredient = new Ingredient({
        name: name,
        price: price
    });
    ingredient.save().then(
        () => {
            res.status(201).json({
                message: 'Post saved successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

//Function connected to the pizzeria/ingredient/ GET route
exports.getAllIngredients = (req, res, next) => {
    Ingredient.find().then(
        (ingredients) => {
            res.status(200).json(ingredients);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

//Function connected to the pizzeria/ingredient/:id GET route
exports.getOneIngredient = (req, res, next) => {
    Ingredient.findOne({
        _id: req.params.id
    }).then(
        (ingredient) => {
            res.status(200).json(ingredient);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};

//Function connected to the pizzeria/ingredient/:id PUT route
exports.updateIngredient = (req, res, next) => {
    const ingredient = new Ingredient({
        name: req.body.name,
        price: req.body.price
    });
    Ingredient.updateOne({ _id: req.params.id }, ingredient).then(
        () => {
            res.status(201).json({
                message: 'Thing updated successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

//Function connected to the pizzeria/ingredient/:id DELETE route
exports.deleteIngredient = (req, res, next) => {
    Ingredient.deleteOne({ _id: req.params.id }).then(
        () => {
            res.status(200).json({
                message: 'Deleted!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};