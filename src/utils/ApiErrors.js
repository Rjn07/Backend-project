class ApiError extends Eroor {
    constructor (
        statusCode,
        message= "something went wrong",
        error =[],
        stack=""
    ){
        super(message)
        this.statusCode=statusCode
        this.data = null
        this.message=message
        this.sucess=false
        this.sucess=false
        this.error=this.error

        if(stack){
            this.stack=stack
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}
export {ApiError}




// class ApiError extends Error {: This line defines a new class named ApiError that extends the built-in JavaScript Error class. This means that ApiError inherits all properties and methods of the Error class.
//     constructor(: This is the constructor method of the ApiError class. It is called when a new instance of ApiError is created.
//     statusCode, message = "something went wrong", error = [], stack = "": These are parameters of the constructor function. statusCode represents the HTTP status code of the error, message is the error message (defaulted to "something went wrong"), error is an array to hold any additional error details, and stack is the stack trace of the error (defaulted to an empty string).
//     super(message): This line calls the constructor of the parent class (Error) with the provided message. It initializes the error message property of the ApiError instance.
//     this.statusCode = statusCode: This assigns the statusCode parameter to the statusCode property of the ApiError instance.
//     this.data = null: This initializes the data property of the ApiError instance to null. It's unused in the constructor but could be used to store additional data related to the error.
//     this.message = message: This assigns the message parameter to the message property of the ApiError instance. It's redundant because super(message) already sets the message, but it ensures that message is accessible directly from the instance.
//     this.success = false: This initializes the success property of the ApiError instance to false. It's likely intended to indicate whether the API request was successful or not.
//     this.error = this.error: This line is incorrect and redundant. It should be this.error = error to assign the error parameter to the error property of the ApiError instance. However, it's not necessary because error is already assigned in the constructor.
//     if (stack) { this.stack = stack } else { Error.captureStackTrace(this, this.constructor) }: This condition checks if a stack parameter was provided. If stack is truthy (not an empty string), it assigns the stack parameter to the stack property of the ApiError instance. If stack is falsy (empty string or null), it captures the current stack trace using Error.captureStackTrace() and assigns it to the stack property.
//     In summary, the ApiError class is a custom error class that extends the built-in Error class. It allows for creating error instances with custom status codes, messages, additional error data, and stack traces.
    
    
    
    