const express = require('express')
const hbs = require('express-handlebars')
const routes = require('./routes')
const server = express()


module.exports = server

server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs',
}))

server.set('view engine', 'hbs')
server.use(express.urlencoded({ extended: false }))
server.use(routes)
server.use(express.static('public'))


