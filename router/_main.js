const snakeCase = require('lodash/snakeCase');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

module.exports = (app) => {
  fs
    .readdirSync(__dirname)
    .forEach((file) => {
      if (file === '_main.js') return;

      const router = express.Router();
      const routeModule = require(require('path').join(__dirname, file));
      const path = routeModule.path
                || `/${
                  file !== '_index.js'
                    ? snakeCase(file.replace('.js', ''))
                    : ''}`;

      const route = routeModule.config
        ? routeModule.config(router)
        : routeModule(router);

      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({ extended: true }));
      app.use(path, route);
    });

  return app;
};
