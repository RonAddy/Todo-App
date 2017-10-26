const express = require('express');
const todosRouter = require('./routes/todo-routes');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const logger = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger('dev'));
app.listen( PORT, () => {
  console.log(`🌲🌲🌲${PORT}🌲🌲🌲  🏃🏾 💨    🐏`);
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.render('index');
});

app.use('/todos', todosRouter);

app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});
