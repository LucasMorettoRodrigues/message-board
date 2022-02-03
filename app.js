const express = require('express')
const notFound = require('./middleware/not-found')
const app = express()
const router = require('./routes/index')

app.use(express.static('./public'))


app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.use('/', router)
app.use(notFound)

module.exports = app