const mongoose = require('mongoose');

const restaurantModel = mongoose.Schema({
    name:{type:String,default:null},
    owner :{type:String,default:null},
    type :{type:String,default:null},
    logo :{type:String},
    status :{type:String},
    is_active :{type:boolean},
    is_deleted :{type:String},
    created_by :{type:String},
    created_at :{type:String},
    updated_at :{type:String} 
})

const RestaurantModel = mongoose.model('restuarnatmodel',restaurantModel)

module.exports=RestaurantModel;
