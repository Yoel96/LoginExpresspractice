const User = require('../models/user.model.js')
const bcrypt= require('bcrypt')
const jwt = require('jsonwebtoken')

const createUser = async (req, res) => {

    try {
        
        let body =  await encryptPass(req.body)

        const result = await User.create(body)

        const token = jwt.sign({ email: req.body.email }, 'HolaHolitaVecinito', { expiresIn: '1w' })


        return res.status(200).json(token)


    } catch (err) {
        throw err
    }

}

const getUser = async (req, res) => {

    try {
        console.log(req.params)
        const user = await User.findByPk(req.params.userId)
        return res.status(200).json(user)
    }
    catch (err) {

        return res.status(500).json(err)
    }

}



const getAllUsers = async (req, res) => {

    try {
        
        const users= await User.findAll()
        return res.status(200).json(users)
    }
    catch (err) {

        return res.status(500).json(err)
    }

}


const userLogin = async (req, res) => {

    try {
        const result = User.findOne({where:{email: req.body.email}})

         if (result!=null) {

            const pass= await bcrypt.compare(req.body.password, result.dataValues.password)
            if(pass){
                const token = jwt.sign({ email: req.body.email }, 'HolaHolitaVecinito', { expiresIn: '1w' })

                return res.status(200).json(token)

            }else{
                return res.status(500).json(false)

            }

        } else {

            return res.status(500).json(false)
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
    createUser, userLogin, getUser, getAllUsers

}
