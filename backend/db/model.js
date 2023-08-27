const mongoose = require('mongoose')

const mySchema =  new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique : true
    },
    pass:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }

})

 const verify = mongoose.model("verify",mySchema)
 module.exports = verify

