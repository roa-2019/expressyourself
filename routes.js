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

router.get('/category/comments/:id', (req, res)=> {
  const id = req.params.id - 1
  const place = data.places[id]
  res.render('./partials/place-comments.hbs', place)
})

router.post('/category/comments/:id', (req, res) => {
  const id = req.params.id
  const comments = data.places[id]
  const newComment = {
    text: req.body.text,
    rating: Number(req.body.rating)
  }
  
  comments.push(newComment)

  
  fs.writeFile('./data.json', JSON.stringify(data), function(error) {
      if (error) {
        return res.status(500).send('Oh no! Somethings not right!') 
      } 
        return res.redirect('/category/comments/' + id)
      })
})