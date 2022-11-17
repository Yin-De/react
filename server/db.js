const mongoose=require('mongoose')
const url='mongodb+srv://yinde:muhammad2004@nodeexpressproject.hfrzvlv.mongodb.net/API?retryWrites=true&w=majority'
const connectDB=()=>{
    return mongoose.connect(url)
}
module.exports=connectDB