const express = require('express')
const app = express()
const path = require('path')
const sequelize = require('./db/db.js')
const User = require('./models/user.model.js')
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.disable('x-powered-by')
app.use('/', require('./routes/index.js'))

sequelize.sync()


app.listen('3000', (err) => {

    if (err) {
        console.log("There is a problem with the server")
        return
    }

    console.log("Server running on port 3000")


})



module.exports = app