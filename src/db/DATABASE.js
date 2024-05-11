

import mongoose from "mongoose";
const DB_NAME ="rajan"


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection failed ", error);
        process.exit(1)
    }
} 

export default connectDB;



// Sure, let's break down the code line by line:

// 1. `import mongoose from "mongoose";`: This line imports the `mongoose` library into the current module. Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js, providing a higher-level abstraction for interacting with MongoDB databases.

// 2. `const DB_NAME ="rajan"`: This line declares a constant variable `DB_NAME` and assigns it the value `"rajan"`. This variable stores the name of the MongoDB database that the application will connect to.

// 3. `const connectDB = async () => {`: This line declares a function named `connectDB`. The function is defined using the ES6 arrow function syntax (`=>`). The function is also declared as `async`, indicating that it will operate asynchronously and may use `await` within its body to wait for promises to resolve.

// 4. `try {`: This line marks the beginning of a try block. The code inside the try block is the code that will be executed. If an error occurs within this block, it will be caught by the associated catch block.

// 5. `const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)`: This line attempts to establish a connection to the MongoDB database using the `mongoose.connect()` method. This method returns a promise, so `await` is used to wait for the promise to resolve. The MongoDB connection URI is constructed using the value of the `MONGODB_URI` environment variable, which typically contains the URI for connecting to the MongoDB database. The `${DB_NAME}` variable is appended to specify the name of the database to connect to.

// 6. `console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);`: If the connection to the MongoDB database is successful, this line logs a message to the console indicating that the connection was successful. It includes the hostname of the MongoDB server to which the connection was made.

// 7. `} catch (error) {`: This line marks the beginning of a catch block. If an error occurs within the try block, execution will jump to this catch block to handle the error.

// 8. `console.log("MONGODB connection failed ", error);`: If an error occurs during the connection attempt, this line logs an error message to the console, indicating that the MongoDB connection failed. It also logs the specific error that occurred.

// 9. `process.exit(1)`: This line exits the Node.js process with a non-zero exit code (1) if an error occurs during the connection attempt. Exiting the process with a non-zero exit code typically indicates an error condition.

// 10. `}`: This line marks the end of the catch block.

// 11. `}`: This line marks the end of the `connectDB` function.

// 12. `export default connectDB;`: This line exports the `connectDB` function as the default export of the module. This allows other modules to import and use the `connectDB` function.