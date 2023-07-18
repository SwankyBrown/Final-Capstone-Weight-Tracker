const {DataTypes} = require("sequelize")

const {sequelize}= require('../utils/database')

module.exports = {
    WeightGoal: sequelize.define('WeightGoal', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true, 
            allowNull: false, 
            primaryKey: true    
         },
         goalWeight: DataTypes.FLOAT,
        date: DataTypes.STRING
         
    })
}