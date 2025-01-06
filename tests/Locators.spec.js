//const {test, expect} = require('@playwright/test')

import {test, expect} from '@playwright/test'

test('Locators', async ({page}) => {

  await page.goto("https://demoblaze.com/index.html")
  
  //click on login button - property
  //await page.locator('id=login2').click()
  await page.click('id=login2')

  // provide username - css
  //await page.locator('#loginusername').fill('"pavanol')
  //await page.type('#loginusername', 'pavanol')
  await page.fill('#loginusername', 'pavanol')


  //provide password - css
  await page.fill("input[id='loginpassword']", 'test@123')

  //Click on Login button - xpath
  await page.click("//button[normalize-space()='Log in']")

  //verify logout link presence - xpath
  const logoutlink = await page.locator("//a[@id='logout2']")

  await expect(logoutlink).toBeVisible();

  await page.close()
})