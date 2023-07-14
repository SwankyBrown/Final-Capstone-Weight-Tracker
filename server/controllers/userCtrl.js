const {User} = require(`../models/user`)
const bcrypt = require('bcryptjs')
const {SECRET} = process.env
const jwt = require("jsonwebtoken")

const createToken = (username,id) => {
    let token = jwt.sign({username,id}, SECRET,{expiresIn: "2 weeks"})
    return token
}

module.exports = {
    register: async (req,res) => {
        try {
            const {username, password} = req.body
            let foundUser = await User.findOne({where: {username}})

            if(foundUser){
                res.status(400).send("username already exists")
            } else {
                const salt = bcrypt.genSaltSync(10)
                const hash = bcrypt.hashSync(password, salt)

                const newUser = await User.create({
                    username,
                    hashedPass: hash
                })

                const token = createToken(newUser.username, newUser.id)
                const exp = Date.now() + 1000 * 60 * 60 * 350
                res.status(200).send({
                    username: newUser.username,
                    userId: newUser.id,
                    token: token,
                    exp: exp
                })
            }

        } catch(err){
            console.log(err)
            res.status(500).send("this is bad!")
        }
    },

    login: (req,res) => {
        console.log('login');
    }
}