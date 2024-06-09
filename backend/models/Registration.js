const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../models/index');

const Student_Registration = sequelize.define('student_registration', {

    user_id: { type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, allowNull: false},
    password: { type: Sequelize.STRING, allowNull: false },
    

});

const Faculty_Registration = sequelize.define('faculty_registration', {

      user_id: { type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
      name: { type: Sequelize.STRING, allowNull: false },
      email: { type: Sequelize.STRING, allowNull: false},
      password: { type: Sequelize.STRING, allowNull: false },
  
  });
  

module.exports.Student_Registration = Student_Registration// true
module.exports.Faculty_Registration = Faculty_Registration
