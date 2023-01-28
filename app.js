const express = require('express');
const mongoSanitize = require('express-mongo-sanitize');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use(mongoSanitize());

module.exports = app;
