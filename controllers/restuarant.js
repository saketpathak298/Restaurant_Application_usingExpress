const restaurantModel = require('../models/restaurant');
const restaurantCntrl = {}

restaurantCntrl.createRestaurant = async (req,res)=>{
    try{
      const setRestaurantData = new  restaurantModel({
        name:require.body.name,
        owner :require.body.owner,
        type :require.body.type,
        logo :require.body.logo,
        status :require.body.status,
        is_active :require.body.is_active,
        is_deleted :require.body.is_deleted,
        created_by :require.body.created_by,
        created_at :require.body.created_at,
        updated_at :require.body.updated_at 
      })
       

    }catch{

    }
}
module.exports=restaurantCntrl;