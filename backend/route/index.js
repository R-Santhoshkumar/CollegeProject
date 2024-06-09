const express = require("express");
const authRoute = require("./auth");
const taskRoute = require("./task");
const { checkLogin } = require('../common');

let route = express.Router();
route.use('/auth', authRoute);
route.use('/task', taskRoute);
module.exports = route;