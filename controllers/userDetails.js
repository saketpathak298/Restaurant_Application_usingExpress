const userRegisterModel = require('../models/userDetails')
const userRegisterNtrl ={}
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const debug = require('debug')
// get config vars
dotenv.config();

userRegisterNtrl.createUserDetials = async (req,res)=>{
  try{
    const {first_name,last_name,username,password}=req.body

    const checkUsername= await userRegisterModel.findOne({username})
    if(checkUsername){
        return res.status(409).send("user already exits")
    }
    //Encrypt user password
     Encryptedpassword = await bcrypt.hash(password,10)
   

    const getRegister = new userRegisterModel({
      first_name,
      last_name,
      username:username.toLowerCase(),
      password:Encryptedpassword,
   
      })
              // access config var
     const token = jwt.sign({
      user_id:getRegister.id ,username
    }, process.env.TOKEN_SECRET,
    {
      expiresIn: "2h",
    })
     getRegister.token=token;
     await getRegister.save().then((response)=>{
      res.status(200).send({
          success:true,
          data:response
      })
      }).catch((err)=>{
        res.status(500).send({
            success:false,
            error:err,
            msg:"something went wrong"
        })
      })
  
  }catch(err){
    res.status(500).send({
      error:err,
      msg:"internal"
    })
  }
 
}

module.exports=userRegisterNtrl;