const express = require('express');
const consign = require('consign');

const createDatabase = require('../infra/db');

const customExpress = (dbFilePath) => {
  const app = express();
  
  // Middlewares.
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Database.
  const db = createDatabase(dbFilePath);

  // Routes.
  consign().include('./src/controllers').into(app, db);

  return app;
}

module.exports = customExpress;
