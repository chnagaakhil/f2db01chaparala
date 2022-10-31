var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('application', { title: 'Search Results for Application Class' });
});

module.exports = router;
