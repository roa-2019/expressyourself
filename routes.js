const express = require('express')
const router = express.Router()
const fs = require('fs')

module.exports = router

router.get('/', (req, res) => {
  res.render('./partials/home')
})

router.get('/category', (req, res)=> {
  res.render('./partials/category.hbs')
})