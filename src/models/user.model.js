const sequelize = require('../db/db.js')
const { DataTypes } = require('sequelize')

console.log("")
const User = sequelize.define('user', {

    username: {
		type: DataTypes.STRING,
        allowNull: false,
		validate:{
 			notEmpty: true  
		}
	},
    firstName: {
		type: DataTypes.STRING,
        allowNull: false,
		validate:{
 			notEmpty: true  
		}
	},
    lastName: {
		type: DataTypes.STRING,
        allowNull: false,
		validate:{
 			notEmpty: true  
		}
	},
    email: {
		type: DataTypes.STRING,
        allowNull: false,
		validate:{
            isEmail: true, 
 			notEmpty: true  
		}
	},    
    password: {
		type: DataTypes.STRING,
        allowNull: false,
		validate:{
 			notEmpty: true  
		}
	}

})

module.exports= User


