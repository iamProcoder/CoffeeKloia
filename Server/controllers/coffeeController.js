const Coffee = require('../models/Coffee');
const CustomError = require('../helpers/CustomError');
const asyncErrorWrapper = require('express-async-handler');

const getCoffeeList = asyncErrorWrapper(async (req, res, next) => {
    let query = Coffee.find();
    if (req.query.search) {
        const searchObj = {};
        const regex = new RegExp(req.query.search, "i");
        searchObj[req.query.searchKey] = regex;
        query = query.where(searchObj);
    }

    const allCoffes = await query;

    res.status(200).json({success: true, count: allCoffes.length, data: allCoffes});
});

const getCoffeeSingle = asyncErrorWrapper(async (req, res, next) => {
    const singleCoffee = req.checkCoffee;

    res.status(200).json({success: true, data: singleCoffee});
});

const createCoffee = asyncErrorWrapper(async (req, res, next) => {
    const addInformation = req.body;
    const coffee = await Coffee.create({...addInformation});

    res.status(201).json({success: true, message: "Coffee object to be created", data: coffee});
});

const editCoffee = asyncErrorWrapper(async (req, res, next) => {
    const editInformation = req.body;
    const { id } = req.params;
    const coffee = await Coffee.findByIdAndUpdate(id, editInformation, { new: true, runValidators: true });

    return res.status(200).json({ success: true, message: "updated coffee", data: coffee });
});

const deleteCoffee = asyncErrorWrapper(async (req, res, next) => {
    const coffee = req.checkCoffee;
    await coffee.remove();

    return res.status(200).json({success: true, message: 'Deletes a single coffee'});
});

module.exports = { getCoffeeList, getCoffeeSingle, createCoffee, editCoffee, deleteCoffee };