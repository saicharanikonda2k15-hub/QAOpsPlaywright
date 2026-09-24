const {test,expect} = require ('@playwright/test');

test('@web Browser Context playwright test', async ({browser})=>
{

const context = await browser.newContext();
const Page = await context.newPage();
const userName = Page.locator("#username");
const signIn = Page.locator("#signInBtn");
const cardTitles = Page.locator(".card-body a");

await Page.goto("https://rahulshettyacademy.com/loginpagePractise/ ");
const title= await Page.title();
console.log(title);
//await expect(Page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
await userName.fill("rahulshetty");
await Page.locator("#password").fill("Learning@830$3mK2");
await signIn.click();
console.log(await Page.locator("[style*='block']").textContent());
await expect(Page.locator("[style*='block']")).toContainText("Incorrect");
await userName.fill("");
await userName.fill("rahulshettyacademy");
await signIn.click();
console.log(await cardTitles.first().textContent());
console.log(await cardTitles.nth(1).textContent());
const allCardTitles = await cardTitles.allTextContents();
console.log(allCardTitles);


});


test('UI Controls test', async ({ page })=>
{

const userName = page.locator("#username");
const password = page.locator("#password");
const signIn = page.locator("#signInBtn");
const dropdown = page.locator("select.form-control");
const documentlink = page.locator("[href*='documents-request']");
await page.goto("https://rahulshettyacademy.com/loginpagePractise/ ");
await userName.fill("rahulshetty");
await password.fill("Learning@830$3mK2");
await dropdown.selectOption("consult");
await page.locator(".checkmark").last().click();
await page.locator("#okayBtn").click();
expect(page.locator(".checkmark").last()).toBeChecked();
await page.locator("#terms").click();
expect(page.locator("#terms")).toBeChecked();
await page.locator("#terms").uncheck();
expect(await page.locator("#terms").isChecked()).toBeFalsy();
await expect(documentlink).toHaveAttribute("class","blinkingText");
await page.pause();

});

test('Child window handling', async ({ browser })=>
{

const context = await browser.newContext();
const page = await context.newPage();
 const userName = page.locator("#username");
await page.goto("https://rahulshettyacademy.com/loginpagePractise/ ");
const documentlink = page.locator("[href*='documents-request']");
const [newPage] = await Promise.all(
    [
        context.waitForEvent('page'),
        documentlink.click(),
    ])

const text = await newPage.locator(".red").textContent();
const arrayText = text.split("@");
const domain = arrayText[1].split(" ")[0];
console.log(domain);
await userName.fill(domain);
console.log(await userName.inputValue());
await page.pause();




});





test('Page playwright test', async ({ page })=>
{


await page.goto("https://google.com/"); 
const title1 = await page.title();
console.log(title1);
await expect(page).toHaveTitle("Google");


});
  