const { When, Then , Given , setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(100 * 1000);
const {POManager} = require('../../PageObjects/POManager');
const {expect} = require('@playwright/test');
const playwright = require('@playwright/test');

Given('a login to Ecommerce application with {string} and {string}', async function (username, password) {

  this.username = username

const products = this.page.locator('.card-body');
const loginpage = this.poManager.getLoginpage();
await loginpage.goTo();
await loginpage.validLogin(this.username, password);
await this.page.waitForLoadState('networkidle'); 
         });

       When('Add {string} to cart', async function (productName) {
          this.dashboardpage = this.poManager.getDashboardpage();
await this.dashboardpage.searchProductAddCart(productName);
await this.dashboardpage.NavigateToCart();
         });

         Then('verify {string} is displayed in cart', async function (productName) {
           
          const cartpage = this.poManager.getCartpage();
await cartpage.VerifyProductIsDisplayed(productName);
await cartpage.Checkout();
         });

         When('Enter valid details and place the order', async function () {
          const ordersReviewPage = this.poManager.getOrdersReviewPage();
await expect(this.page.locator(".user__name [type='text']").first()).toHaveText(this.username);
//credit card details
await this.page.locator(".payment__type").first().waitFor();
await this.dropdown.nth(0).selectOption('02');
await this.dropdown.nth(1).selectOption('23');
const input = this.page.locator("input[type='text']");
await input.nth(0).fill("344");
await input.nth(1).fill("123");
await input.nth(2).fill("Raviteja");

await ordersReviewPage.searchCountryAndSelect("ind","India");
this.orderId = await ordersReviewPage.SubmitAndGetOrderID();
console.log(this.orderId);
         });

         Then('verify order is present in order history', async function () {
          await this.dashboardpage.NavigateToOrders();
          const OrderHistorypage = this.poManager.getOrderHistoryPage();
          await OrderHistorypage.searchOrderAndSelect(this.orderId);
          expect(this.orderId.includes(await OrderHistorypage.getOrderId())).toBeTruthy();
         });


       Given('a login to Ecommerce2 application with {string} and {string}', async function (username, password) {
          
          const userName = this.page.locator("#username");
          const signIn = this.page.locator("#signInBtn");

          await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/ ");
          const title= await this.page.title();
          console.log(title);
          await userName.fill(username);
          await this.page.locator("#password").fill(password);
          await signIn.click();
         });
         
       
         Then('verify Error message displayed', async function () {
          console.log(await this.page.locator("[style*='block']").textContent());
          await expect(this.page.locator("[style*='block']")).toContainText("Incorrect");
         });  


         