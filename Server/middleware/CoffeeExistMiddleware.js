const Coffee = require('../models/Coffee');
const CustomError = require('../helpers/CustomError');
const asyncErrorWrapper = require('express-async-handler');

const checkCoffeeExist = asyncErrorWrapper(async (req, res, next) => {
    const {id} = req.params;
    const coffee = await Coffee.findById(id);
    if (!coffee) {
        return next(new CustomError('There is no such Coffee with that id.', 400));
    }
    req.checkCoffee = coffee;
    next();
});

module.exports = { checkCoffeeExist };