const base = require('@playwright/test');
const {APIUtils} = require('./APIUtils');
const {request} = require('@playwright/test');
const LoginPayLoad = {userEmail: "saicharani.konda2k15@gmail.com", userPassword: "Saicharani@123"};
const orderPayLoad = {orders: [{country: "India", productOrderedId: "6960ea76c941646b7a8b3dd5"}]};

exports.customtest = base.test.extend(
    {
authenticatedPage : async ({ browser }, use) => 
        {
 const context = await browser.newContext();
const page = await context.newPage();
const email = "saicharani.konda2k15@gmail.com";
await page.goto("https://rahulshettyacademy.com/client/#/auth/login ");
await page.locator("#userEmail").fill(email);
await page.locator("#userPassword").fill("Saicharani@123");
await page.locator("#login").click();
await page.waitForLoadState('networkidle');
await use(page);
//tear down --> this is a method where it will after use condition to close the context

await context.close();

    },

createOrder: async ({},use) => 
    {

        const apiContext = await request.newContext();
        const apiUtils= new APIUtils(apiContext,LoginPayLoad);
        const response = await apiUtils.createOrder(orderPayLoad);
        await use(response);
           await apiContext.dispose();
           

},

testDataForOrder: async ({},use) =>
    {
        await use({productName: 'ADIDAS ORGINAL'});

   

}
    }
);