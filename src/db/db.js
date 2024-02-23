const {Sequelize} = require('sequelize')
const process= require('dotenv').config()
const dbparams= process.parsed
 
const sequelize = new Sequelize(dbparams.DB_NAME, dbparams.DB_USER, dbparams.DB_PASS, {
	host: dbparams.DB_HOST,
	dialect: 'mysql',
	port: dbparams.DB_PORT,

})






module.exports= sequelize