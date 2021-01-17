const express = require('express');
const router = express.Router();

const ingredientCtrl = require('../controllers/ingredient');

router.post('/', ingredientCtrl.createIngredient);
router.get('/', ingredientCtrl.getAllIngredients);
router.get('/:id', ingredientCtrl.getOneIngredient);
router.put('/:id', ingredientCtrl.updateIngredient);
router.delete('/:id', ingredientCtrl.deleteIngredient);

module.exports = router;