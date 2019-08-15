const express = require('express')
const router = express.Router()
const fs = require('fs')
const server = require('./server')

module.exports = router

router.get('/', (req, res) => {
  res.send("This is working!")
})