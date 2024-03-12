import dbConnect from "@/libs/dbConnect";
import { createJwtToken } from "@/libs/jwt";
import UserModel from "@/models/UserModel";
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

export default async function signup(req, res){
  try{
    if(req.method=='POST'){
      await dbConnect()
      const {email, password} = JSON.parse(req.body)
      
      const hashedPass = bcrypt.hashSync(password, salt);
      const user = new UserModel({
        email, password:hashedPass
      })
      user.save()
      .then((newuser)=>{
        const jwtToken = createJwtToken({email, id:newuser._id})
        res.send({isOk:true, token: jwtToken})
      })
      .catch(err=>{
        res.status(500).json({isOk:false, message:err.message})
      })
      

      
    }
  }catch(err){
    console.log(err);
  }
}