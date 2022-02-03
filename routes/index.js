const express = require('express')
const router = express.Router()
let messages = require('../data')

router.route('/messages').get((req, res) => {
    res.status(200).json({ sucess: true, data: messages})
})

router.route('/').get((req, res) => {
    res.status(200)
})

router.route('/new').post((req, res) => {
    const { data: newMessage } = req.body
    messages.push(newMessage)
    res.redirect('/')
})

module.exports = router