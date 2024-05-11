import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true

}))
// form ka data store karne k liye ki kitna bada data save kr sakta hai jsom ke form me 
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use (cookieParser())

//routes import
import userRouter from './routes/user.routes.js'

//routes declarataion
app.use("/api/v1/users",userRouter)

export {app}


// Sure, let me explain each line of code:

// 1. `const app = express()`: This line creates an instance of the Express.js framework and assigns it to the variable `app`. Express is a web application framework for Node.js, designed for building web applications and APIs.

// 2. `app.use(cors({ origin: process.env.CORS_ORIGIN, credentials:true }))`: This line adds middleware to the Express application. Middleware functions are functions that have access to the request object (`req`), the response object (`res`), and the next middleware function in the application's request-response cycle. In this case, the `cors` middleware is being used to enable Cross-Origin Resource Sharing (CORS) for the Express application. CORS is a mechanism that allows resources on a web page to be requested from another domain outside the domain from which the resource originated. The `origin` option is set to the value of the `CORS_ORIGIN` environment variable, which specifies the allowed origins for CORS requests. The `credentials` option is set to `true`, indicating that the server should include credentials (such as cookies or HTTP authentication) in CORS requests.

// 3. `app.use(express.json({limit:"16kb"}))`: This line adds middleware to the Express application to parse incoming requests with JSON payloads. The `express.json()` function returns middleware that parses JSON payloads. The `limit` option specifies the maximum size of the JSON payload that the middleware will accept, in this case, it's set to "16kb", meaning 16 kilobytes.

// 4. `app.use(express.urlencoded({extended:true,limit:"16kb"}))`: This line adds middleware to the Express application to parse incoming requests with URL-encoded payloads. The `express.urlencoded()` function returns middleware that parses URL-encoded payloads. The `extended` option is set to `true`, allowing for parsing of nested objects. The `limit` option specifies the maximum size of the URL-encoded payload that the middleware will accept, also set to "16kb".

// 5. `app.use(express.static("public"))`: This line adds middleware to the Express application to serve static files from the `public` directory. Static files include things like HTML, CSS, client-side JavaScript, images, and other assets that don't require any special handling by the server. When a request is made for a file, Express will look in the `public` directory for the file and serve it if found.

// 6. `export {app}`: This line exports the `app` variable, making it accessible to other modules. In Node.js, the `export` statement is used to export functions, objects, or values from a module. In this case, the `app` variable, which represents the Express application, is being exported so that it can be imported and used in other parts of the application.