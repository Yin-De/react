const mongoose=require('mongoose')

const name= new  mongoose.Schema({
    name:{
        type:String,
        required:[true,'must provide name']
    }
    })


module.exports=mongoose.model('name',name)