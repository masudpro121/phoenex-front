import dbConnect from "@/libs/dbConnect";
import {createJwtToken} from "@/libs/jwt";
import UserModel from "@/models/UserModel";
const bcrypt = require('bcryptjs');


export default async function signin(req, res){
  try{
    if(req.method=='POST'){
      await dbConnect()
      const {email, password} = JSON.parse(req.body)
      const user = await UserModel.findOne({email})
      if(user){
        const hash = user.password
        const isMatched = bcrypt.compareSync(password, hash);
        if(isMatched){
          const jwtToken = createJwtToken({name:user.name, id: user._id})
          res.send({isOk:true,  token: jwtToken})
        }else{
          res.send({isOk:false, message:'Password not matched'})
        }
      }else{
        res.send({isOk:false, message:'You don\'t have an account'})
      }
      
      
    }
  }catch(err){
    console.log(err);
  }
}