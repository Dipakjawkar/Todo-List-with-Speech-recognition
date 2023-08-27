const express = require("express");
const cors = require('cors')
require("./db/mongose")
const verify = require("./db/model")
const todos = require("./db/todos")
const app = express();
app.listen(9090, () => {
    console.log("Connect to server")
})
app.use(express.json())
app.use(cors())



app.post("/login", (req, res) => {
    console.log(req.body)
    verify.findOne({ email: req.body.email }).then((val) => {

        if (val) {
            if (val.pass !== req.body.pass) {
                res.json({
                    message: "Invalid password",
                    status: "wrong"
                })
                return;
            }

            res.json({
                message: "Login Succesfull !",
                status: "ok"
            })
        }
        else {
            res.json({
                message: "Invalid email",
                status: "wrong"
            })
        }
    })



})





app.post("/signup", (req, res) => {

    verify.findOne({ email: req.body.email }).then((val) => {
        if (!val) {
            const data = new verify(req.body)
            data.save().then((val) => {
                res.json({
                   
                    message: "Successful !",
                    status: "ok"
                })
            }).catch((error) => {
                if (!req.body.email) {
                    res.json({
                        message: "please Enter Email !",
                        status: "wrong"
                    })
                }
                if (!req.body.pass) {
                    res.json({
                        message: "please Enter Password !",
                        status: "wrong"
                    })
                }
                if (!req.body.name) {
                    res.json({
                        message: "please Enter Name !",
                        status: "wrong"
                    })
                }
            })
        }
        else {
            res.json({
                message: "Duplicate Present !",
                status: "wrong"
            })
        }
    })

})

app.get("/", (req, res) => {
    verify.find({}).then((val) => {
        res.send(val)
    })
})


app.post("/add",(req, res)=>{

    const todo = new todos(req.query)
    todo.save().then((val)=>{
        res.send(val)
    }).catch((e)=>{
        res.send(e)
    })
    })

app.get("/todos",(req,res)=>{
   todos.find({}).then((val) => {
        res.send(val)
    })
})