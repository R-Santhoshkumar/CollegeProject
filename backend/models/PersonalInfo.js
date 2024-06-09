const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../models/index");

const Mtech_student_info = sequelize.define("mtech_student_details", {
  // Model attributes are defined here
  user_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: { type: Sequelize.STRING, allowNull: false },
  DOB: { type: Sequelize.STRING, allowNull: false },
  gender: { type: Sequelize.STRING, allowNull: false },
  address: { type: Sequelize.STRING, allowNull: false },
  father_name: { type: Sequelize.STRING, allowNull: false },
  mother_name: { type: Sequelize.STRING, allowNull: false },
  gaurdian_name: { type: Sequelize.STRING, allowNull: true },
  father_occupation: { type: Sequelize.STRING, allowNull: false },
  mobile_number: { type: Sequelize.STRING, allowNull: false },
  parents_mob_no: { type: Sequelize.STRING, allowNull: false },
  blood_group: { type: Sequelize.STRING, allowNull: false },
  religion: { type: Sequelize.STRING, allowNull: false },
  caste: { type: Sequelize.STRING, allowNull: false },
  nationality: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false, unique: true },
  password: { type: Sequelize.STRING, allowNull: false, unique: true },
  role: { type: Sequelize.STRING, allowNull: false, unique: true },
  register_number: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  programme: {type: Sequelize.STRING,allowNull: false},
  batch: { type: Sequelize.STRING, allowNull: false },
});

const MCA_student_info = sequelize.define("mca_student_details", {
  // Model attributes are defined here
  user_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  name: { type: Sequelize.STRING, allowNull: false },
  DOB: { type: Sequelize.STRING, allowNull: false },
  gender: { type: Sequelize.STRING, allowNull: false },
  address: { type: Sequelize.STRING, allowNull: false },
  father_name: { type: Sequelize.STRING, allowNull: false },
  mother_name: { type: Sequelize.STRING, allowNull: false },
  gaurdian_name: { type: Sequelize.STRING, allowNull: true },
  father_occupation: { type: Sequelize.STRING, allowNull: false },
  mobile_number: { type: Sequelize.STRING, allowNull: false },
  parents_mob_no: { type: Sequelize.STRING, allowNull: false },
  blood_group: { type: Sequelize.STRING, allowNull: false },
  religion: { type: Sequelize.STRING, allowNull: false },
  caste: { type: Sequelize.STRING, allowNull: false },
  nationality: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false, unique: true },
  password: { type: Sequelize.STRING, allowNull: false, unique: true },
  role: { type: Sequelize.STRING, allowNull: false, unique: true },
  register_number: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  programme: {type: Sequelize.STRING,allowNull: false},
  year: { type: Sequelize.STRING, allowNull: false },
  semester: { type: Sequelize.STRING, allowNull: false },
  batch: { type: Sequelize.STRING, allowNull: false },
});



const MSc_DS_student_info = sequelize.define("msc_ds_student_details", {
  // Model attributes are defined here
  user_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  name: { type: Sequelize.STRING, allowNull: false },
  DOB: { type: Sequelize.STRING, allowNull: false },
  gender: { type: Sequelize.STRING, allowNull: false },
  address: { type: Sequelize.STRING, allowNull: false },
  father_name: { type: Sequelize.STRING, allowNull: false },
  mother_name: { type: Sequelize.STRING, allowNull: false },
  gaurdian_name: { type: Sequelize.STRING, allowNull: true },
  father_occupation: { type: Sequelize.STRING, allowNull: false },
  mobile_number: { type: Sequelize.STRING, allowNull: false },
  parents_mob_no: { type: Sequelize.STRING, allowNull: false },
  blood_group: { type: Sequelize.STRING, allowNull: false },
  religion: { type: Sequelize.STRING, allowNull: false },
  caste: { type: Sequelize.STRING, allowNull: false },
  nationality: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false, unique: true },
  password: { type: Sequelize.STRING, allowNull: false, unique: true },
  role: { type: Sequelize.STRING, allowNull: false, unique: true },
  register_number: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  programme: {type: Sequelize.STRING,allowNull: false},
  year: { type: Sequelize.STRING, allowNull: false },
  semester: { type: Sequelize.STRING, allowNull: false },
  batch: { type: Sequelize.STRING, allowNull: false },
});


/*************************************** */
//$2a$10$Nm/ou317e0n2j2urCeVZ2u7lOxb8Qu6q1/9Ldzi79we3rjgg0AQai

