require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Ad_forms',{ useNewUrlParser: true, useUnifiedTopology: true, family: 4,})
const db = mongoose.connection
db.on('error',(error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const studentsRouter = require('./routes/students')
app.use('/students', studentsRouter)
app.get('/api',(req, res) =>  {
    res.send("form server")
  })

app.post('/students',(res,req)=>{
    console.log(req.body)
    res.json({"message":"Form Submitted."})
})
app.listen(5000, () => console.log('Server Started'))
