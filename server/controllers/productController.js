const prisma = require('../prisma/PrismaClient')



exports.getProducts = async (req, res) => {
    try {
        // console.log("Fetching Products")
        // await prisma.product.create({
        //     data:{
        //         title:"Swiss Army Knife",
        //         description:"A multifunction knife that can save lives",
        //         price:29.99,
        //         quantity:10,
        //         images:{
        //             create:{
        //                 url:"https://imageengine.victorinox.com/mediahub/33754/560Wx490H/SAK_1_3713_T__S1.jpg"
        //             }
        //         }
        //     }
        // })
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