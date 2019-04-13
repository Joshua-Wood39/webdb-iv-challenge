const express = require('express');
const helmet = require('helmet');
const dishRouter = require('../dishes/dishes-router.js');
const recipeRouter = require('../recipes/recipes-router.js');
const ingredRouter = require('../ingredients/ingredients-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/dishes', dishRouter);
server.use('/api/recipes', recipeRouter);
server.use('/api/ingredients', ingredRouter);

module.exports = server; 