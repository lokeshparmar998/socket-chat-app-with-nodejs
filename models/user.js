const mongoose=require('mongoose');

//create a schema
let loginSchema = mongoose.Schema({
  username:{
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  telephone :{
    type: String,
    required: true
  }
})

//create model
const User = mongoose.model('user',loginSchema); // this function will create a model(user) and return it

//export model
module.exports= User;
