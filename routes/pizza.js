const express = require('express');
const router = express.Router();

const pizzaCtrl = require('../controllers/pizza');

router.post('/', pizzaCtrl.createPizza);
router.get('/', pizzaCtrl.getAllPizzas);
router.get('/:id', pizzaCtrl.getOnePizza);
router.put('/:id', pizzaCtrl.updatePizza);
router.delete('/:id', pizzaCtrl.deletePizza);

module.exports = router;