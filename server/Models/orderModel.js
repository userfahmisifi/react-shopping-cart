const mongoose = require("mongoose");
const Cart = require("./cartModel");

const orderSchema = new mongoose.Schema({
  items: [
    {
      type: mongoose.Types.ObjectId,
      ref: Cart,
    },
  ],
  name: {
    type: String,
    
  },
  email: {
    type: String,
    
  },
});

orderSchema.pre('save',function(){
  this.items=this.items.map(item=>item._id)
})






module.exports = mongoose.model("order", orderSchema);
