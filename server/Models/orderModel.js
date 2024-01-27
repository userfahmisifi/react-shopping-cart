const mongoose = require("mongoose");
const {cartSchema }= require("../Models/cartModel");

const orderSchema = new mongoose.Schema({
  items: [cartSchema],
  name: {
    type: String,
    
  },
  email: {
    type: String,
    
  },
});







module.exports = mongoose.model("order", orderSchema);
