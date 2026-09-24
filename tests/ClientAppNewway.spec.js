const {test,expect} = require('@playwright/test');

test("Assignment test", async ({page})=>
{

const productName  = 'ZARA COAT 3';
const products = page.locator('.card-body');
const dropdown = page.locator("select.input");
const email = "saicharani.konda2k15@gmail.com";
await page.goto("https://rahulshettyacademy.com/client/#/auth/login ");
await page.getByPlaceholder("email@example.com").fill(email);
await page.getByPlaceholder("enter your passsword").fill("Saicharani@123");
await page.getByRole("button", {name: "Login"}).click();
await page.waitForLoadState('networkidle'); 
//if waitforloadstate is not working then use below code
await page.locator(".card-body b").first().waitFor();
await page.locator(".card-body").filter({hasText :"ZARA COAT 3"}).getByRole("button" , {name: " Add To Cart"}).click();
await page.getByRole("listitem").getByRole("button",{name: "  Cart" }).click();
await page.locator("div li").first().waitFor();
await expect(page.getByText("ZARA COAT 3")).toBeVisible();
await page.getByRole("button",{name: "Checkout"}).click();
//credit card details
await page.locator(".payment__type").first().waitFor();
await dropdown.nth(0).selectOption('02');
await dropdown.nth(1).selectOption('23');
const inputs = page.locator("input[type='text']");
await inputs.nth(0).fill("344");
await inputs.nth(1).fill("123");
await inputs.nth(2).fill("Raviteja");

//countrydetails
await page.getByPlaceholder("Select Country").pressSequentially("ind",{delay:150});
await page.getByRole("button",{name: "India"}).nth(1).click();
await expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
await page.getByText("Place Order ").click();

//confirmation page
await expect(page.getByText(" Thankyou for the order. ")).toBeVisible();
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

