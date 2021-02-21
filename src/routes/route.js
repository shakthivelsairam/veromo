const express = require('express');
const router = express.Router();
const usersController = require("../controllers/users");

router.get(['/','/login'], (req, res) => {
  console.log('Request for login page recieved');
  res.render('pages/login');
});

router.post('/login', (req, res) => {
  console.log('Request for post login page recieved');
  const isValidLogin = usersController.isValidLogin(req, res);
  if (isValidLogin) {
    res.status(200).json({ "message": "Login Success!" });
  }
  res.status(401).json({ "message": "Login Failed!" });
});

router.get('/home', (req, res) => {
  console.log('Request for home page recieved');
  res.render('pages/home');
});

module.exports = router;