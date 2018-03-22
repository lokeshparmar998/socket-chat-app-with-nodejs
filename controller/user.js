module.exports={
  Home: function (req,res,next)
  {
    res.render('home');
  },
  signUp: function (req,res,next)
  {
    res.render('signup');
  },
  signIn: function (req,res,next)
  {
    console.log('signin was called');
  },
  Chat: function (req,res,next)
  {
    console.log('Chat was called');
  }
}
