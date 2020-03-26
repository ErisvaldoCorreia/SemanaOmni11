const express = require('express');
const OngController = require('./controllers/OngController');
const CasosController = require('./controllers/CasosController');

const routes = express.Router();

routes.get('/api/ongs', OngController.list);
routes.post('/api/ongs', OngController.create);

routes.get('/api/casos', CasosController.list);
routes.post('/api/casos', CasosController.create);
routes.delete('/api/casos/:id', CasosController.remove);

module.exports = routes;
