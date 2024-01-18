const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    id:Number,
    title:String,
    desc:String,
    imageUrl:String,
    price:Number,
    sizes:[String]
})   


module.exports=mongoose.model('product',productSchema)        
                                   