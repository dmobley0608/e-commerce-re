const express = require('express')
const { getProducts, getProductById, addProduct } = require('../controllers/productController')


const productRouter = express.Router()


productRouter.get('/', getProducts)
productRouter.get('/:id', getProductById)
productRouter.post('/new', addProduct)


module.exports = productRouter 