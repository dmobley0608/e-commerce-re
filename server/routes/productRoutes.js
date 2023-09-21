const express = require('express')
const { getProducts, getProductById, addProduct, editProduct, deleteProduct } = require('../controllers/productController')


const productRouter = express.Router()


productRouter.get('/', getProducts)
productRouter.get('/:id', getProductById)
productRouter.put('/:id/edit', editProduct)
productRouter.post('/new', addProduct)
productRouter.delete('/:id/delete', deleteProduct)

module.exports = productRouter 