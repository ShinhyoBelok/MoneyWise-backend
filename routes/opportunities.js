const express = require('express')
const router = express.Router()
const Opportunities = require("../database/model/OpportunitiesModel")

router.route('/')
  .get(async (req, res) => {
    try {
      const opportunities = await Opportunities.find()
      res.send(opportunities)
    } catch (error) {
      console.error('Error fetching opportunities', error)
      res.status(500).send('Error fetching opportunities')
    }
  })

module.exports = router