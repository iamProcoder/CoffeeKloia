const express = require('express');

//routers
const coffee = require('./coffeeRouter');

// api
const router = express.Router();

router.use('/', coffee);

module.exports = router;