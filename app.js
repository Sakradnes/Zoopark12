require('@babel/register');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const fileupload = require('express-fileupload');
const indexRouter = require('./routes/index.route');


const ssr = require('./middlewares/ssr');

const app = express();

app.use(ssr);
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); //даем разрешение на чтение данных из body из формы
app.use(express.json());
app.use(fileupload());

app.use('/', indexRouter);

app.listen(3000, () => {
  console.log('Сервер');
});
