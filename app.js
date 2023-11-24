require('@babel/register');
require('dotenv').config();

const express = require('express');

const indexRouter = require('./routes/index.route');
const serverConfig = require('./config/serverConfig');

const app = express();

serverConfig(app);
// app.use(checkUser);


app.use('/', indexRouter);

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log('Сервер');
});
