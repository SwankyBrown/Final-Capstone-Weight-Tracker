const {DataTypes} = require("sequelize")

const {sequelize}= require('../utils/database')

module.exports = {
    Tracking: sequelize.define('Tracking', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true, 
            allowNull: false, 
            primaryKey: true    
         },
         
    })
}