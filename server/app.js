require('dotenv').config()
const path = require('path')
const express = require('express');
const session = require('express-session')
const passport = require('./utils/passport')
const  productRouter  = require('./routes/productRoutes');
const userRouter = require("./routes/userRoutes")

//SERVER CONFIG
const app = express()
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
//Body Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//Session
app.use(session({
    store: new(require('connect-pg-simple')(session))({
        conString:process.env.DATABASE_URL,  
        tableName:'Session'      
    }),
    secret:'ley',
    resave:false,
    saveUninitialized: false,
    cookie:{secure:false}
}))
//Passport Authentication
app.use(passport.authenticate('session'))
//ROUTES
app.use("/api/products", productRouter)
app.use("/api/users", userRouter)

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