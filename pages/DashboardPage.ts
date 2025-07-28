export class DashboardPage{

    private page
    private products
    addToCartSuccessMsg
    private viewBtn
    private addToCartBtn

    // 1. Identify the parent element which consists of all the details of the product
    // 2. Iterate through all the products and get the text value of the product.
    // 3. Compare the text value with the product that you are trying to search
    // 4. If the product name is matching if(textValue == productName){ click on the addToCartButton}
    // 5. If it is not matching in the step-4 then move to the next product and follow the same steps from #3



    constructor(page) {
        this.page = page
        this.products = this.page.locator("div.card-body")
        this.addToCartSuccessMsg = this.page.locator("#toast-container") 
    }

    async searchProductAndAddToCart(productName){
        await this.products.nth(0).waitFor()
        // count()
        const countOfProduct = await this.products.count() // 3 [0,1,2]
        for(let i=0; i<countOfProduct ; i++){
            const textValue = await this.products.nth(i).locator("b").textContent()

            if(textValue === productName){
                await this.products.nth(i).locator("button").last().click()
                break
            }
        }
    }






}
