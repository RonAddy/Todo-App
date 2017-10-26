const express = require('express');

const app = express();

const todosRouter = require('./routes/todo-routes');


const PORT = process.env.PORT || 3000;


app.listen( PORT, () => {
  console.log(`🌲🌲🌲${PORT}🌲🌲🌲  🏃🏾 💨    🐏`);
} )
