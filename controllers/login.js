const LoginModel = require('../models/login');
const OAuth2Client=require('google-auth-library');
const client = new OAuth2Client(923034257265-gch6oun0cmdl0h4ujvkpcumppdsk9fuj.apps.googleusercontent.com)
const jwt = require('jsonwebtoken')
const loginCntrl = {}
const bcrypt = require('bcrypt')
loginCntrl.createLogin = async(req,res)=>{

    const {email,password}=req.body

    const userExit = await LoginModel.findOne({email})
    if(userExit){
        res.status(409).send("username already exists")
    }
     //Encrypt user password
     encrypt = await bcrypt.hash(password,10)

     // save login details
    const saveloginDetails = new LoginModel({
        email,
        password:encrypt
    })
    
    await saveloginDetails.save().then((response)=>{
      res.status(200).send({
          
      })
    }).catch((err)=>{

    })
    
}