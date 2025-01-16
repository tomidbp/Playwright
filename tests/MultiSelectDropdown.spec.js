const {test, expect} = require('@playwright/test')

test("Handle Dropdowns", async ({page})=>{

  await page.goto('https://testautomationpractice.blogspot.com/');

  //Select multiple options from multi select dropdown
  //await page.selectOption('#colors', ['Blue','Red','Yellow'])

  //Assertions
  //1. Check number of options in dropdown
  //const options = await page.locator('#colors option')
  //await expect(options).toHaveCount(5);
  
  //2. Check number of options in dropw down using JS array
  //const options = await page.$$('#colors option')
  //console.log("Number of options:", options.length)
  //await expect(options.length).toBe(7);

  //3. Check presence of option in the dropdown
  const content = await page.locator('#colors').textContent();
  await expect(content.includes('Blue')).toBeTruthy();
  //await expect(content.includes('Black)).toBeFalsy; //-- since the list does not includes black, with the False attribute this will pass

  await page.waitForTimeout(5000);

})