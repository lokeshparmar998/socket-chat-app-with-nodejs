const express=require('express');
const router=express.Router();
const UserController=require('../controller/user');

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
  console.log("helloform home");
  res.render('home');
});

router.get('/signin',function(req,res){
  res.render('signin');
});

router.get('/signup',function(req,res){
  res.render('signup');
});

router.post('/signup',function(req,res){
  console.log("hello");
});


//exporting module
module.exports.router=router;
