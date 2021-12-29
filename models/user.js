const mongoose = require('mongoose');

const userModel = mongoose.Schema({
  first_name:{type:String, default: null},
  last_name :{type:String, default: null},
  email :{type:String, unique: true},
  password :{type:String},
  type :{type:String},
  is_active :{type:Boolean},
  is_approved :{type:Boolean},
  created_at :{type:String},
  updated_at :{type:String},
  created_by :{type:String},
  is_deleted:{type:String},
})
const userDetailModel = mongoose.model("/userModel",userModel)
module.exports=userDetailModel;