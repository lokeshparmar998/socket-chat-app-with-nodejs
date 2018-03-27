module.exports={
  Home: function (req,res)
  {
    res.render('home');
  },

 signUp: function (req,res)
  {
    res.render('signup');
  },
  signUpPost: function(req,res){
    console.log("hello from up post");
  },
  signIn: function (req,res)
  {
    res.render('signin');
  },
  signInPost: function(req,res){
     console.log("hello from in post");
 }

};
