const express = require('express')
const app = express()
const router = require('./routes/index')
const cors = require('cors')

app.use(cors())

app.use(express.static('./public'))
const notFound = require('./middleware/not-found')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.use('/', router)
app.use(notFound)

module.exports = app