class Loginpage
{
    constructor(page)
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


    async validLogin(username,password)
{
    
await this.username.fill(username);
await this.password.fill(password);
await this.SignInButton.click();

}

}
module.exports = {Loginpage};