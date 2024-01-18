const express=require('express')
const mongoose=require('mongoose')
const productRouter=require('./routes/productRoutes')
const app=express()



app.use(express.json())
app.use('/api/products',productRouter)






mongoose.connect('mongodb://localhost:27017/shopping-cart')
.then(()=>app.listen(4000,()=>console.log('server runing')))
.catch((error)=>console.log(error.message))

