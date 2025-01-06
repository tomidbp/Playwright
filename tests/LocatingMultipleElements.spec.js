const {test, expect} = require('@playwright/test');

test ('LocateMultipleElements', async ({page})=>{

  await page.goto("https://demoblaze.com/index.html")

  /*const links = await page.$$('a');

  for(const link of links)
  {
    const linktext = await link.textContent();
    console.log(linktext);
  }*/

page.waitForSelector("//div[@id='tbodyid']//div//h4/a");

  const products = await page.$$("//div[@id='tbodyid']//div//h4/a")

  for (const product of products) {
      const prodName = await product.textContent();
      console.log(prodName);
    }
})