const { test, expect } = require('@playwright/test')

test('Hnadling the datepicker', async ({ page }) => {
    await page.goto('https://www.webdriveruniversity.com/Datepicker/index.html')
    await page.locator('[class="form-control"]').click()
    const year = '2025'
    const month = 'May'
    const day = '12'
    while (true) {
        const yearMonth = await page.locator('[class="datepicker-switch"]').first().textContent()
        console.log(yearMonth)
        if (yearMonth == `${month} ${year}`) {
            break
        }
        await page.locator('[class="next"]').first().click()
    }
    const daysCount = await page.locator('[class="day"]').count()
    console.log(daysCount)
    for (let i = 0; i < daysCount; i++) {
        let text = await page.locator('[class="day"]').nth(i).textContent()
        if (text === day) {
            await page.locator('[class="day"]').nth(i).click()
            break
        }
    }
    //const dates = await page.$$('[class="day"]').textContent(day).click()
    // await page.goto('https://testautomationpractice.blogspot.com/')
    // await page.locator('#datepicker').fill('01-16-2023')
    await page.waitForTimeout(5000)
})