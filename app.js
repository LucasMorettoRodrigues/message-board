const express = require('express')
const app = express()

app.route('/').get( (req, res) => {
    res.send('Home')
})

const port = 3000

app.listen(port, console.log(`Server is listening on port ${port}`))