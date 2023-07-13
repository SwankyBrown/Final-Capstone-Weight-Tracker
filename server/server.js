require('dotenv').config()

const express = require("express")
const cors = require("cors")
const {sequelize} = require('./utils/database')

const {PORT} = process.env

//middleware
const app = express()


app.use(express.json())
app.use(cors())

const {User} = require('./models/user')
const {WeightGoal} = require('./models/weightGoal')
const {Tracking} = require('./models/tracking')

// .hasmany
// .belongsto
//


//Endpoints//


//
sequelize.sync()
.then(()=> {
    app.listen(PORT, () => console.log(`Hunter 2-1 we are up on ${PORT}`))
})
.catch(error => console.log(error))