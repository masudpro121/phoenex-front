import { v2 as cloudinary } from "cloudinary";
import cloudinaryConnect from "./cloudiniaryConnect";
let streamifier = require("streamifier");
const uploadImage = async (image, text) => {
  await cloudinaryConnect();
  return new Promise((resolve, reject) => {
    const cld_upload_stream = cloudinary.uploader.upload_stream(
            {
              folder: "image",
              public_id: text,
            },
            (err, result) => {
              if (result) {
                resolve(result);
              }
              if (err) {
                console.log(err);
              }
            }
          );
          streamifier.createReadStream(image.buffer).pipe(cld_upload_stream);
  });
};

export default uploadImage