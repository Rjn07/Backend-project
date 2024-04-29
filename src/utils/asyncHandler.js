const  asyncHandler =(requestHandler)=>{
    (req,res,next)=>{
    Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
}}

export {asyncHandler}



// In summary, the asyncHandler function is a middleware function designed to wrap asynchronous request handlers in Express.js. 
// It ensures that any errors thrown by the handler are caught and passed to the Express.js error handling middleware.