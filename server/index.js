const express = require('express');
const routes = require('../routes');

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

server.use('/', routes);
//server.use(compression());

module.exports = server;
