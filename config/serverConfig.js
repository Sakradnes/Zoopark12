const express = require('express');
const cookieParser = require('cookie-parser');
const ssr = require('../middlewares/ssr');
const  checkUser  = require('../middlewares/verifyJWT');

const config = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static('public'));
  app.use(ssr);
  app.use(cookieParser());
  app.use(checkUser);
};

module.exports = config;
