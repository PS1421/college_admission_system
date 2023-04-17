const mongoose = require('mongoose')

const studentsSchmea = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    gender:{
        type: String,
        required: true
    },
    marks:{
        type: String,
        required: true
    },
    course:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Student', studentsSchmea)