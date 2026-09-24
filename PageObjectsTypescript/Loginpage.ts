import { expect, type Locator, type Page } from '@playwright/test';

export class Loginpage
{
page: Page;
SignInButton: Locator;
username: Locator;
password: Locator;

    constructor(page:any)
    {
this.page = page;
this.SignInButton = page.locator("#login");
this.username = page.locator("#userEmail");
this.password = page.locator("#userPassword");
    }

async goTo()
{
await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");

}


    async validLogin(username:string,password:string)
{
    
await this.username.fill(username);
await this.password.fill(password);
await this.SignInButton.click();

}

}
module.exports = {Loginpage};