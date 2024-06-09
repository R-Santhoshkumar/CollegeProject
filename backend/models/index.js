const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('final_proj', 'root', 'Sandy123!@#', {
    host: 'localhost',
    dialect: 'mysql'
});
  
module.exports = sequelize;