const express = require('express')
const router = express.Router()
// const { check, validationResult } = require('express-validator/check')

const Counter = require('../models/Counter')

router.get('/', async(req, res) => {
   try{
      const counters = await Counter.find()

      res.json(counters[0])
   }catch(err){
      console.error(err.message)
      res.status(500).send('Server Error')
   }
})

router.put('/inc/:id', async(req, res) => {
   try{
      await Counter.findByIdAndUpdate(req.params.id, 
         {
            $inc: {
               value: 1
            }
         }
      )

      const counters = await Counter.find()

      res.json(counters[0])
   }catch(err){
      console.error(err.message)
      res.status(500).send('Server Error')
   }
})

router.put('/dec/:id', async(req, res) => {
   try{
      await Counter.findByIdAndUpdate(req.params.id, 
         {
            $inc: {
               value: -1
            }
         }
      )

      const counters = await Counter.find()

      res.json(counters[0])
   }catch(err){
      console.error(err.message)
      res.status(500).send('Server Error')
   }
})

router.put('/reset/:id', async(req, res) => {
   try{
      let counter = await Counter.findById(req.params.id)

      counter = await Counter.findByIdAndUpdate(req.params.id, {
         value: 0
      })
      
      res.json(counter)
   }catch(err){
      console.error(err.message)
      res.status(500).send('Server Error')
   }
})

module.exports = router;