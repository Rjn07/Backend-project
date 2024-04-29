class ApiResponse{
    constructor(statusCode,data,message="sucess"){
        this.statusCode=statusCode
        this.data=data
        this.message=message
        this.sucess=statusCode<400
    }
    }



//     Sure, let's break down the code for the `ApiResponse` class line by line:

// 1. `class ApiResponse {`: This line defines a new class named `ApiResponse`.

// 2. `constructor(statusCode, data, message = "success") {`: This is the constructor method of the `ApiResponse` class. It's called when a new instance of `ApiResponse` is created. It takes three parameters: `statusCode`, `data`, and `message`, with `message` having a default value of "success".

// 3. `this.statusCode = statusCode`: This line assigns the `statusCode` parameter to the `statusCode` property of the `ApiResponse` instance. The `statusCode` represents the HTTP status code of the response.

// 4. `this.data = data`: This line assigns the `data` parameter to the `data` property of the `ApiResponse` instance. The `data` property holds the payload or content of the response, such as JSON data or HTML.

// 5. `this.message = message`: This line assigns the `message` parameter to the `message` property of the `ApiResponse` instance. The `message` property typically contains a brief description or status message related to the response.

// 6. `this.success = statusCode < 400`: This line calculates the `success` property based on the `statusCode`. If the `statusCode` is less than 400 (which typically signifies a successful HTTP response), `success` is set to `true`; otherwise, it's set to `false`. This property indicates whether the response is successful or not.

// In summary, the `ApiResponse` class is designed to represent HTTP responses. Its constructor allows for creating instances with specific status codes, data payloads, and messages. Additionally, it automatically determines the success status based on the provided status code.