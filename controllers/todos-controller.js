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
  Todos.findById(req.params.id)
    .then( todo => {
      res.render('todo-views/todo-show', {data: todo});
    })
    .catch(err => {
      res.status(500).send({error: err});
    });
};

todosController.create = (req, res) => {
  Todos.create({
    title: req.body.title,
    category: req.body.category,
    info: req.body.info,
  })
    .then( todo => {
      console.log(todo)
      res.redirect(`/todos/${todo.id}`);
    })
    .catch(err => {
      res.status(500).send({error: err});
    });
};

todosController.edit = (req, res) => {
  Todos.findById(req.params.id)
    .then( todo => {
      res.status(200).render('todo-views/todo-edit', {todo})
    })
    .catch(err => {
      res.status(500).send({error: err});
    });
}

todosController.update = (req, res) => {
  Todos.update({
    title: req.body.title,
    category: req.body.category,
    status: req.body.status,
    info: req.body.info,
  }, req.params.id)
    .then( todos => {
      console.log(req.body.status)
      res.redirect(`/todos/${todos.id}`);
    })
    .catch(err => {
      res.status(500).send({error: err});
    });
}
todosController.delete = (req, res) => {
  Todos.destroy(req.params.id)
  .then(() => {
    res.redirect('/todos');
  })
  .catch( err => {
    console.log(err);
    res.status(500).send({error:err});
  });
};

module.exports = todosController;
