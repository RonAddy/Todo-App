const db = require('../db/config');

const Todos = {};

Todos.findAll = () => {
  return db.query(
    'SELECT * FROM todos'
  );
};

Todos.findById = (id) => {
  return db.one(
    `SELECT * FROM todos WHERE id = $1`, id
  );
};

Todos.create = (todo) => {
  return db.one(
    `INSERT INTO todos (
      title,
      category,
      status,
      info) VALUES (
        $1, $2, false, $3
      )
      RETURNING *`, [todo.title, todo.category, todo.info]);
};

Todos.update = (todo, id) => {
  return db.one(
    `UPDATE todos SET
      title = $1,
      category = $2,
      status = $3,
      info = $4
      WHERE id = $5
      RETURNING *`,[todo.title, todo.category, todo.status, todo.info,id]);
}

Todos.destroy = (id) => {
  return db.none (
    `DELETE FROM todos
    WHERE id = $1`, [id]);
};

module.exports = Todos;
