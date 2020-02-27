// Query Params: request.query (Filtros, ordenacao, paginacao, ...)
// Route Params: request.params (Identificar um recurso na alteracao ou remocao)
//Body: request.body (dados para criacao ou alteracao de um resgistro)
const { Router } = require('express');

const DevController = require('./controllers/DevController');
const SeachController = require('./controllers/SeachController');

const routes = Router();

routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);

routes.get('/seach', SeachController.index)

module.exports = routes;