const express = require('express');

const projectsRouter = require('./routes/projectsRoutes.js');
const resourcesRouter = require(`./routes/resourcesRoutes`);
const tasksRouter = require(`./routes/tasksRoutes`);

const server = express();

server.use(express.json());

server.use("/api/projects", projectsRouter);
server.use("/api/resources", resourcesRouter);
server.use("/api/tasks", tasksRouter);
module.exports = server;