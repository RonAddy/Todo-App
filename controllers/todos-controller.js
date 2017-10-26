const Todos = require('../models/Todos');

const todosController = {};

todosController.index = (req, res) => {
  Todos.findAll()
    .then( todos =>{
      res.send(todos);
    })
    .catch(err => {
      res.status(500).send({error: err});
    });
};

module.exports = todosController;
