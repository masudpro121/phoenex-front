import dbConnect from "@/libs/dbConnect";
import BookModel from "@/models/BookModel";

export default async function handler(req, res){
  await dbConnect()
  BookModel.find()
  .then(result=>{
    res.send({isOk:true, books:result})
  })
}