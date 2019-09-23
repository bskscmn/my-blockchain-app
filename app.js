const express = require('express');
var cors = require("cors");
const bodyParser = require('body-parser');

const compareRoutes = require('./routes/compare');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/api/compare/:coin/:currency', compareRoutes);

module.exports = app;


