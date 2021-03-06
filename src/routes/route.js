const express = require('express');
const router = express.Router();
const testsController = require("../controllers/tests");

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
// route for Admin page
router.get('/testCreation', (req, res) => {
  console.log('Request for Admin page recieved');
  res.render('pages/testCreation');
});
router.post('/testCreation', (req, res) => {
    // console.log("index = ",req.body.testName);
    const isSaved = testsController.saveTest(req, res);
    console.log("SAVE status22 2= ",isSaved);
    if (isSaved) {
      res.status(200).json({ "message": "Save Success!" });
    }
    res.status(401).json({ "message": "Save Failed!" });
  });
module.exports = router;