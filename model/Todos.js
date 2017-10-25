const db = require('../db/config');

const Todos = {};

Todos.findALL = () => {
  return db.query(
    `SELECT * FROM todos`
  );
};

module.exports = Todos;
