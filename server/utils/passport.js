const passport = require("passport")
const LOCALSTRATEGY = require("passport-local")
const GOOGLESTRATEGY = require('passport-google-oidc')
const prisma = require("../prisma/PrismaClient")
const bcrypt = require('bcrypt')

//Local Login
passport.use(new LOCALSTRATEGY(
    { usernameField: 'email' },
    async (email, password, cb) => {
        //Check for user in database
        const user = await prisma.user.findUnique({ where: { email: email }, include:{profileImage:true, products:true} })
        //If no user return 
        if (!user) return cb(null, false, { message: 'Incorrect username or password.' })
        //Check password
        const isValidPassword = bcrypt.compareSync(password, user.password)
        // If password does not match return
        if (!isValidPassword) return cb(null, false, { message: 'Incorrect username or password.' })
        // Return user
        return cb(null, user)
    }))

//Google Login
passport.use(new GOOGLESTRATEGY(
    {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/api/users/login/google',
        scope: ['profile', 'email']

    },
    async (issuer, profile, cb) => {
        //Check for user in database
        console.log(profile)
        let user = await prisma.user.findUnique({ where: { email: profile.emails[0].value },include:{profileImage:true, products:true} })

        //If User Not Found Create Account
        if (!user) {
            user = await prisma.user.create({
                data: {
                    firstName: profile.name.givenName,
                    lastName: profile.name.familyName,
                    email: profile.emails[0].value,
                    password:"null"
                }
            })
        }
        return cb(null, user)
    }))


//Serialize User
passport.serializeUser((user, cb) => {
    process.nextTick(() => {
        const { password, ...safeData } = user
        return cb(null, safeData)
    })
})

//Deserialize User
passport.deserializeUser((user, cb) => {
    process.nextTick(() => {
        const { password, ...safeData } = user
        return cb(null, safeData)
    })
})

module.exports = passport;