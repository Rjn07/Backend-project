import {asyncHandler } from "../utils/asyncHandler.js";


const registerUser= asyncHandler(async(req,res)=> {
        res.status(200).json({
            mesaage: "han bhai kesi chal rahi coding"
         })
        })

        export {registerUser}