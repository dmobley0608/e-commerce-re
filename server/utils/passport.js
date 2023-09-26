const passport = require("passport")
const LOCALSTRATEGY = require("passport-local")
const prisma = require("../prisma/PrismaClient")
const bcrypt = require('bcrypt')

//Local Login
passport.use(new LOCALSTRATEGY(
    {usernameField:'email'},
    async (email, password, cb)=>{
        //Check for user in database
        const user = await prisma.user.findUnique({where:{email:email}})       
        //If no user return 
        if(!user) return cb(null, false, {message:'Incorrect username or password.'})
        //Check password
        const isValidPassword = bcrypt.compareSync(password, user.password)    
        // If password does not match return
        if(!isValidPassword) return cb(null, false, {message:'Incorrect username or password.'})
        // Return user
        return cb(null, user)
}))


//Serialize User
passport.serializeUser((user, cb)=>{
    process.nextTick(()=>{        
        const {password, ...safeData} = user      
        return cb(null, safeData)
    })
})

//Deserialize User
passport.deserializeUser((user, cb)=>{
    process.nextTick(()=>{
        const {password, ...safeData} = user       
        return cb(null, safeData)
    })
})

module.exports = passport;