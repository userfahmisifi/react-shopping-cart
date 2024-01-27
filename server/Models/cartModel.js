const mongoose=require('mongoose')
const Product = require('./productModel')

const cartSchema=new mongoose.Schema({
    product:{
        type:mongoose.Types.ObjectId,
        ref:Product
    },
    qty:{
        type:Number,
        required:true
    }
})   


module.exports={
    cartSchema,
    Cart:mongoose.model('cart-item',cartSchema) 
}
     
                                   