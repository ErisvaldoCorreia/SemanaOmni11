const express = require('express');
const OngController = require('./controllers/OngController');

const routes = express.Router();

routes.get('/api/ongs', OngController.list);
routes.post('/api/ongs', OngController.create);

module.exports = routes;
