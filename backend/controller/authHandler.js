const {
  Mtech_student_info,
  MCA_student_info,
  MSc_DS_student_info,
  MSc_CS_student_info,
  MSc_AI_student_info,
  Faculty_info,
  Admin_info,
} = require("../models/RegisterDetails");

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../models/index");

const Session = require("../models/Session");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
let jwtsec = "dflkjnhiuhtiunnbithuynbidhiunstiuhynnshiuyrb";
var salt = bcrypt.genSaltSync(10);


//Faculty Login Search Function
async function FacultyLogin(email,password,req,res) {
  let isAvailable;
  isAvailable = await Faculty_info.findOne({
    where: { email: email },
  });

  if (!isAvailable) {
    return res.status(400).send({ message: "User not Found" });
  }

  let passMatch = bcrypt.compareSync(password, isAvailable.password);

  if (!passMatch)
    return res.status(400).send({ message: "Password is incorrect" });

  token = jwt.sign({ email }, jwtsec, { expiresIn: 600 * 600 });

  res.cookie("sessionId", token, { secure: true });
  //res.cookie("token", token, { httpOnly: true, secure: true });

  await Session.create({
    userId: isAvailable.user_id,
    jwt: token,
    status: "valid",
  });
  console.log("Login Successful !");

  return res.status(200).send({ success: true, token: token });
}

//Admin Login Search Function
async function AdminLogin(email,password,req,res) {
  let isAvailable;
  isAvailable = await Admin_info.findOne({
    where: { email: email },
  });

  if (!isAvailable) {
    return res.status(400).send({ message: "User not Found" });
  }

  let passMatch = bcrypt.compareSync(password, isAvailable.password);

  if (!passMatch)
    return res.status(400).send({ message: "Password is incorrect" });

  token = jwt.sign({ email }, jwtsec, { expiresIn: 600 * 600 });

  // res.cookie("sessionId", token, { secure: true });
  res.cookie("token", token, { httpOnly: true, secure: true });

  await Session.create({
    userId: isAvailable.user_id,
    jwt: token,
    status: "valid",
  });
  console.log("Login Successful !");

  return res.status(200).send({ success: true, token: token });
}

//Student Login search Function
async function StudentLogin(email, password,req, res) {
  const models = [
    Mtech_student_info,
    MCA_student_info,
    MSc_DS_student_info,
    MSc_CS_student_info,
    MSc_AI_student_info
  ];

  let isAvailable;
  let foundInModel;

  for (const model of models) {
    isAvailable = await model.findOne({ where: { email: email } });
    if (isAvailable) {
      foundInModel = model;
      break;
    }
  }

  if (!isAvailable) {
    return res.status(400).send({ message: "User not Found" });
  }

  let passMatch = bcrypt.compareSync(password, isAvailable.password);

  if (!passMatch) {
    return res.status(400).send({ message: "Password is incorrect" });
  }

  const token = jwt.sign({ email }, jwtsec, { expiresIn: 600 * 600 });

  res.cookie("token", token, { httpOnly: true, secure: true });
  // res.cookie("sessionId", token, { secure: true });

  await Session.create({
    userId: isAvailable.user_id,
    jwt: token,
    status: "valid",
  });

  console.log("Login Successful !");
  return res.status(200).send({ success: true, token: token });
}

async function LoginHandler(req, res) {
  const { email, password, role } = req.body;
  console.log(role);
  switch (role) {
    case "Student":
      StudentLogin(email,password,req,res);
      break;

    case "Faculty":
      FacultyLogin(email,password,req,res);
      break;

    case "Admin":
      AdminLogin(email,password,req,res);
      break;

    default:
      res.send("User email is not found!")
      break;
  }
}

//Student Registration details

async function StudentRegistrationHandler(req, res) {
  try {
    const {
      name,
      DOB,
      gender,
      address,
      father_name,
      mother_name,
      gaurdian_name,
      father_occupation,
      mobile_number,
      parents_mob_no,
      blood_group,
      email,
      password,
      role,
      religion,
      caste,
      nationality,
      register_number,
      programme,      
      batch,
    } = req.body;

    let StudentModel;

    switch (programme) {
      case "M.Tech":
        StudentModel = Mtech_student_info;
        break;
      case "MCA":
        StudentModel = MCA_student_info;
        break;
      case "M.Sc DS":
        StudentModel = MSc_DS_student_info;
        break;
      case "M.Sc CS":
        StudentModel = MSc_CS_student_info;
        break;
      case "M.Sc AI":
        StudentModel = MSc_AI_student_info;
        break;
      default:
        return res.status(400).send({ message: "Invalid Program!" });
    }

    const isAvailable = await StudentModel.findOne({ where: { email } });
    if (isAvailable) {
      return res.status(400).send({ message: "User already exists." });
    }
    var passwordHash = bcrypt.hashSync(password, salt);

    await StudentModel.create({
      name: name,
      DOB: DOB,
      gender: gender,
      address: address,
      father_name: father_name,
      mother_name: mother_name,
      gaurdian_name: gaurdian_name,
      father_occupation: father_occupation,
      mobile_number: mobile_number,
      parents_mob_no: parents_mob_no,
      blood_group: blood_group,
      email: email,
      password: passwordHash,
      role:role,
      religion: religion,
      caste: caste,
      nationality: nationality,
      register_number: register_number,
      programme: programme,     
      batch: batch,
    });

    return res
      .status(200)
      .send({ message: "User created successfully", success: true });
  } catch (error) {}
}

// Forget Password Route

function forgotPasswordHandler(req, res) {
  return res.send({ name: "forgotPasswordHandler" });
}

//Logout Handler

async function logoutHandler(req, res) {
  try {
    res.clearCookie("token");

    console.log("Logout Successful ! ");
    return res
      .status(200)
      .send({ success: true, message: "Successfully logged out" });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send({ success: false, message: "Internal Server Error" });
  }
}

module.exports.LoginHandler = LoginHandler;
module.exports.forgotPasswordHandler = forgotPasswordHandler;
module.exports.logoutHandler = logoutHandler;
module.exports.StudentRegistrationHandler = StudentRegistrationHandler;
