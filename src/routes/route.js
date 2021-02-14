const express = require('express');
const router = express.Router();

router.get(['/','/login'], (req, res) => {
  console.log('Request for login page recieved');
  res.render('pages/login');
});

router.post('/login', (req, res) => {
  console.log('Request for post login page recieved');
  res.render('pages/home');
});

router.get('/home', (req, res) => {
  console.log('Request for home page recieved');
  res.render('pages/home');
});

module.exports = router;