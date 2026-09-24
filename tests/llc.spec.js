const {test,expect} = require('@playwright/test');

test("playwright special", async ({page})=>
{
await page.goto("https://rahulshettyacademy.com/angularpractice/");
await page.getByLabel("Check me out if you Love IceCreams!").click();
await page.getByLabel("Employed").check();
await page.getByLabel("Gender").selectOption("Female");
await page.getByPlaceholder("Password").fill("saicharani");
await page.getByRole("button", {name: 'Submit'}).click();
console.log(await page.getByText("Success! The Form has been submitted successfully!.").isVisible());
//await expect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible({timeout: 10_000});

await page.getByRole("link" , {name: 'Shop'}).click();
await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();

await page.pause();

});


test("Timeout testing", async ({page})=>
{
//test level timeout
test.setTimeout(60000);

 //testcase level timeout for assertions
 const slowExpect = expect.configure({timeout: 9000});   
 
await page.goto("https://rahulshettyacademy.com/angularpractice/");
await page.getByLabel("Check me out if you Love IceCreams!").click();
await page.getByLabel("Employed").check();
await page.getByLabel("Gender").selectOption("Female");
await page.getByPlaceholder("Password").fill("saicharani");
await page.getByRole("button", {name: 'Submit'}).click();
//console.log(await page.getByText("Success! The Form has been submitted successfully!.").isVisible());

// steplevel timeout for assertions
await slowExpect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible({timeout: 10_000});
await page.getByRole("link" , {name: 'Shop'}).click();
await slowExpect(page.locator(".my-4").first()).toHaveText("Shop Name");
await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();

await page.pause();

});

