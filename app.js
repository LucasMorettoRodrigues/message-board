const express = require('express')
const app = express()

app.use(express.static('./public'))
app.use(express.json())

app.route('/').get((req, res) => {
    res.status(200)
})

app.route('/new-message').post((req, res) => {
})

const port = 3000

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})