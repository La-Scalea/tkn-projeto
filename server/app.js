var compression = require('compression');
const express = require('express');
const routes = require('../routes');

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

server.get('/', (req, res, next) =>{
    res.send("Bem vindo a API");
});

server.use(compression())

module.exports = server;
