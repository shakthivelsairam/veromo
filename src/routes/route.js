const express = require('express');
const router = express.Router();

router.get(['/','/login'], (req, res) => {
  console.log('Request for login page recieved');
  res.render('pages/login');
});

// route for user logout
router.get('/logout', (req, res) => {
  try{
    console.log("logout req.session.user = ", req.session.user)
    console.log("logout req.cookies.user_sid = ", req.cookies.user_sid)
  if (req.session.user && req.cookies.user_sid) {
    res.clearCookie('user_sid');
  }
  res.status(200).json({});
}catch(error){
  console.log("in logout = ", error)
}
});

router.get('/home', (req, res) => {
  console.log('Request for home page recieved');
  res.render('pages/home');
});

module.exports = router;