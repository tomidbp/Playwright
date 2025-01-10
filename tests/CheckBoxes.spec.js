const {test, expect} = require('@playwright/test')

test("Handle checkboxes", async ({page})=>{

  await page.goto("https://deformdemo.pylonsproject.org/checkboxchoice2/")

  //Single Checkbox
  //await page.check("#deformField1-0");
  await page.locator("#deformField1-0").check();

  expect(await page.locator("#deformField1-0")).toBeChecked();
  expect(await page.locator("#deformField1-0").isChecked()).toBeTruthy();
  expect(await page.locator("#deformField1-2").isChecked()).toBeFalsy(); // 3rd checkbox from the page, not checked 

  //Multiple Checkboxes
  const checkboxLocators=[
      "#deformField1-0",
      "#deformField1-1",
      "#deformField1-2"
    ]; //The 3 checkboxes added into one and marking them into const

  for(const locator of checkboxLocators)  
  {
    await page.locator(locator).check();
  } // using the const name of the 3 checkboxes and setting the await and marking them as checked. 

  for(const locator of checkboxLocators) 
  {
    if(await page.locator(locator).isChecked()) // before unchecking the checkboxes, we are verifying that the boxes where checked. If this condition is true, the boxes where marked checked, than will proceed to the next command line to uncheck. 
    {
    await page.locator(locator).uncheck();
    }  
  } //unselecting multiple checkboxes which are already checked. 

  await page.waitForTimeout(5000);

})