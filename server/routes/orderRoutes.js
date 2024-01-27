const express = require("express");
const Order = require("../Models/orderModel");
const router = express.Router();

router.post("/", async (req, res) => {
  let order = await new Order(req.body).save();
  order=await order.populate({
    path:'items',
    populate:{
      path:'product'
    }
  })
  res.send(order);
});

router.get('/',async(req,res)=>{
    const orders=await Order.find()
    res.send(orders)
})

module.exports = router;
