const todosController = require('../controller/todos-controller');
const express = require('express');

const todosRouter = express.Router();


todosRouter.get('/', todosController.index);


module.exports = todosRouter;
