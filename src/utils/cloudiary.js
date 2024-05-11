import {V2 as cloudinary} from "cloudinary"
import fs, { rmSync } from "fs"  // used to read and write of files




          
cloudinary.config({ 
  cloud_name:process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});



 const uploadONClodinar=async (localFilePath)=>{
    try{
        if(!localFilePath) return null
        // uplaod file on the cloudinary
        const response =await cloudinary.uploader.upload(
            localFilePath,{
                resource_type:"auto"
            }
        )
        //file has been uplaoded sucessfull
        console.log("file is uploaded on cloudinary",response.url);
        return response;
    }
    catch(error){
        fs.unlinkSync(localFilePath)//remove the lcallu saved temporaryfile as the upload operartion got failed
        return null;

    }
 }

cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });