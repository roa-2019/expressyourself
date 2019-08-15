const express = require('express')
const router = express.Router()
const fs = require('fs')
const data = require('./data.json')

module.exports = router

router.get('/', (req, res) => {
  res.render('./partials/home')
})

router.get('/category/:id', (req, res)=> {
  const id = req.params.id
  const array = data.Places
  const newArray = array.filter(place => place.category == id)
  res.render('./partials/category.hbs', newArray)
})