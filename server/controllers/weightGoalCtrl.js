const { WeightGoal } = require('../models/weightGoal');

async function createWeightGoal(req, res) {
  try {
    const { goalWeight, date, userId } = req.body;
    
    const weightGoal = await WeightGoal.create({
      goalWeight,
      userId,
      date,
    });

    return res.status(201).json(weightGoal);
  } catch (error) {
    console.error('Error creating weight goal:', error);
    return res.status(500).json({ error: 'BAD SERVER ERROR' });
  }
}

async function getWeightGoalByUserId(req, res) {
  try {
    const { userId } = req.params;

    const weightGoal = await WeightGoal.findOne({ where:{ userId }});

    if (!weightGoal) {
      return res.status(404).json ({ error: 'Weight goal not found for the user' })
    }

    return res.status(200).json(weightGoal);
  } catch (error) {
    console.error("Error getting weight goal by userId", error);
    return res.status(500).json({ error: 'BAD SERVER ERROR' });
  }
}

module.exports = {
  createWeightGoal,
  getWeightGoalByUserId
};