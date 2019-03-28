const express = require('express');
const helmet = require('helmet');
const dishRouter = require('../dishes/dishes-router.js');
const recipeRouter = require('../recipes/recipes-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/dishes', dishRouter);
server.use('/api/recipes', recipeRouter);

module.exports = server; 