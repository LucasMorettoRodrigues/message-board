const express = require('express')
const app = express()
const router = require('./routes/index')

app.use(express.static('./public'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', router)

const port = 3000

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})