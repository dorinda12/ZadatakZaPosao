const express = require('express');
const router = express.Router();


router.get('/total-cost/:month', (req, res) => {
  const selectedMonth = req.params.month;

  res.json({ message: `Total cost for ${selectedMonth}` });
});


router.get('/cost-breakdown/:month', (req, res) => {
  const selectedMonth = req.params.month;

  res.json({ message: `Cost breakdown by category for ${selectedMonth}` });
});

module.exports = router;