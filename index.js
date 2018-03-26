/* require modules */
var express=require('express');
var morgan=require('morgan');
var bodyParser=require('body-parser');
var user = require('./routes/user');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/chatApp');

var app=express();

/* templating engine for dynamic comtent */
app.set('view engine','ejs');

/* middleware */
app.use('/assets',express.static('assets')); // name of the folder where my static files are (assets)
app.use(morgan('dev'));
app.use(bodyParser.json());

/* routes */
app.use('/user',user.router);


//start server
//const port=process.env.PORT || 3000; //check if the enviorment port is available
app.listen(3000);
console.log('listening to port 3000');
