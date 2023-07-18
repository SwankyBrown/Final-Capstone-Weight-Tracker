
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./utils/database');
const { PORT } = process.env;


const app = express();


app.use(express.json());
app.use(cors());


const { User } = require('./models/user');
const { WeightGoal } = require('./models/weightGoal');
const { Tracking } = require('./models/tracking');

User.hasMany(WeightGoal)
WeightGoal.belongsTo(User)
WeightGoal.hasMany(Tracking)
Tracking.belongsTo(WeightGoal)

const { register, login } = require('./controllers/userCtrl');
// const weightGoal = require('./models/weightGoal');


app.post('/api/register', register);
app.post('/api/login', login);


sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
}).catch(error => console.log(error));