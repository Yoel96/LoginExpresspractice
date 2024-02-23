const User = require('../models/user.model.js')


const createUser = async (req, res) => {

    try {
        const body = req.body
        const result = await User.create(body)
    } catch (err) {
        throw err
    }

}

const getUser = async ( userEmail, userPassword) => {

    try {
        const user = await User.findOne({
            where: {
                email:userEmail,
                password: userPassword
            }
        })
        console.log(user)
        return user
    }
    catch (err) {

        throw err
    }

}


const userLogin = async (req, res) => {

    try {
        const result = await getUser(req.body.email, req.body.password)
        console.log(result)
        if (result) {

            res.status(300).send("login succesfull")

        } else {

            res.status(300).send("login failed")
        }


    } catch (err) {

        throw err

    }


}


module.exports = {
    createUser, userLogin

}
