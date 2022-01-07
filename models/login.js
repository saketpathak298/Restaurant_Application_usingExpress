const mongoose = require('mongoose');

const loginModel = mongoose.Schema({
    email:{type:String,unique:true},
    password:{type:String}
})

const loginmodel = mongoose.model("loginmodel",loginModel);

module.exports=loginmodel