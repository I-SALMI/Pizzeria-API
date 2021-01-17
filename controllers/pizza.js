const Pizza = require('../models/pizza');

//Function connected to the pizzeria/pizza/ POST route
exports.createPizza = (req, res, next) => {
    const { name, ingredients } = req.body;
    const pizza = new Pizza({
        name: name,
        ingredients: ingredients,
        price: ingredients.reduce((accumVariable, curValue) => accumVariable + curValue.price, 0)
    });
    pizza.save().then(
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

//Function connected to the pizzeria/pizza/ GET route
exports.getAllPizzas = (req, res, next) => {
    Pizza.find().then(
        (pizzas) => {
            res.status(200).json(pizzas);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

//Function connected to the pizzeria/pizza/:id GET route
exports.getOnePizza = (req, res, next) => {
    Pizza.findOne({
        _id: req.params.id
    }).then(
        (pizza) => {
            res.status(200).json(pizza);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};

//Function connected to the pizzeria/pizza/:id PUT route
exports.updatePizza = (req, res, next) => {
    const pizza = new Pizza({
        name: req.body.name,
        ingredients: req.body.ingredients,
        price: req.body.price
    });
    Pizza.updateOne({ _id: req.params.id }, pizza).then(
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

//Function connected to the pizzeria/pizza/:id DELETE route
exports.deletePizza = (req, res, next) => {
    Pizza.deleteOne({ _id: req.params.id }).then(
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