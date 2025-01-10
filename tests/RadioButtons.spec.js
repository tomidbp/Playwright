const {test, expect} = require('@playwright/test')

test('Handle radio button', async ({page})=>{

  await page.goto('https://demo.nopcommerce.com/register')

  //Radio Button
  await page.locator("//input[@id='gender-male']").check(); //male
  //await page.check("//input[@id='gender-male']"); //simplified
  await expect(await page.locator("//input[@id='gender-male']")).toBeChecked();
  await expect(await page.locator("//input[@id='gender-male']").isChecked()).toBeTruthy();

  await expect(await page.locator("//input[@id='gender-female']").isChecked()).toBeFalsy(); //female not selected

  await page.waitForTimeout(5000); // pausing the code,  5000ms = 5s

})