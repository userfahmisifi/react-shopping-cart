const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const productRouter=require('./routes/productRoutes')
const cartRouter=require('./routes/cartRoutes')
const orderRouter=require('./routes/orderRoutes')
const app=express()


app.use(cors())
app.use(express.json())
app.use('/api/products',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/orders',orderRouter)






mongoose.connect('mongodb://localhost:27017/shopping-cart')
.then(()=>app.listen(4000,()=>console.log('server runing')))
.catch((error)=>console.log(error.message))

