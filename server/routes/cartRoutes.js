const express = require("express");
const Cart = require("../Models/cartModel");
const Product = require("../Models/productModel");
const router = express.Router();


router.post('/',async(req,res)=>{
    const {product:productId,qty,_id}=await Cart.create(req.body)
    const product=await Product.findById(productId)

    res.send({_id,product,qty})

})

router.get('/',async(req,res)=>{
    const items=await Cart.find().populate('product')
    res.send(items)

})

router.delete('/:id',async(req,res)=>{
    
    await Cart.findByIdAndDelete(req.params.id)
    res.send('deleted')
    

})
router.patch('/:id',async(req,res)=>{
    
    await Cart.findByIdAndUpdate(req.params.id,req.body)
    res.send('updated successfuly')
    

})

module.exports=router