
const prisma = require("../prisma/PrismaClient")


exports.getProducts = async (req, res) => {
    try {     
        console.log("Fetching Products")  
        const products = await prisma.product.findMany({ include: { images: true, user:{select:{id:true,firstName:true, lastName:true, email:true}} }, orderBy:{title:'asc'} })
        prisma.$disconnect()
        console.log(products)
        res.status(200).json(products)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

exports.getProductById = async (req, res) => {
    try {
        const { id } = req.params
        const product = await prisma.product.findUnique({ where: { id: id }, include: { images: true,  user:{select:{firstName:true, lastName:true, email:true}} },  })
        res.status(200).json(product)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

exports.addProduct = async(req, res)=>{
    try{
         console.log("Adding New Product")
         const product = {title:req.body.title, description:req.body.description, quantity:Number(req.body.quantity),price:Number(req.body.price), userId:req.body.userId}
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

exports.editProduct = async(req, res)=>{
    console.log("Editing Product")
  
    
    try{
         console.log("Editing Product")
         const product = {title:req.body.title, description:req.body.description, quantity:Number(req.body.quantity),price:Number(req.body.price)}
        await prisma.product.update({
            where:{id:req.body.id},
            data:{...product}
        })
        prisma.$disconnect()
        console.log("Successfully Updated Product")
        res.status(200).json("Successfully Updated Product")
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

exports.deleteProduct = async(req, res)=>{
    try{
        console.log("Deleting Product")
        await prisma.productImage.deleteMany({where:{productId:req.params.id}})
        await prisma.product.delete({where:{id:req.params.id}})
        res.status(200).json("Successfully Delete Product")
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}