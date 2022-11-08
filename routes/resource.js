var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Application_controller = require('../controllers/Application');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// APPLICATION ROUTES ///
// POST request for creating a Application.
router.post('/Application', Application_controller.Application_create_post);
// DELETE request to delete Application.
router.delete('/Application/:id', Application_controller.Application_delete);
// PUT request to update Application.
router.put('/Application/:id', Application_controller.Application_update_put);
// GET request for one Application.
router.get('/Application/:id', Application_controller.Application_detail);
// GET request for list of all Application items.
router.get('/Application', Application_controller.Application_list);

module.exports = router;