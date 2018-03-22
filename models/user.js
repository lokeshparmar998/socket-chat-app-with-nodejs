const mongoose=require('mongoose');
const Schema= mongoose.schema;

//create a schema
const userSchema = new Schema({ // our schema
  email: String,
  password: String
})

//create model
const User = mongoose.model('user',userSchema); // this function will create a model(user) and return it

//export model
module.exports= User;
