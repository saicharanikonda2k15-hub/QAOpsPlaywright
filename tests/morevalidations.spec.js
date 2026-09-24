const {test,expect} = require("@playwright/test");

//test.describe.configure({mode: 'parallel'});
test("@web popup validations" , async ({page})=>
{
await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

await expect(page.locator("#displayed-text")).toBeVisible();
await page.locator("#hide-textbox").click();
await expect(page.locator("#displayed-text")).toBeHidden();
//await page.pause();
await page.locator("#confirmbtn").click();

await page.on('dialog',dialog => dialog.accept());
await page.locator("#mousehover").hover();
const framesPage =  page.frameLocator("#courses-iframe");
await framesPage.locator("li a[href*='lifetime-access']:visible").click();
const textcheck = await framesPage.locator(".text h2").textContent();
console.log(textcheck.split(" ")[1]);


//await page.goto("https://google.com");
//await page.goBack();
//await page.goBack();


});


test("screenshot & Visual comparision" , async ({page})=>
{
await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

await expect(page.locator("#displayed-text")).toBeVisible();
await page.locator("#displayed-text").screenshot({path: 'partialscreenshot.png'});
await page.locator("#hide-textbox").click();
await page.screenshot({path: 'screenshot.png'});

await expect(page.locator("#displayed-text")).toBeHidden();
});


/*
test("visual testing" , async ({page})=>
{

    await page.goto("https://flightaware.com/");
    expect(await page.screenshot()).toMatchSnapshot('flightaware.png');

});
*/
