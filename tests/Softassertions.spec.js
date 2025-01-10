const {test, expect} = require('@playwright/test')

test("Soft assertions", async ({page})=>{

  await page.goto("https://demoblaze.com/index.html")

//Hard assertions
/* await expect(page).toHaveTitle('STORE');
await expect(page).toHaveURL("https://demoblaze.com/index.html");
await expect(page.locator('.navbar-brand')).toBeVisible();
*/

//Soft assertions
//Using soft assertions, if 1 out of 3 assertions is set to fail, than the test wont be stopped due to it, and will continue to execute the rest of the test.

await expect.soft(page).toHaveTitle('STORE123');
await expect.soft(page).toHaveURL("https://demoblaze.com/index.html");
await expect.soft(page.locator('.navbar-brand')).toBeVisible();

})