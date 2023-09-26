
const prisma = require("../prisma/PrismaClient")


exports.getProducts = async (req, res) => {
    try {
        console.log("Fetching Products")
        const products = await prisma.product.findMany({ include: { images: true, user: { select: { id: true, firstName: true, lastName: true, email: true } } }, orderBy: { title: 'asc' } })
        prisma.$disconnect()
        res.status(200).json(products)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

exports.getProductById = async (req, res) => {
    try {
        const { id } = req.params
        const product = await prisma.product.findUnique({ where: { id: id }, include: { images: true, user: { select: { firstName: true, lastName: true, email: true } } }, })
        res.status(200).json(product)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

exports.addProduct = async (req, res) => {
    try {
        console.log("Adding New Product")
        const product = { title: req.body.title, description: req.body.description, quantity: Number(req.body.quantity), price: Number(req.body.price), userId: req.body.userId }
        await prisma.product.create({
            data: {
                ...product,
                images: {
                    create: {
                        url: req.body.imageUrl
                    }
                }
            }
        })
        prisma.$disconnect()
        console.log("Successfully Added Product")
        res.status(200).json("Successfully Added Product")
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

exports.editProduct = async (req, res) => {
    const user = req.user;
   
    try {
        console.log("Editing Product")        
        const product = await prisma.product.findUnique({ where: { id: req.body.id } })
        const updatedProduct = { 
            title: req.body.title, 
            description: req.body.description, 
            quantity: Number(req.body.quantity), 
            price: Number(req.body.price), 
            updatedAt:  new Date().toJSON()
        }
        
        if (user.id === product.userId) {
            await prisma.product.update({
                where: { id: req.body.id },
                data: { ...updatedProduct }
            })
            prisma.$disconnect()
            console.log("Successfully Updated Product")
            return res.status(200).json("Successfully Updated Product")
        }
        return res.status(403).json("You are not authorized to edit this product")
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        console.log("Deleting Product")
        const product = await prisma.product.findUnique({where:{id:req.params.id}})
        if(req.user.id === product.userId || req.user.role === 'ADMIN'){
            await prisma.product.delete({ where: { id: req.params.id } })
            return res.status(200).json("Successfully Delete Product")
        }
        return res.status(403).json("Unauthorized")      
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}