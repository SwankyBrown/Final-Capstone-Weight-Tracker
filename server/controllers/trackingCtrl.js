const { Tracking } = require('../models/tracking');


async function createTracking(req, res) {
  try {
    const { /* Add any required request data here */ } = req.body;
  
    const tracking = await Tracking.create({

    });


    return res.status(201).json(tracking);
  } catch (error) {
    console.error('Error creating tracking record:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  createTracking,

};