const express = require("express");
const dotenv = require("dotenv");
dotenv.config({path:'./config.env'})
const app=require('./app')
require('./db')()


const port=process.env.PORT ||4000
app.listen(port, () => console.log(`server runing on port ${port}`))
