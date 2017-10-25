const Todos = require('../model/Todos');

const todosController = {};

todosController.index = () {
  Todos.findALL();
    .then(
      res.json(todos);
    )
    .catch(err => {
      res.status(500).send({error: err});
    });
};
