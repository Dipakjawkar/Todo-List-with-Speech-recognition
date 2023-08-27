const mongoose = require('mongoose')

const todoSchema =  new mongoose.Schema({
   title:{
    type:String,
    required:true
   },
   description:{
    type:String,
    required:true
   }

})

 const todos = mongoose.model("todos",todoSchema)
 module.exports = todos

