const express=require('express')
const connectDB = require('./db')
const app=express()
const route=require('./route')
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/',route)




const start=async()=>{
    try {
        await connectDB()
app.listen(
    5000,()=>{
        console.log('listening on port 5000');
    })
    } catch (error) {
       console.log(error.message); 
    }


}
start()