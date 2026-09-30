const {test,expect} = require('@playwright/test');

test("Assignment test", async ({page})=>
{

const productName  = 'ZARA COAT 3';
const products = page.locator('.card-body');
const dropdown = page.locator("select.input");
const email = "saicharani.konda2k15@gmail.com";
await page.goto("https://rahulshettyacademy.com/client/#/auth/login ");
await page.locator("#userEmail").fill(email);
await page.locator("#userPassword").fill("Saicharani@123");
await page.locator("#login").click();
await page.waitForLoadState('networkidle'); 
//if waitforloadstate is not working then use below code
//waitFor and WaitForLoadState will work same here this point should add in github also 
await page.locator(".card-body b").first().waitFor();
const titles = await page.locator(".card-body b").allTextContents();
console.log(titles);
 const count = await products.count();
 for (let i=0; i<count; ++i)
 {
if(await products.nth(i).locator("b").textContent()==productName)

{

await products.nth(i).locator("text =  Add To Cart").click();
break;
 }

 }
await page.locator("[routerlink*='cart']").click();
await page.locator("div li").first().waitFor();
const boolean = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
expect(boolean).toBeTruthy();

await page.locator("text=Checkout").click();

//credit card details
await page.locator(".payment__type").first().waitFor();
await dropdown.nth(0).selectOption('02');
await dropdown.nth(1).selectOption('23');
const inputs = page.locator("input[type='text']");
await inputs.nth(0).fill("344");
await inputs.nth(1).fill("123");
await inputs.nth(2).fill("Raviteja");

//countrydetails
await page.locator("[placeholder*=Country]").pressSequentially("ind",{delay:150});
const dropdown1 = await page.locator(".ta-results");
await dropdown1.waitFor();
const optionscount = await dropdown1.locator("button").count();
for(let i=0; i<optionscount; ++i)
{
    const text = await dropdown1.locator("button").nth(i).textContent();
    if(text === " India")
    {
        await dropdown1.locator("button").nth(i).click();
        break;
    }
}
await expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
await page.locator(".action__submit").click();

//confirmation page
await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
console.log(orderId);

//my orders
await page.locator("button[routerlink*='myorders']").click();
await page.locator("tbody").waitFor();
const rows = await page.locator("tbody tr");
for(let i=0; i<await rows.count(); ++i)
{
    const rowsorderId = await rows.nth(i).locator("th").textContent();
    if(orderId.includes(rowsorderId))
    {
await rows.nth(i).locator("button:has-text('View')").first().click();
break;
    }
}

//orderdeatils page
const orderIdDetails = await page.locator(".col-text").textContent();
expect(orderId.includes(orderIdDetails)).toBeTruthy();
await page.pause();

});

