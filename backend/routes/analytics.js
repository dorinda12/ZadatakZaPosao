const express = require('express');
const router = express.Router();
const {getTotalCost, getCostBreakdown } = require('../controllers/analyticsController');



router.get('/total-cost/:month', getTotalCost)


router.get('/cost-breakdown/:month',getCostBreakdown)

module.exports = router;