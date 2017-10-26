const db = require('../db/config');

const Todos = {};

Todos.findAll = () => {
  return db.query(
    'SELECT * FROM todos'
  );
};

Todos.findById = (id) => {
  return db.one(
    `SELECT * FROM todos WHERE id = $/id/`, [id]
  );
};
module.exports = Todos;
