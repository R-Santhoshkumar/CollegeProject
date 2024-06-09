
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../models/index");

const Courses = sequelize.define("course_db", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
    regulation_id: { type: Sequelize.STRING, allowNull: false },
    course_id: { type: Sequelize.STRING, allowNull: false },
  course_name: { type: Sequelize.STRING, allowNull: false },
  course_code: { type: Sequelize.STRING, allowNull: false },
    batch: { type: Sequelize.STRING, allowNull: false },
  total_credit:{ type: Sequelize.STRING, allowNull: false }
});


module.exports.Regulation = Regulation;