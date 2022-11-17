const express=require('express')
const path=require('path')
const router=express.Router()
const name=require('./model')



router.route("/api").get(async(req,res)=>{
    const names=await name.find({})
    res.status(201).json({names})
   // res.send(["ade","ayo"])
   // res.send( {"names":[{"_id":"6374e072d4b80ddb1cb44834","name":"ayo"},{"_id":"6374e082d4b80ddb1cb44835","name":"bayo"}]})
})
router.route("/login").get(async(req,res)=>{
   const names=await name.find({})
   res.status(201).json({names})
   // res.send(["ade","ayo"])
   // res.send( {"names":[{"_id":"6374e072d4b80ddb1cb44834","name":"ayo"},{"_id":"6374e082d4b80ddb1cb44835","name":"bayo"}]})
})
router.route("/api").post(async(req,res)=>{
   const names=await Todo.create(req.body)
     res.status(201).json({names})
   
   // res.send('yes')
     console.log(req.body)
       }
)


module.exports=router