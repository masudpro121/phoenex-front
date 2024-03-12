import mongoose from 'mongoose'
require('dotenv').config()
const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let isConnected = false;
async function dbConnect () {
  return new Promise((resolve, reject)=>{
    if(!isConnected){
      console.log('connecting db');
      mongoose.connect(MONGODB_URI)
      .then(db=>{
        isConnected = true
        console.log('connected db');
        resolve(db)
      })
      .catch(err=>{
        isConnected = false
        reject(err)
      })
    }else{
      console.log('already connected');
      resolve('Connected')
    }
  })
}

export default dbConnect