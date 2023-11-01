const { test, expect } = require('@playwright/test')

test('handling keyboard actions with playwright', async ({ page }) => {
    await page.goto('https://gotranscript.com/text-compare')
    await page.keyboard.down('PageDown')
    await page.locator('[name="text1"]').fill('I am learning Playwright')
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')
    await page.keyboard.down('Tab')
    await page.keyboard.press('Control+V')
    await page.waitForTimeout(4000)
})