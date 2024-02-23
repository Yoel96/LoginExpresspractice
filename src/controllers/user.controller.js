const User = require('../models/user.model.js')


const createUser= async(req,res)=>{

    try{
    const body= req.body
    const result= await User.create(body)
    }catch(err){
        throw err
    }

}

const getUser= async(userId)=>{

try{
    const user= await User.findAll({
        where:{
            id:userId
        }
    })
    return user
}
catch(err){

    throw err
}

}


module.exports= {createUser,getUser

}
