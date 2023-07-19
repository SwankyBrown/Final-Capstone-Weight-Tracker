const { WeightGoal } = require('../models/weightGoal');


async function createWeightGoal(req, res) {
  try {
    const { /* Add any required request data here */ } = req.body;
    // Create the weight goal record
    const weightGoal = await WeightGoal.create({

    });

 
    return res.status(201).json(weightGoal);
  } catch (error) {
    console.error('Error creating weight goal:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  createWeightGoal,

};