const express = require('express');
const route = express.Router();

//middleware
const checkAuth = require('../middleware/check-auth');

const RequestsController = require('../controller/ConstructionRequestsController');

route.post('/', checkAuth, RequestsController.new_request);
route.get('/', checkAuth, RequestsController.get_all);
route.get('/:id', checkAuth, RequestsController.request_by_id);
route.patch('/:id', checkAuth, RequestsController.update_status);

module.exports = route;
