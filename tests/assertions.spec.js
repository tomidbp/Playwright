const {test,expect} = require('@playwright/test')

test('AssertionsTest', async ({page})=>{

// open app url
await page.goto('https://demo.nopcommerce.com/register')

//1. expect(page).toHaveURL() Page has URL

await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

//2. expect(page).toHaveTitle() Page has title

await expect(page).toHaveTitle('nopCommerce demo store. Register')

//3. expect(locator).toBeVisible() Page is visible

const logoElement = await page.locator('.header-logo')
await expect(logoElement).toBeVisible()

//4. expect(locator).toBeEnabled() Control is enabled

const searchStoreBox = await page.locator('#small-searchterms')
await expect(searchStoreBox).toBeEnabled()

//5. expect(locator).toBeChecked() Radio/Checkbox is checked

//Radio button
const maleRadioButton = await page.locator('#gender-male')
await maleRadioButton.click() // select radio button
await expect(maleRadioButton).toBeChecked()

//Checkbox
const newsLetterCheckBox = await page.locator('#Newsletter')
await expect(newsLetterCheckBox).toBeChecked()

//6. expect(locator).toHaveAttribute() Element has attribute

const regButton = await page.locator('#register-button')
await expect(regButton).toHaveAttribute('type','submit')

//7. expect(locator).toHaveText() Element matches text

await expect(await page.locator('.page-title h1')).toHaveText('Register') // whatever text element contains, should be displayed in the second bracket

//8. expect(locator).toContainText() Element contains text

await expect(await page.locator('.page-title h1')).toContainText('Reg')
// in this partial part of the text can be added instead of the full

//9. expect(locator).toHaveValue(value) Input has value
// Will show if the input text in the locator is the same with the expected text

const emailInput = await page.locator('#Email')
await emailInput.fill('test@demo.com');
await expect(emailInput).toHaveValue('test@demo.com')

//10. expect(locator).toHaveCount() List of elements has given length
// Will select the number of months that are expected to be shown in the dropdown 

const options = await page.locator('select[name="DateOfBirthMonth"] option')
await expect(options).toHaveCount(13) 

})