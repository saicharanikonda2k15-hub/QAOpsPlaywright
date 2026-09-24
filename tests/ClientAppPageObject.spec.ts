import {test,expect} from '@playwright/test';

import{customTest} from '../UtilisTypescript/test-base';
import{POManager} from '../PageObjectsTypescript/POManager';
import dataset from '../Utilis/placeorderTestData.json';
import { type Locator, type Page } from '@playwright/test';

for(const data of dataset)
{

test(`Assignment test for ${data.productName}`, async ({page})=>
{
const poManager = new POManager(page);

const products = page.locator('.card-body');
const dropdown = page.locator("select.input");

const loginpage = poManager.getLoginpage();
await loginpage.goTo();
await loginpage.validLogin(data.username, data.password);
await page.waitForLoadState('networkidle'); 

const dashboardpage = poManager.getDashboardpage();
await dashboardpage.searchProductAddCart(data.productName);
await dashboardpage.NavigateToCart();

const cartpage = poManager.getCartpage();
await cartpage.VerifyProductIsDisplayed(data.productName);
await cartpage.Checkout();

const ordersReviewPage = poManager.getOrdersReviewPage();
await expect(page.locator(".user__name [type='text']").first()).toHaveText(data.username);
//credit card details
await page.locator(".payment__type").first().waitFor();
await dropdown.nth(0).selectOption('02');
await dropdown.nth(1).selectOption('23');
const input = page.locator("input[type='text']");
await input.nth(0).fill("344");
await input.nth(1).fill("123");
await input.nth(2).fill("Raviteja");

await ordersReviewPage.searchCountryAndSelect("ind","India");
const orderId:any = await ordersReviewPage.SubmitAndGetOrderID();
console.log(orderId);
await dashboardpage.NavigateToOrders();


const OrderHistorypage = poManager.getOrderHistoryPage();
await OrderHistorypage.searchOrderAndSelect(orderId);
expect(orderId.includes(await OrderHistorypage.getOrderId())).toBeTruthy();


});
}

customTest(`fixture testing`, async ({page,testDataForOrder})=>
{
const poManager = new POManager(page);

const products = page.locator('.card-body');
const dropdown = page.locator("select.input");

const loginpage = poManager.getLoginpage();
await loginpage.goTo();
await loginpage.validLogin(testDataForOrder.username, testDataForOrder.password);
await page.waitForLoadState('networkidle'); 

const dashboardpage = poManager.getDashboardpage();
await dashboardpage.searchProductAddCart(testDataForOrder.productName);
await dashboardpage.NavigateToCart();

const cartpage = poManager.getCartpage();
await cartpage.VerifyProductIsDisplayed(testDataForOrder.productName);
await cartpage.Checkout();


});


