const express=require('express');
const router=express.Router();
const UserController=require('../controller/user');
const bcrypt =require('bcryptjs');
let user= require('../models/user');
const passport=require('passport');


/* routing */
/*
  router.get('/home',UserController.Home);
  router.get('/signup',UserController.signup);
  router.post('/signup',UserController.signUpPost);
  router.get('/signin',UserController.signIn);
  router.post('/signin',UserController.signInPost);
  */
//router.post('/chat',UserController.Chat);


//get request
router.get('/home',function(req,res){
  res.render('home');
});

router.get('/signin',function(req,res){
  res.render('signin');
});

router.get('/signup',function(req,res){
  res.render('signup');
});

router.get('/chat',function(req,res){
  res.render('chat');
});

router.get('/logout',function(req,res){
  req.logout();
  res.redirect('/user/signin');
});

//post request
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
              res.redirect('/user/signin');
            }
          });
        }
      });
    });
});

router.post('/signin',function(req,res,next){
  passport.authenticate('local',{
    successRedirect: '/user/chat',
    failureRedirect: '/user/signup'
  })(req,res,next);
});

//authentication function
function ensureAuthenticated(req,res,next){
  if(req.isAuthenticated())
  {
    console.log('login');
    return next();
  }else{
    res.redirect('/user/signin');
    console.log('not login');
  }
}

//exporting module
module.exports.router=router;
