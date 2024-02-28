const router = require('express').Router()
const path = require('path')
const userController = require('../controllers/user.controller.js')
const {checkAuth} = require('../middleware/auth.middleware.js')

const options = {
    root: path.join(__dirname, '../views'),
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true,


    }
}



router.get('/', (req, res) => {

    res.sendFile('login.html', options)

})

router.post('/hola', (req, res) => {
    console.log(req.body)
    res.json(req.body)

})


router.post('/login', userController.userLogin)

router.post('/createUser',  (req, res) => {

    userController.createUser(req, res)

})

router.post('/:userId', checkAuth, userController.getUser)

router.post('/', checkAuth, userController.getAllUsers)

module.exports = router

