const express = require("express");
const cors = require("cors");

const productRouter = require("./routes/productRoutes");
const cartRouter = require("./routes/cartRoutes");
const orderRouter = require("./routes/orderRoutes");
const app = express();



app.use(cors());
app.use(express.json());
app.use("/api/products", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/orders", orderRouter);

if(process.env.NODE_ENV==='production'){
    app.use(express.static('../client/build'))

}


module.exports=app

