const {test, expect} = require('@playwright/test')

test('Bootstrap dropdown', async ({page})=>{

  await page.goto('https://demoqa.com/checkbox')

  await page.locator("button[title='Expand all']").click();

  //1. Checked the total number of options
  //const options = await page.locator('.rct-icon.rct-icon-uncheck')
  //await expect(options).toHaveCount(17);

  //2.
  //const options = await page.$$('.rct-icon.rct-icon-uncheck')
  //await expect(options.length).toBe(17)

  const options = await page.$$('ul')
  for(let option of options)
  {
    const value=await option.textContent();
    //console.log("value is", value)
    if(value.includes('React') || value.includes('Notes'))
    {
      await option.click()
    }
  } 

  //deselect options

  /*const options=await page.$$('ul>li label')
  for(let option of options)
  {
    const value=await option.textContent();
    //console.log("value is",value)
    if(value.includes('React')|| value.includes('Notes'))
    {
      await option.click()
    }
  }*/

  await page.waitForTimeout(5000);
})