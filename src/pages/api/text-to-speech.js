const axios = require('axios');
const fs = require('fs');
const OPENAI_API_KEY = process.env.OPENAI_API_KEY
import cloudinaryConnect from "@/utils/cloudiniaryConnect";
import { v2 as cloudinary } from "cloudinary";



export default async function handler(req, res){
  const {text} = req.body
  await cloudinaryConnect();
  axios.post('https://api.openai.com/v1/audio/speech', {
    model: 'tts-1',
    input: text,
    voice: 'fable'
  }, {
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    responseType: 'stream'
  })
  .then(response => {
    const cld_upload_stream = cloudinary.uploader.upload_stream(
      {
        resource_type: 'video', format: 'mp3',
        folder: "audio",
        public_id: `audio-${Date.now()}-${Math.ceil(Math.random()*Date.now())}`,
      },
      (err, result) => {
        if (result) {
          res.send(result)
        }
        if (err) {
          console.log(err);
        }
      }
    )
    response.data.pipe(cld_upload_stream)
  })
  .catch(err=>{
    console.log(err)
  })
}


