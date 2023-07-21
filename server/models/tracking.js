const { DataTypes } = require("sequelize");
const { sequelize } = require('../utils/database');
const { WeightGoal } = require("./weightGoal");

module.exports = {
  Tracking: sequelize.define('Tracking', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    currentWeight: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    journal: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }),
};