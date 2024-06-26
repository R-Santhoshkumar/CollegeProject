const express = require("express");
const {
  logoutHandler,
  forgotPasswordHandler,
  LoginHandler,
  StudentRegistrationHandler,
  UserINFO,
} = require("../controller/authHandler");
const { checkLogin } = require("../common");

let route = express.Router();

//Login routes for all students
route.post("/login", LoginHandler);
route.post("/register", StudentRegistrationHandler);
route.post("/forgotPassword", forgotPasswordHandler);
route.get("/logout", logoutHandler);
route.get("/check-login", checkLogin);
route.get('/userinfo', UserINFO);

module.exports = route;
