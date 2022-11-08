var express = require('express');
var router = express.Router();
const Application_controlers= require('../controllers/Application'); 

/* GET home page. */
router.get('/', Application_controlers.Application_view_all_Page);

module.exports = router;
