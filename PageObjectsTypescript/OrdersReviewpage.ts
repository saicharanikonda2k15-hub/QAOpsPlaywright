const {expect} = require("@playwright/test");
import {type Locator, type Page } from '@playwright/test';

export class OrdersReviewpage
{
    page: Page;
    country: Locator;
    dropdown: Locator;
    emailId: Locator;
    submit: Locator;
    orderConfirmationText: Locator;
    orderId: Locator;

   constructor(page:any)
    {
        this.page = page;
        this.country = page.locator("[placeholder*='Country']");
        this.dropdown = page.locator(".ta-results");
        this.emailId = page.locator(".user__name [type='text']").first();
        this.submit = page.locator(".action__submit");
        this.orderConfirmationText = page.locator(".hero-primary");
        this.orderId = page.locator(".em-spacer-1 .ng-star-inserted");
       
    }

    async searchCountryAndSelect(countryCode:any,countryName:string)
    {
        await this.country.pressSequentially(countryCode, { delay: 150 });
        await this.dropdown.waitFor();
        const optionscount = await this.dropdown.locator("button").count();
        for(let i =0; i< optionscount; ++i)
        {
            const text:any = await this.dropdown.locator("button").nth(i).textContent();
            if(text.trim() === countryName)
            {
                await this.dropdown.locator("button").nth(i).click();
                break;
            }
        }
         
    }
    async SubmitAndGetOrderID()
    {
        await this.submit.click();
        await expect(this.orderConfirmationText).toContainText("Thankyou for the order. ",{ timeout: 10000 });
        return await this.orderId.textContent();
    }
}

module.exports = {OrdersReviewpage};

