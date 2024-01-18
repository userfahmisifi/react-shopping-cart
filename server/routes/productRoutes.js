const express=require('express')
const Product=require('../Models/productModel')

const router=express.Router()



router.post('/',async(req,res)=>{
    const product=await Product.create(req.body)
    res.send(product)

})

router.get('/',async(req,res)=>{
    
   const products=await Product.find()
   res.send(products)
})


router.delete('/:productId',async(req,res)=>{
     await Product.findByIdAndDelete(req.params.productId)
     res.send('deleted')
})

module.exports=router