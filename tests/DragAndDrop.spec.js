const { test,expect } = require('@playwright/test')

test('Test Case one', async ({ page }) => {
   await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
   const dragable = await page.locator('#box6')
   const dropable = await page.locator('#box106')
    await dragable.dragTo(dropable)
    await expect(page.locator('#box6'))
    .toHaveAttribute('style','visibility: visible; background-color: rgb(0, 255, 0);')
   //await page.locator('#box6').dragTo(await page.locator('#box106'))
   await page.waitForTimeout(5000)
})


test('Test Case one', async ({ page }) => {
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    await page.locator('#box6').hover()
    await page.mouse.down()
    await page.locator('#box106').hover()
    await page.mouse.up()
    //await page.locator('#box6').dragTo(await page.locator('#box106'))
    await page.waitForTimeout(5000)
 })
