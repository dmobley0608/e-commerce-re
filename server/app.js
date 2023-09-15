require('dotenv').config()
const path = require('path')
const express = require('express');
const { products } = require('./temp');

//SERVER CONFIG
const app = express()
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));


//ROUTES
app.get("/api/products", (req, res)=>{    
    res.status(200).json(products)
})

app.get("/api/products/:id", (req, res)=>{    
    const product = products.filter(product=>product.id === Number(req.params.id))[0]   
    res.status(200).json(product)
})

app.use('/*', (req,res)=>{   
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