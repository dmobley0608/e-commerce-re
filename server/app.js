require('dotenv').config()
const path = require('path')
const express = require('express');
const  productRouter  = require('./routes/productRoutes');

//SERVER CONFIG
const app = express()
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
//Body Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//ROUTES
app.use("/api/products", productRouter)


//Redirect To Frontend
app.use('/*', (req,res)=>{   
    console.log("Sending Request To Client")
        res.sendFile("index.html", {root:path.join(__dirname,'../build')})
})

//Error Handler
app.use((err, req, res, next) => {
    console.log('error')
        if (!err.status) {
            err.status = 500
        }
        if (!err.message) {
            err.message = "Oh No! You found a problem. Please try again."
        }
        console.error(`${err.status}-${err.message}`)
        res.status(err.status).send(err.message)
       next()
    })

app.listen(process.env.SERVER_PORT || 5000, ()=>{
    const port = process.env.SERVER_PORT || 5000
    console.log(`Server Started Successfully! Running on Port ${port}`) 
}) 