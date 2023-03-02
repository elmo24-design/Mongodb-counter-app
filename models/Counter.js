const mongoose = require('mongoose')

const CounterSchema = mongoose.Schema({
   value:{
      type: Number,
      required: true
   }
})

module.exports = mongoose.model('counter', CounterSchema)