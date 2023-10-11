const { test } = require('@playwright/test')
//static dropdown
test('Test Case one', async ({ page }) => {
    await page.goto('https://letcode.in/dropdowns')
    await page.locator('#fruits').selectOption('3')
    await page.locator('#superheros').selectOption('cm')
    await page.locator('#lang').selectOption('swift')
    await page.locator('#country').selectOption('India')
    await page.pause()
})

//dynyamic dropdown
test.only('Auto Suggest dropdown', async ({ page }) => {
    await page.goto('https://www.redbus.in/')
    await page.locator('#src').fill('Pune', { delay: 1000 })
    await page.waitForSelector('.placeHolderMainText')
    // await page.waitForTimeout(10000)
    const optionCount = await page.locator('.placeHolderMainText').count()
    //    let text = await page.locator('text[class="placeHolderMainText"]').allTextContents()
    //     console.log(text)
    for (let i = 0; i < optionCount; i++) {
        let text = await page.locator('text[class="placeHolderMainText"]').nth(i).textContent()
        if (text === 'Shivaji Nagar') {
            await page.locator('.placeHolderMainText').nth(i).click()
            break
        }
    }
    //await console.log(optionCount)
     //await page.pause()
})