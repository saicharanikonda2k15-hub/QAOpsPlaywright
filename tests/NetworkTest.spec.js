const {test,expect,request} = require('@playwright/test');
const {APIUtils} = require('../Utilis/APIUtils');
const LoginPayLoad = {userEmail: "saicharani.konda2k15@gmail.com", userPassword: "Saicharani@123"};
const orderPayLoad = {orders: [{country: "India", productOrderedId: "6960ea76c941646b7a8b3dd5"}]};
const fakepayLoadOrders = {message:"No Product in Cart"};

let response;
test.beforeAll(async()=>
{
const apiContext = await request.newContext();
const apiUtils= new APIUtils(apiContext,LoginPayLoad);
response = await apiUtils.createOrder(orderPayLoad);
console.log("API Response:", response);
   })


test("API place the order", async ({page})=>
{
//const orderID = createOrder(orderPayLoad);
await page.addInitScript(value =>
{
window.localStorage.setItem('token' , value)
}, response.token);
await page.goto("https://rahulshettyacademy.com/client/ ");
await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
    async route =>{
        const response = await page.request.fetch(route.request());
        let body = JSON.stringify(fakepayLoadOrders);
        route.fulfill(
            {
                response,
                body,

            });
        
    });



//my orders
await page.locator("button[routerlink*='myorders']").click();
await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");
console.log(await page.locator(".mt-4").textContent());

});



