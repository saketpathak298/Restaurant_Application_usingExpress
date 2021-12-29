


const UserModel = require('../models/user');
const userCntrl = {}

userCntrl.createUser = async (req,res,next)=>{
  const setUserDetails = new UserModel({
    first_name:req.body.first_name,
    last_name :req.body.last_name,
    email :req.body.email,
    password :req.body.password,
    type :req.body.type,
    is_active :req.body.is_active,
    is_approved :req.body.is_approved,
    created_at :req.body.created_at,
    updated_at :req.body.updated_at,
    created_by :req.body.created_by,
    is_deleted:req.body.is_deleted,
  })
  try{
    await setUserDetails.save().then((response)=>{
      res.status(200).send({
          success:true,
          data:response
      })
    }).catch((err)=>{
      res.status(500).send({
          success:false,
          msg:'something went wrong',
          error:err
      })
    })
  }catch(err){
        res.status(500).send({
            success:false,
            msg:'something went wrong please try again',
            error:err
        })
  }
}

module.exports=userCntrl;
