const express = require('express');
const router = express.Router();
const testsController = require("../controllers/tests");

router.get(['/','/login'], (req, res) => {
  res.render('pages/login');
});

// route for user logout
router.get('/logout', (req, res) => {
  try{
    if (req.session.user && req.cookies.user_sid) {
      res.clearCookie('user_sid');
    }
    res.status(200).json();
  } catch(error){
    console.log("in logout = ", error)
  }
});

router.get('/home', (req, res) => {
  res.render('pages/home');
});
// route for Admin page
router.get('/testCreation', (req, res) => {
  res.render('pages/testCreation');
});
router.post('/testCreation', async (req, res) => {
    console.log("testCreation = ",req.body);
    const isSaved = await testsController.saveTest(req, res);
    if (isSaved) {
      res.status(200).json({});
    } else {
      res.status(500).json();
    }
  });
module.exports = router;