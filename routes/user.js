const express=require('express');
const router=express.Router();
const UserController=require('../controller/user');
const bcrypt =require('bcryptjs');
let user= require('../models/user');


/* routing */
/*
  router.get('/home',UserController.Home);
  router.get('/signup',UserController.signup);
  router.post('/signup',UserController.signUpPost);
  router.get('/signin',UserController.signIn);
  router.post('/signin',UserController.signInPost);
  */
//router.post('/chat',UserController.Chat);



router.get('/home',function(req,res){
  res.render('home');
});

router.get('/signin',function(req,res){
  res.render('signin');
});

router.get('/signup',function(req,res){
  res.render('signup');
});

router.post('/signup',function(req,res,err){
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const telephone = req.body.telephone;
    let newUser = new user({
      username: username,
      password: password,
      email: email,
      telephone: telephone
    });
    bcrypt.genSalt(10, function(err,salt){
      bcrypt.hash(newUser.password,salt,function(err,hash){
        if(err){
          console.log("error 2",err);
        }
        else{
          newUser.password= hash;
          newUser.save(function(err){
            if(err)
            {
              console.log("error 3",err);
              return;
            }
            else {
              console.log('new user added');
              res.redirect('/user/home');
            }
          });
        }
      });
    });
});

router.post('/signin',function(req,res){
  console.log("hello from in");
});


router.get('/chat',function(req,res){
  res.render('chat');
});




//exporting module
module.exports.router=router;
