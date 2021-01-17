const mongoose = require('mongoose');

const pizzaSchema = mongoose.Schema({
    name: { type: String, required: true },
    ingredients: { type: [], required: true },
    price: { type: Number, required: true }
});

module.exports = mongoose.model('Pizza', pizzaSchema);