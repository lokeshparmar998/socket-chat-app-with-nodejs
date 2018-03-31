/* require modules */
var express=require('express');
var bodyParser=require('body-parser');
var user = require('./routes/user');
var mongoose = require('mongoose');
var login = require('./models/user');

//connection to the database
mongoose.connect('mongodb://localhost/chatApp'); // database with name chatApp
let db = mongoose.connection;

//check connection
db.once('open',function(){
  console.log('connected to mongodb');
});

//check for db error
db.on('error',function(err){
  console.log(err);
});

var app=express();

/* templating engine for dynamic comtent */
app.set('view engine','ejs');

/* middleware */
app.use('/assets',express.static('assets')); // name of the folder where my static files are (assets)
// parse application
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

/* routes */
app.use('/user',user.router);

//start server
//const port=process.env.PORT || 3000; //check if the enviorment port is available
app.listen(3000);
console.log('listening to port 3000');
