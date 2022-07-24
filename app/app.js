const express = require('express');

const app = express();

require('dotenv').config();
require('../config/database');

require('../router/_main')(app);

module.exports = app;
