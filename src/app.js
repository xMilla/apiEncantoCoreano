const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const productsRouter = require('./routes/productsRoutes');
const userRouter = require('./routes/usersRoutes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', apiRouter);
app.use('/products', productsRouter);
app.use('/users', userRouter);


module.exports = app;
