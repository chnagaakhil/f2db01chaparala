var express = require('express');
var router = express.Router();
const Application_controlers= require('../controllers/Application'); 

// A little function to check if we have an authorized user and continue on or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  }

/* GET home page. */
router.get('/', Application_controlers.Application_view_all_Page);
router.get('/detail', Application_controlers.Application_view_one_Page);
router.get('/create', Application_controlers.Application_create_Page);
router.get('/update', secured, Application_controlers.Application_update_Page);
router.get('/delete', Application_controlers.Application_delete_Page);

module.exports = router;
