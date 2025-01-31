//Define dependencies
const express = require('express');

//initialize express
const app = express();
var path = require("path");

//require and initialize .ev
require('dotenv').config();

//define port
const port = process.env.PORT;

//database configuration & passport
const db = require('./config/db');

//Require & import routes
// const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const authRouter = require('./routes/auth');

//Mount routes
// app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/auth', authRouter);

//Console
app.listen(port, () => {
    console.log(`WILD WONDERS App running on Port \u001b[1;35m${port}\u001b[0m`);
});

//use for scales object to be available in all views
// app.use(function (req, res, next) {
//     res.locals.scales = scales;
//     next();
//   });

