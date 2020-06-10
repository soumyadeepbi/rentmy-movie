const Joi = require('@hapi/joi')
const mongoose = require('mongoose')

const Customer = mongoose.model('Customer', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    isGold: {
        type: String,
        default: false
    },
    phone: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }
}))

function validateCustomer(customer){
    const schema = Joi.object({
        name: Joi.string().min(4).max(50).required(),
        phone: Joi.number().min(5).max(9999999999).required()
    })
    return schema.validate(customer)
}

exports.Customer = Customer
exports.validate = validateCustomer