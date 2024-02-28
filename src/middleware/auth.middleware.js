const jwt = require('jsonwebtoken')
const User= require('../models/user.model.js')


function checkAuth(req,res ,next){

    if(!req.headers.authorization) return res.status(404).json('Auth headers not found')
    jwt.verify(req.headers.authorization, 'HolaHolitaVecinito', async(err,result)=>{

        if (err) return res.status(404).json('Token not found')
        
        const user= User.findOne({where: {email: result.email}})
        console.log(result.email)

        if (!user){

            return res.status(404).json('Token not valid')
        }
        res.locals.user = user
        next()

    })

}


module.exports= {checkAuth}