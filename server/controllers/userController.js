const bcrypt = require('bcrypt')
const prisma = require("../prisma/PrismaClient")

exports.getUser = (req, res) => {
    console.log("fetching user")
    try{
        const user = req.session.passport.user
        if (user) return res.status(200).json(user)
    }catch(err){
        return res.status(200).json(null)
    } 
  
}

exports.register = async (req, res) => {
    try {
        const hashedPassword = bcrypt.hashSync(req.body.password, 15)
        const user = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPassword
        }
        const storedUser = await prisma.user.create({ data: { ...user } })
        const { password, ...safeData } = storedUser
        res.status(200).send(safeData)
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.login = (req, res) => {
    res.status(200).json(req.session.passport.user)
}

exports.logout = (req, res) => {
    req.logout((err) => {  })  
    console.log("ending session")
    res.json("logged out")

}