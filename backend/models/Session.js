const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../models/index");

const Session = sequelize.define("session", {

  session_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  userId: { type: Sequelize.STRING, allowNull: false },
  jwt: { type: Sequelize.STRING, allowNull: false },
  status: { type: Sequelize.STRING, allowNull: false },
  

});


module.exports = Session; 
