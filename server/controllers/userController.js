const bcrypt = require('bcrypt')
const prisma = require("../prisma/PrismaClient")

exports.getUser = async(req, res) => {
    console.log("fetching user")
    try{
        const user = await prisma.user.findUnique({where:{id:req.user.id}, include:{profileImage:true}})
        const {password, ...safeData} = user
        if (user) return res.status(200).json(safeData)
    }catch(err){
        return res.status(200).json(null)
    } 
  
}

exports.getUserById = async(req,res)=>{
    console.log(`Fetching User: ${req.params.id}`)
    const user = await prisma.user.findUnique({where:{id:req.params.id}, include:{profileImage:true}})
    if(user) return res.status(200).json(user)
    return res.status(404).json("User Not Found")
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

exports.loginGoogle=(req, res, next)=>{
    console.log(req.user)
   res.redirect(`/${req.user.id}/dashboard`)
}

exports.logout = (req, res) => {
    req.logout((err) => {  })  
    console.log("ending session")
    res.json("logged out")

}