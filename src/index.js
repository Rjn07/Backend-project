import connectDB from "./db/DATABASE.js"
import dotenv from 'dotenv';

dotenv.config({
    path: './env'
});

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running  at port ${process.env.PORT}`)
    })

})

.catch((error)=>{
    console.log("mongodb connection is failed ",error)
})












// FIRST WAY TO CONNECT DATABASE
// ;(async()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error",(error)=>{
//             console.log("ERRR",error);
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`app is listening on port $ {process.env.PORT}`);
//         })

//     }
//     catch(error){
//         console.error("ERROR:",error)
//     }
// })()