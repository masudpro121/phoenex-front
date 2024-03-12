import UserModel from "@/models/UserModel";

export default async function verify(req, res){
  if(req.method == 'POST'){
    try{
      const {email, dob, securityKey} = req.body
      const user = await UserModel.findOne({email})
      const mydob = new Date(dob).toDateString()
      const userdob = new Date(user.dob).toDateString()
      if(user.email==email && mydob==userdob && user.securityKey == securityKey){
        res.send({status:'verified', verified:true})
      }else{
        res.send({status:'unverified', verified:false})
      }
    }catch(err){
      console.log(err);
    }
  }
}