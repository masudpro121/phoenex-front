import {v2 as cloudinary} from 'cloudinary';



let isConnected = false;
async function cloudinaryConnect () {
  return new Promise((resolve, reject)=>{
    if(!isConnected){
      console.log('connecting cloudinary');
       cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_NAME, 
        api_key: process.env.CLOUDINARY_KEY, 
        api_secret:  process.env.CLOUDINARY_SECRET
      });
      isConnected = true
      resolve('Connected')
    }else{
      console.log('already connected cloudinary');
      resolve('Connected')
    }
  })
}

export default cloudinaryConnect