const express = require('express')
const router = express.Router()
const Student = require('../models/student')

// getting all
router.get('/', async (req, res)=>{
    try{
        const students = await Student.find()
        res.json(students)
    } catch (err){
        res.status(500).json({message: err.message})
    }
})

// getting one
router.get('/id', getStudent, (req, res) => {
    res.json(res.student)
  })

//creating one
router.post('/', async (req, res)=>{
    const student = new Student({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        dob: req.body.dob,
        gender: req.body.gender,
        marks:req.body.marks,
        course: req.body.course,
    })
    try{
        const newStudent= await student.save()
        res.status(201).json(newStudent)
    } catch (err){
        res.status(400).json({message: err.message})
    }
})

// updating one
router.patch('/id', (req, res)=>{
    
})

// deleting one
router.delete('/id', (req, res)=>{
    
})

async function getStudent(req, res, next){
    let student
    try{
        student = await Student.findById(req.params.id)
        if (subscriber  == null){
            return res.status(404).json({message: 'Connot find student'})
        }
    } catch(err){
        return res.status(500).json({message:err.message})
    }
    res.student = student
    next()

}

module.exports = router