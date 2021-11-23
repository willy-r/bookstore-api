const express = require('express');
const consign = require('consign');

const db = require('../infra/dbConn');

const customExpress = () => {
  const app = express();
  
  // Middlewares.
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Routes.
  consign().include('./src/controllers').into(app, db);

  return app;
}

module.exports = customExpress;
