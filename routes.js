const express = require('express')
const router = express.Router()
const fs = require('fs')
const data = require('./data.json')

module.exports = router

router.get('/', (req, res) => {
  res.render('./partials/home')
})

router.get('/category/:id', (req, res)=> {
  const categ = req.params.id
  const array = data.places

  const newArray = array.filter(place => place.category == categ)

  const stuff = {places: newArray}
  console.log(newArray, categ)
  res.render('./partials/category.hbs', stuff)
})