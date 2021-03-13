const express = require('express');
const router = express.Router();
const testsController = require("../controllers/tests");
const roleController = require("../controllers/role");
const deptController = require("../controllers/dept");

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
// Test Creation 
router.get('/testCreation', (req, res) => {
  res.render('pages/testCreation');
});
router.post('/testCreation', async (req, res) => {
    console.log("testCreation = ",req.body);
    const isSaved = await testsController.saveTest(req, res);
    console.log("Route",isSaved);
    if (res.error!="")  // If any error then return with the error
    {
      res.status(500).json({ errorMessage: res.error });
      return;
    }
    if (isSaved) {
      res.status(200).json({});
    } else {
      res.status(500).json({});
    }
  });
  // Role Maintenance
  router.get('/roleMaintenance', (req, res) => {
    res.render('pages/roles');
  });
  router.post('/roleMaintenance', async (req, res) => {
      const isSaved = await roleController.saveRole(req, res);
      if (res.error!="")  // If any error then return with the error
      {
        res.status(500).json({ errorMessage: res.error });
        return;
      }
      if (isSaved) {
        res.status(200).json({});
      } else {
        res.status(500).json({});
      }
    }); 
  // Department Maintenance
  router.get('/department', (req, res) => {
    res.render('pages/departments');
  });
  router.post('/department', async (req, res) => {
      const isSaved = await deptController.saveDept(req, res);
      console.log(res.error);
      if (res.error!="")  // If any error then return with the error
      {
        res.status(500).json({ errorMessage: res.error });
        return;
      }
      if (isSaved) {
        res.status(200).json({});
      } else {
        res.status(500).json({});
      }
    }); 
module.exports = router;