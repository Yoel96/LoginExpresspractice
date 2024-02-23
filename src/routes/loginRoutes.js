const router = require('express').Router()
const path= require('path')
const userController= require('../controllers/user.controller.js')

const options = {
    root: path.join(__dirname, '../views'),
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true,
      

    }
}



router.get('/',(req,res)=>{

    res.sendFile('login.html', options)

})

router.post('/hola',(req,res)=>{
    console.log(req.body)
    res.json(req.body)

})


router.post('/login', async (req,res)=>{

    await userController.userLogin(req,res)

})
router.post('/createUser', async (req,res)=>{
  
    await userController.createUser(req,res)

})



module.exports= router

 