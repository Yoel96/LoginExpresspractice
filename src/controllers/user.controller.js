const User = require('../models/user.model.js')
const bcrypt= require('bcrypt')

const createUser = async (req, res) => {

    try {
        
        let body =  await encryptPass(req.body)
         
       const result = await User.create(body)
    } catch (err) {
        throw err
    }

}

const getUser = async ( userEmail) => {

    try {
        const user = await User.findOne({
            where: {
                email:userEmail,
               
            }
        })
        return user
    }
    catch (err) {

        throw err
    }

}


const userLogin = async (req, res) => {

    try {
        const result = await getUser(req.body.email)
          
         if (result!=null) {

            const pass= await bcrypt.compare(req.body.pass, result.dataValues.password)
            if(pass){
                res.status(200).json(true)

            }else{
                res.status(500).json(false)

            }

        } else {

            res.status(500).json(false)
        }


    } catch (err) {

        throw err

    }


}



const encryptPass= async (body)=>{

 
    body.password= await bcrypt.hash(body.password, 10);
  
    return body



    }


module.exports = {
    createUser, userLogin

}
