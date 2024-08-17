const express = require('express');
const productsRouter = require('./routes/item');

const app = express();

app.use(express.json());
app.use('/categories', productsRouter);

module.exports = app;
