const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDatabase = require("./helpers/connectDatabase");
const customErrorHandler = require("./helpers/customErrorHandler");
const routers = require('./routers')

//enviroment variables
dotenv.config({
    path: "./config/config.env"
});

//mongo db conncection
connectDatabase();

const app = express();
//Express Body Middleware
app.use(express.json());
const PORT = process.env.PORT;

//cors
app.use(cors());

//Routers Middleware
app.use("/coffee", routers);

//Error Handler Middleware
app.use(customErrorHandler);

app.use((req, res, next) => {
    res.status(200).json('server is running..');
  });

app.listen(PORT, () => {console.log(`App started on ${PORT}`);});

module.exports = app;