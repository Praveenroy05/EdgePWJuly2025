// API - Application Programming Interface

// FrontEnd - JS/TS, Angular, reach, ajax
// BackEnd - Java/Python/Go/php
// Database - SQL, MySQL

/*
GET:
Used to request data from a specified resource.

POST:
Used to send data to the server to create a new resource or submit data for processing, such as form submissions or file uploads. 

PUT:
Used to replace all current representations of the target resource with the uploaded content. If the resource does not exist, PUT can create it.

DELETE:
Used to remove a specified resource from the server. 


*/



// Request Format:

// URL - Unifrom Resourse Locator - https://reqres.in/api/users/2
// Method - GET, POST, PUT, DELETE
// Headers - Key-value pair - {api-key: "sjdhjk"}
// Body - JSON/XML, form data - {"username": "value"}



// Response Format

// Status code - 200, 201, 404, 500 
// Headers - Key-value pair
// Response body - 
/*
{
    "data": {
        "id": 2,
        "email": "janet.weaver@reqres.in",
        "first_name": "Janet",
        "last_name": "Weaver",
        "avatar": "https://reqres.in/img/faces/2-image.jpg"
    },
    "support": {
        "url": "https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral",
        "text": "Tired of writing endless social media content? Let Content Caddy generate it for you."
    }
}
    */