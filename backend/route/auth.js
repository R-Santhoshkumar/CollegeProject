const express = require("express");
const {
  logoutHandler,
  forgotPasswordHandler,
  StudentLoginHandler,
  FacultyLoginHandler,
  StudentSignupHandler,
  FacultySignupHandler,
  AdminLoginHandler,
  StudentRegistrationDetails,
} = require("../controller/authHandler");
const { checkLogin } = require("../common");

let route = express.Router();

//Login routes for all students
route.post("/student_login", StudentLoginHandler);
route.post("/faculty_login", FacultyLoginHandler);
route.post("/admin_login", AdminLoginHandler);

//Sign up routes for all students
route.post("/student_signup", StudentSignupHandler);
route.post("/faculty_signup", FacultySignupHandler);
route.post("/student_details", StudentRegistrationDetails);
route.post("/forgotPassword", forgotPasswordHandler);
route.get("/logout", logoutHandler);
route.get("/check-login", checkLogin);

module.exports = route;
