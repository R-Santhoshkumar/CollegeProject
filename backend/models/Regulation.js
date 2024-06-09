const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../models/index");

const Regulation = sequelize.define("regulation_db", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  regulation_id: { type: Sequelize.STRING, allowNull: false },
  regulation_name: { type: Sequelize.STRING, allowNull: false },
  programme: { type: Sequelize.STRING, allowNull: false },
    batch: { type: Sequelize.STRING, allowNull: false },
  total_credit:{ type: Sequelize.STRING, allowNull: false }
});


module.exports.Regulation = Regulation;