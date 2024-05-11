import mongoose, {Schema} from "mongoose";
import {  mongooseAggregatePaginate} from "mongoose-aggregate-paginate-v2"
const videoSchema = new Schema(
    {
        videofile:{
            type:String, //cloudinary url
            required: true


        },
        thumbnail:{
            type:String, //cloudinary url
            required: true


        },
        title:{
            type:String, 
            required: true

        },
        description :{
            type:String, //cloudinary url
            required: true

        },
        duration:{
            type:Number,
            required:true
        },
        isPublished:{
            type:Boolean,
            default: true
        },
        views:{
            type:Number,
            default:0

        },
        owner:{
            type:Schema.type.ObjectId,
            ref:"User"
        }

    },
    {
        timestamps:true
    }
)
videoSchema.plugin(mongooseAggregatePaginate)
export const video =mongoose.model("Video",videoSchema)


// Let's go through the code step by step:

// 1. **Imports**: Similar to the previous code, this imports necessary modules from `mongoose` for creating schemas and models. Additionally, it imports `mongooseAggregatePaginate` from `"mongoose-aggregate-paginate-v2"`, which is a plugin for paginating MongoDB aggregate queries.

// 2. **Schema Definition**: The code defines a Mongoose schema called `videoSchema`. This schema represents the structure of a video document in MongoDB. Each field in the schema corresponds to a property that a video document can have.

//    - `videofile`: String type, required. It represents the URL of the video file, likely stored on a service like Cloudinary.
//    - `thumbnail`: String type, required. It represents the URL of the video thumbnail, also likely stored on Cloudinary.
//    - `title`: String type, required. It represents the title of the video.
//    - `description`: String type, required. It represents the description of the video.
//    - `duration`: Number type, required. It represents the duration of the video.
//    - `isPublished`: Boolean type. It indicates whether the video is published or not, defaulting to true.
//    - `views`: Number type. It represents the number of views the video has received, defaulting to 0.
//    - `owner`: ObjectId type, referencing the "User" model. It represents the owner of the video.

// 3. **Timestamps**: The schema option `timestamps: true` automatically adds `createdAt` and `updatedAt` fields to the document.

// 4. **Plugin**: The code applies the `mongooseAggregatePaginate` plugin to the schema. This plugin adds pagination support to Mongoose's `aggregate()` function, allowing for paginated results when querying MongoDB using aggregation pipelines.

// 5. **Export**: Finally, the code exports the `video` model created using `mongoose.model`.

// Overall, this code defines a Mongoose schema for a video document, with fields representing various attributes of a video. It also adds support for pagination using the `mongooseAggregatePaginate` plugin and exports the resulting model for use in other parts of the application.