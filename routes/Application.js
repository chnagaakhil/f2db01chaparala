var express = require('express');
var router = express.Router();
const Application_controlers= require('../controllers/Application'); 

/* GET home page. */
router.get('/', Application_controlers.Application_view_all_Page);
router.get('/detail', Application_controlers.Application_view_one_Page);
router.get('/create', Application_controlers.Application_create_Page);
router.get('/update', Application_controlers.Application_update_Page);
router.get('/delete', Application_controlers.Application_delete_Page);

module.exports = router;
