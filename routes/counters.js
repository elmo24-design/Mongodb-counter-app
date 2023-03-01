const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
   res.send('Get counter value')
})

router.put('/inc/:id', (req, res) => {
   res.send(req.params.id)
})

router.put('/dec/:id', (req, res) => {
   res.send('Minus one to counter')
})

module.exports = router;