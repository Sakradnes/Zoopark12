require('@babel/register');
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const indexRouter = require('./routes/index.route');

const ssr = require('./middlewares/ssr');

const app = express();

// serverConfig(app);
// app.use(checkUser);
app.use(ssr);
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); //даем разрешение на чтение данных из body из формы
app.use(express.json());

app.use('/', indexRouter);

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log('Сервер');
});
