const { expect } = require('@playwright/test');

class Cartpage
{
    constructor(page)
    {
        this.page = page;
        this.cart = page.locator("[routerlink*='cart']");
         this.orders = page.locator("button[routerlink*='myorders']");
        this.cartproducts = page.locator("div li").first();
        this.productstext = page.locator(".card-body b");
                  this.checkout = page.locator("text = Checkout");
    
        
    }

    async VerifyProductIsDisplayed(productName)
    {
        /*
    const product = this.getProductLocator(productName);
    await product.waitFor({ state: 'visible' });
    await expect(product).toBeVisible();
    */
    
        await this.cartproducts.waitFor();
        const bool = await this.getProductLocator(productName).isVisible();
        expect(bool).toBeTruthy();
        
        
    }
    async Checkout()
    {
        await this.checkout.click();

    }
    getProductLocator(productName)
    {
        return this.page.locator("h3:has-text('"+productName+"')");
    }
}
module.exports = {Cartpage};
