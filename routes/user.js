const express=require('express');
const router=express.Router();
const UserController=require('../controller/user');

// joi modules not in use
const {validateBody} =require('../helper/routerHelpers');
const {schema} =require('../helper/routerHelpers');

/* routing */

  router.get('/home',UserController.Home);
  router.get('/signin',UserController.signIn);
  router.get('/signup',UserController.signUp);
  router.get('/chat',UserController.Chat);

/*   another way of routing
router.get('/home',function(req,res){
  console.log("helloform home");
  res.render('home');

});

router.get('/signin',function(req,res){
  console.log("hello form signin");
});

router.get('/signup',function(req,res){
  console.log("hell oform signup");
});
*/

//exporting module
module.exports.router=router;
