'use strict';
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();
/**     **
 * Import Routes
 */
const indexRoutes = require('./routes');
const delivery = require('./routes/admin')


const bodyParser = require('body-parser');

// Tell the bodyparser middleware to accept more data
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


/**
 * Using Routes
 */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', indexRoutes);
app.use('/delivery', delivery);






module.exports = app;
