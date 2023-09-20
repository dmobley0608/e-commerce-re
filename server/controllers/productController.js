const prisma = require('../prisma/PrismaClient')



exports.getProducts = async (req, res) => {
    try {     
        console.log("Fetching Products")  
        const products = await prisma.product.findMany({ include: { images: true } })
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
        const product = await prisma.product.findUnique({ where: { id: id }, include: { images: true } })
        res.status(200).json(product)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

exports.addProduct = async(req, res)=>{
    try{
         console.log("Adding New Product")
         const product = {title:req.body.title, description:req.body.description, quantity:Number(req.body.quantity),price:Number(req.body.price)}
        await prisma.product.create({
            data:{...product,               
                images:{
                    create:{
                        url:req.body.imageUrl
                    }
                }
            }
        })
        prisma.$disconnect()
        console.log("Successfully Added Product")
        res.status(200).json("Successfully Added Product")
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}