require('dotenv').config()
const path = require('path')
const express = require('express')

//SERVER CONFIG
const app = express()
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));


//ROUTES
app.use('/*',(err,req,res,next)=>{
        res.sendFile("index.html", {root:path.join(__dirname,'../build')})
})

app.listen(process.env.SERVER_PORT || 5000, ()=>{
    const port = process.env.SERVER_PORT || 5000
    console.log(`Server Started Successfully! Running on Port ${port}`) 
}) 