const db = require('../db/config');

const Todos = {};

Todos.findAll = () => {
  return db.query(
    `SELECT * FROM todos`
  );
};

module.exports = Todos;
