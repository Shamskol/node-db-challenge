const express = require('express');

const projectsRouter = require('./routes/projectsRoutes.js');
const resourcesRouter = require(`./routes/resourcesRoutes`);

const server = express();

server.use(express.json());

server.use(`/api/projects`, projectRouter);
server.use(`/api/resources`, resourcesRouter);
module.exports = server;