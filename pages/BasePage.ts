import { Page } from "playwright"

class BasePage{

    page: Page

    constructor(page){
        this.page = page
    }

 clickOnElement(element){
    this.page.click(element)
    
 }

}