const {test, expect} = require('@playwright/test');
const { stat } = require('fs');

test("Handle dropdowns", async ({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/');

  //Multiple ways to select an option from the dropdown

  //await page.locator("#country").selectOption({label:'India'}); //label/visible text
  //await page.locator("#country").selectOption('India'); //visible text
  //await page.selectOption("#country", 'India'); // by text
  //await page.locator("#country").selectOption({value:'uk'}); //value my differ from the text, ex. value is uk while the text is United kingdom
  //await page.locator("#country").selectOption({index:1}); // numbering starts from 0 from the top of the list

//Assertions
//1.1 Check number of options in Dropdown - Approach 1

//const options = await page.locator('#country option') // - all the options will be written in the "options" variable
//await expect(options).toHaveCount(10);

//1.2 Check number of options in dropdown - Approach 2

//const options = await page.$$('#country option') // $$ = array
//console.log("Number of options:", options.length)
//await expect(options.length).toBe(10);

//2.1 Check presence of value in the dropdown - Approach 1

//Check that one option is present in the dropdown or not
//const content = await page.locator('#country').textContent()
//await expect(content.includes('India')).toBeTruthy();

//2.2 Check presence of value in the dropdown - Approach 2 - looping
  //If selector tag is not available, looping can be used

const options = await page.$$('#country option')
let status=false;

for(const option of options)
{
  //console.log(await option.textContent()) //will list the countries from dropdown
  let value = await option.textContent();
  if(value.includes('France'))
  {
    status = true; // as soon the country is found, will mark the status true and than will break the loop.
    break;
  }
}
expect(status).toBeTruthy();


//3. Select option from dropdown using looping
/*
const options= await page.$$('#country option')
for(const option of options)
{
  let value = await option.textContent();
  if(value.includes('France'))
  {
    await page.selectOption("#country", value);
    break;
  }
}
*/
  await page.waitForTimeout(5000);

})