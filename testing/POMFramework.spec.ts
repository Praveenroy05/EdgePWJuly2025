

function login(){
    // fill the username
    // fill the password
    // click on login button
}

// Duplication - 300 - 100, 195- lines of code
// Maintenance - 100- all the test cases - 99 steps for maintanence

// Framework - It is design princiaple - Set of guidlines , There will be less duplication, less maintenance and resuability 

// 1. Rsuablility
// 2. Less Duplication
// 3. Less Maintenance
// 4. Oragnise the code  - separation of all the logic - create of a class layer, test layer, data layer, reporting layer etc 

// POM - Page Object Model

// Page object model is a design pattern used in the software testing to represent a web page an as object. It is way to organise and manage the interaction with a web page by creating the properties (variables) and methods(actions)  of that particular page.


// THis approach promotes resuability, reduces the code duplicaiton as same page object will be used across multiple test cases, it also allows for easier update to the test cases.


// POM from scratch

// There are differe layers that we have to create.

// 1. PAGE LAYER - Will create a package or folder (pages) - // Locators and methods related to this page.
// LoginPage.ts , DashboardPage.ts, CartPage.ts, ....

// 2. TEST LAYER -  Pure test cases and assertions (tests - folder). Call those methods to access it inside the test layer.
// LoginPageTest.spec.ts

// 3. DATA LAYER - {TestData) Storage of data related to test cases. JSON/Excel. TestData.json or TestData.xlsx

// 4. REPORTING LAYER - HTML/Allure
// 5. UTIL LAYER - Common utilisable function - Getting the data from excel, screenshot(), scrollDown(), API method, Initialisation of Log file etc, integrate with email/slack

// Class -
// Hooks - 

