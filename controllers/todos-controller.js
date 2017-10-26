const Todos = require('../models/Todos');

const todosController = {};

todosController.index = (req, res) => {
  Todos.findAll()
    .then( todos =>{
      res.render('todo-views/todo-index', {data: todos});
    })
    .catch(err => {
      res.status(500).send({error: err});
    });
};

todosController.show = (req, res) => {
  Todos.findById()
    .then( todo => {

    })
}

module.exports = todosController;
