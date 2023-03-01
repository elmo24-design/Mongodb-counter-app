const express = require('express')

const app = express()

app.get('/', (req, res) => res.send('Hello World'))

app.use('/api/counters', require('./routes/counters'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))