const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const productRouter=require('./routes/productRoutes')
const cartRouter=require('./routes/cartRoutes.js')
const app=express()


app.use(cors())
app.use(express.json())
app.use('/api/products',productRouter)
app.use('/api/cart',cartRouter)






mongoose.connect('mongodb://localhost:27017/shopping-cart')
.then(()=>app.listen(4000,()=>console.log('server runing')))
.catch((error)=>console.log(error.message))

