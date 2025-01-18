const mongoose=require('mongoose')
require('dotenv').config()
const connet=()=>{
    mongoose.connect(process.env.mongourl)
    console.log('Database Connected Successfully')
}

module.exports=connet