const {test, expect} = require('@playwright/test')

test('Handle inputbox', async ({page})=>{

  await page.goto('https://demo.nopcommerce.com/register')

  //InputBox - first name field
  await expect(await page.locator('#FirstName')).toBeVisible();
  await expect(await page.locator('#FirstName')).toBeEmpty(); //- this will pass if the value is empty, if not, it will fail.
  await expect(await page.locator('#FirstName')).toBeEditable();
  await expect(await page.locator('#FirstName')).toBeEnabled();

  await page.locator('#FirstName').fill('John') 
//await page.fill('#FirstName', 'John');
  await page.waitForTimeout(5000); // pausing the code 5000ms = 5s

})