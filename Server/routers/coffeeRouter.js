const express = require('express');
const router = express.Router();

//coffee controllers
const { getCoffeeList, getCoffeeSingle, createCoffee, editCoffee, deleteCoffee } = require('../controllers/coffeeController');

//middleware
const { checkCoffeeExist } = require('../middleware/CoffeeExistMiddleware');

router.get('/', getCoffeeList);
router.get('/:id', checkCoffeeExist, getCoffeeSingle);
router.post('/', createCoffee);
router.put('/:id', checkCoffeeExist, editCoffee);
router.delete('/:id', checkCoffeeExist, deleteCoffee);

module.exports = router;