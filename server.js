const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')

const app = express()
connectDB()

app.use(cors())

app.use('/api/counters', require('./routes/counters'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))