const express = require('express');
const OngController = require('./controllers/OngController');
const CasosController = require('./controllers/CasosController');

const routes = express.Router();

routes.get('/api/ongs', OngController.list);
routes.post('/api/ongs', OngController.create);

routes.post('/api/session', CasosController.session);

routes.get('/api/casos', CasosController.list);

routes.get('/api/profile/casos', CasosController.listByOng);
routes.post('/api/profile/casos', CasosController.create);
routes.delete('/api/profile/casos/:id', CasosController.remove);

module.exports = routes;
