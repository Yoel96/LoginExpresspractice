const router = require('express').Router()


router.use('/users', require('./user.router.js'))


module.exports= router