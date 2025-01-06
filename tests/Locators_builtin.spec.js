/*
page.getByAltText() - to locate an element, usually image, by its text alternative.
page.getByPlaceholder() - to locate an input by placeholder.
page.getByRole() - to locate by explicit and implicit accessibility attributes.
page.getByText() - to locate by text content.

page.getByLabel() - to locate a form control by associated label text.
page.getByTitle() - to locate an element by its title attribute.
page.getByTestId() - to locate an element based on its data-testid attribute
 */

const {test, expect} = require('@playwright/test')

test('Locators-builtin', async({page})=>{

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//page.getByAltText() - to locate an element, usually image, by its text alternative. - used alt tag from elements
const logo = await page.getByAltText('company-branding')
await expect(logo).toBeVisible();

//page.getByPlaceholder() - to locate an input by placeholder. 
await page.getByPlaceholder('Username').fill('Admin')
await page.getByPlaceholder('Password').fill('admin123')

//page.getByRole() - to locate by explicit and implicit accessibility attributes. (whenever there is a button tag, link or anchor tag)
await page.getByRole('button', {type: 'submit'}).click()

//page.getByText() - to locate by text content.
await expect(await page.getByText('Dragan Petrovski')).toBeVisible()

//used with xpath
//const name = await page.locator('//span[@class="oxd-userdropdown-tab"]').textContent()

//await expect(await page.getByText(name)).toBeVisible()

})