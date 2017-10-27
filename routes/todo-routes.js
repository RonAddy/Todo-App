const todosController = require('../controllers/todos-controller');
const express = require('express');

const todosRouter = express.Router();

todosRouter.get('/', todosController.index);

todosRouter.get('/new', (req, res) => {
  res.render('todo-views/todo-new')
});

todosRouter.post('/', todosController.create);

todosRouter.get('/:id', todosController.show);

todosRouter.get('/:id/edit', todosController.edit)


todosRouter.put('/:id', todosController.update)

todosRouter.delete('/:id', todosController.delete)


module.exports = todosRouter;
