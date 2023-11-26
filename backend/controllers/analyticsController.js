const Product = require('../models/analyticModel')
const mongoose = require('mongoose');

// Get total cost for a specific month
const getTotalCost = async (req, res) => {
  const selectedMonth = req.params.month;

  try {
    // Replace the following code with your actual logic to calculate the total cost
    const totalCost = await Analytics.aggregate([
      {
        $match: { month: selectedMonth },
      },
      {
        $group: {
          _id: null,
          totalCost: { $sum: '$cost' },
        },
      },
    ]);

    res.json({ totalCost: totalCost.length > 0 ? totalCost[0].totalCost : 0 });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get cost breakdown by category for a specific month
const getCostBreakdown = async (req, res) => {
  const selectedMonth = req.params.month;

  try {
    // Replace the following code with your actual logic to calculate the cost breakdown by category
    const costBreakdown = await Analytics.aggregate([
      {
        $match: { month: selectedMonth },
      },
      {
        $group: {
          _id: '$category',
          totalCost: { $sum: '$cost' },
        },
      },
    ]);

    res.json({ costBreakdown });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getTotalCost,
  getCostBreakdown,
};

