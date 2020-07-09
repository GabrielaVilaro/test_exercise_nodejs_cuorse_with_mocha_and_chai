'use strict'

const express = require('express')
const productControllers = require('../controllers/product')
const api = express.Router()

api.get('/tienda.html', productControllers.getProducts)
api.get('/product/:productId', productControllers.getProduct)
api.post('/tienda.html', productControllers.saveProduct)
api.put('/product/:productId', productControllers.updateProduct)
api.delete('/product/:productId', productControllers.deleteProduct)

module.exports = api
