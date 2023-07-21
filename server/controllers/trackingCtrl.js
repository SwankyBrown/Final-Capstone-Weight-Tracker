const { Tracking } = require('../models/tracking');

const createTracking = async (req, res) => {
  try {
    const { weight, date, journal, weightGoalId } = req.body;

    const newTracking = await Tracking.create({
      currentWeight: weight,
      date,
      journal,
      WeightGoalId: weightGoalId
    });

    return res.status(201).json(newTracking);
  } catch (error) {
    console.error("Error creating tracking data:", error);
    return res.status(500).json({ error: "THIS IS BAD" });
  }
};

const getAllTrackings = async (req, res) => {
  try {
    const allTrackings = await Tracking.findAll();
    return res.status(200).json(allTrackings);
  } catch (error) {
    console.error("Error fetching all trackings:", error);
    return res.status(500).json({ error: "OH NO!" });
  }
};

module.exports = {
  createTracking,
  getAllTrackings,
};