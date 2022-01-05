const mongoose = require('mongoose')

const userDetailsModel = mongoose.Schema({
    first_name:{type:String,default:null},
    last_name:{type:String,default:null},
    username:{type:String,unique:true},
    password:{type:String},
    token: { type: String },
})

const userdetailModel = mongoose.model("userdetails",userDetailsModel);

module.exports=userdetailModel