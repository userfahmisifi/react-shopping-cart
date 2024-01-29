const express = require("express");
const Order = require("../Models/orderModel");
const router = express.Router();

router.post("/", async (req, res) => {
  let order = await Order.create(req.body);
  order = await order.populate({
    path: "items",
    populate: {
      path: "product",
    },
  });
  res.send(order);
});

router.get("/", async (req, res) => {
  let orders = await Order.find().populate("items.product");
  res.send(orders);
});

module.exports = router;
