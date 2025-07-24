// Locators and methods related to this page

import { Locator, Page } from "playwright"

export class LoginPage{

    // Locators - Properties

    private page :Page
    private username :Locator
    private password :Locator
    private loginButton :Locator
    errorMessage :Locator

    // constructor - to initialize the locators as soon as you create an object for this class

    constructor(page){
        this.page= page
        this.username = this.page.getByPlaceholder("email@example.com")
        this.password = this.page.getByPlaceholder("enter your passsword")
        this.loginButton = this.page.locator("#login")
        this.errorMessage = this.page.locator("#toast-container")
    }

    async launchURL(url: string){
        await this.page.goto(url)
    }

    async enterUsername(username : string) :Promise<void>{
        await this.username.fill(username)
    }
   

    // methods - 

}