import mongoose ,{Schema} from "mongoose";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
const userSchema = new Schema(
    {
        username:{
            type : String,
            required:true,
            unique : true,
            trim :true,
            index: true,
            lowercase:true,
        },
        email:{
            type : String,
            required:true,
            unique : true,
            trim :true,
           
            lowercase:true,
            
        },
        Fullname:{
            type : String,
            required:true,
            trim :true,
            index: true,
            lowercase:true,

        },
        avatar:{
            type:String, // cloundianaruy url
            required: true,

        },
        coverImage:{
            type:String, // cloundianaruy url
        },
        watchHistory:{
            type:Schema.Types.ObjectId,
            ref: "video"
        },
        Password:{
            type:String,
            required: [true, 'password is correct']
        },
        refreshToken:{
            type:String

        }
        ,
        
        
            timestamps:true
        }
        
    

)
userSchema.pre("save",async function(next) {
    if(!this.isModified("password")) return next();
    this.password =bcrypt.hash(this.password,10)
    next()
})
userSchema.methods.ispasswordCorrect=async function(password){
    return await bcrypt.compare(password,this.password)

}
userSchema.methods.generateAcessToken=function(){
    jwt.sign(
        {
            _id:this._id,
            email:this.email,
            username:this.username,
            Fullname:this.Fullname

        },process.env.ACESS_TOKEN_SECRET,{
            expiresIn:process.env.ACESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken=function(){
    jwt.sign(
        {
            _id:this._id
            

        },process.env.REFRESH_TOKEN_SECRET,{
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}
export const User = mongoose.model("User",userSchema)





// Sure, let's break down the code step by step:

// 1. **Imports**: The code imports necessary modules from the `mongoose` library for creating schemas and models, as well as modules for JWT (JSON Web Tokens) operations and bcrypt for password hashing.

// 2. **Schema Definition**: The code defines a Mongoose schema called `userSchema`. This schema represents the structure of a user document in MongoDB. Each field in the schema corresponds to a property that a user document can have.

//    - `username`: String type, required, unique, and trimmed. It represents the username of the user.
//    - `email`: String type, required, unique, and trimmed. It represents the email address of the user.
//    - `Fullname`: String type, required, and trimmed. It represents the full name of the user.
//    - `avatar`: String type. It represents the URL of the user's avatar image.
//    - `coverImage`: String type. It represents the URL of the user's cover image.
//    - `watchHistory`: ObjectId type, referencing the "video" model. It represents the user's watch history.
//    - `Password`: String type, required. It represents the password of the user.
//    - `refreshToken`: String type. It represents the refresh token used for token-based authentication.
//    - `timestamps`: Boolean type. It automatically adds `createdAt` and `updatedAt` fields to the document.

// 3. **Pre-Save Hook**: This hook is executed before saving a user document. It hashes the password using bcrypt if the password has been modified.

// 4. **Instance Methods**:
//    - `isPasswordCorrect`: This method compares a provided password with the hashed password stored in the database using bcrypt.
//    - `generateAccessToken`: This method generates a JWT access token containing user information like id, email, username, and Fullname.
//    - `generateRefreshToken`: This method generates a JWT refresh token containing user's id.

// 5. **Export**: Finally, the code exports the `User` model created using `mongoose.model`.

// Overall, this code defines a Mongoose schema for a user document, includes hooks for pre-saving operations (like hashing passwords), defines instance methods for password comparison and token generation, and exports the resulting model for use in other parts of the application.