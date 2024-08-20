const express = require('express');
const morgan = require('morgan');
const {default: helmet} = require('helmet');
const compression = require('compression');

const app = express();

//!init midlewares 

//* use for dev environment
app.use(morgan("dev"));
//* use for product environment
//app.use(morgan("combined"));
// morgan("common")
// morgan("short")
// morgan("tiny")

app.use(helmet());
app.use(compression());


//!init db
require('./dbs/init.mongodb')
const { checkOverload } = require('./helpers/check.connect')
checkOverload()

//!init routes
app.get('/', (req, res, next) => {
    const strCompression = 'Hello World'

    return res.status(200).json({
        message: 'welcome!!',
        metadata: strCompression.repeat(100000),
    })
})

//!handle errors

module.exports = app