/********************************* */



const MSc_CS_student_info = sequelize.define("msc_cs_student_details", {
  // Model attributes are defined here
  user_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  name: { type: Sequelize.STRING, allowNull: false },
  DOB: { type: Sequelize.STRING, allowNull: false },
  gender: { type: Sequelize.STRING, allowNull: false },
  address: { type: Sequelize.STRING, allowNull: false },
  father_name: { type: Sequelize.STRING, allowNull: false },
  mother_name: { type: Sequelize.STRING, allowNull: false },
  gaurdian_name: { type: Sequelize.STRING, allowNull: true },
  father_occupation: { type: Sequelize.STRING, allowNull: false },
  mobile_number: { type: Sequelize.STRING, allowNull: false },
  parents_mob_no: { type: Sequelize.STRING, allowNull: false },
  blood_group: { type: Sequelize.STRING, allowNull: false },
  religion: { type: Sequelize.STRING, allowNull: false },
  caste: { type: Sequelize.STRING, allowNull: false },
  nationality: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false, unique: true },
  password: { type: Sequelize.STRING, allowNull: false, unique: true },
  role: { type: Sequelize.STRING, allowNull: false, unique: true },
  register_number: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  programme: {type: Sequelize.STRING,allowNull: false},
  year: { type: Sequelize.STRING, allowNull: false },
  semester: { type: Sequelize.STRING, allowNull: false },
  batch: { type: Sequelize.STRING, allowNull: false },
});


const MSc_AI_student_info = sequelize.define("msc_ai_student_details", {
  // Model attributes are defined here
  user_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  name: { type: Sequelize.STRING, allowNull: false },
  DOB: { type: Sequelize.STRING, allowNull: false },
  gender: { type: Sequelize.STRING, allowNull: false },
  address: { type: Sequelize.STRING, allowNull: false },
  father_name: { type: Sequelize.STRING, allowNull: false },
  mother_name: { type: Sequelize.STRING, allowNull: false },
  gaurdian_name: { type: Sequelize.STRING, allowNull: true },
  father_occupation: { type: Sequelize.STRING, allowNull: false },
  mobile_number: { type: Sequelize.STRING, allowNull: false },
  parents_mob_no: { type: Sequelize.STRING, allowNull: false },
  blood_group: { type: Sequelize.STRING, allowNull: false },
  religion: { type: Sequelize.STRING, allowNull: false },
  caste: { type: Sequelize.STRING, allowNull: false },
  nationality: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false, unique: true },
  password: { type: Sequelize.STRING, allowNull: false, unique: true },
  role: { type: Sequelize.STRING, allowNull: false, unique: true },
  register_number: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  programme: {type: Sequelize.STRING,allowNull: false},
  year: { type: Sequelize.STRING, allowNull: false },
  semester: { type: Sequelize.STRING, allowNull: false },
  batch: { type: Sequelize.STRING, allowNull: false },
});

const Faculty_info = sequelize.define("faculty_info", {
  // Model attributes are defined here
  user_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  faculty_id: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  name: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false, unique: true },
  password: { type: Sequelize.STRING, allowNull: false, unique: true },
  role: { type: Sequelize.STRING, allowNull: false, unique: true },
  department: { type: Sequelize.STRING, allowNull: false },
  year_of_join: { type: Sequelize.STRING, allowNull: false },
  designation: { type: Sequelize.STRING, allowNull: false },
});

const Admin_info = sequelize.define("admin_info", {
  // Model attributes are defined here
  user_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  admin_id: {
    type: Sequelize.STRING,  
    allowNull: false,
    unique: true,
  },
  name: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false, unique: true },
  password: { type: Sequelize.STRING, allowNull: false, unique: true },
  role: { type: Sequelize.STRING, allowNull: false, unique: true },
  department: { type: Sequelize.STRING, allowNull: false },
  year_of_join: { type: Sequelize.STRING, allowNull: false },
  designation: { type: Sequelize.STRING, allowNull: false },
});

// `sequelize.define` also returns the model
module.exports.Mtech_student_info = Mtech_student_info; // true
module.exports.MCA_student_info = MCA_student_info;
module.exports.MSc_DS_student_info = MSc_DS_student_info;
module.exports.MSc_CS_student_info = MSc_CS_student_info;
module.exports.MSc_AI_student_info = MSc_AI_student_info;
module.exports.Faculty_info = Faculty_info;
module.exports.Admin_info = Admin_info;
