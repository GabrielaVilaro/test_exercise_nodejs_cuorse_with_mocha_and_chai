'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema   

const ProductSchema = Schema({
    name: String,
    id: Number,
    price: Number,
    description: String

})

module.exports = mongoose.model('Product', ProductSchema);