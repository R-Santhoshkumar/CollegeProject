const { Sequelize } = require('sequelize');
require('dotenv').config();


const sequelize = new Sequelize(process.env.DBname, process.env.DBusername, process.env.DBpassword, {
    host: process.env.DBhost,
    dialect: 'mysql'
});
  
module.exports = sequelize;