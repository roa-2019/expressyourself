const express = require('express')
const router = express.Router()
const fs = require('fs')

module.exports = router

router.get('/', (req, res) => {
  res.send("This is working!")
})