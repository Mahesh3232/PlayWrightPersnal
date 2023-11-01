const {test,expect} = require('@playwright/test')

test('handling Iframe with playwright',async({page})=>{
    // await page.goto('https://www.webdriveruniversity.com/IFrame/index.html')
    // // const homeEle = await page.frameLocator('#frame').locator('[href="index.html"]')
    // // await expect(homeEle).toBeVisible()

    // const Iframe = await page.frame({url:"https://www.webdriveruniversity.com/Page-Object-Model/index.html"})
    // await expect(Iframe.locator('[href="index.html"]')).toBeVisible()
    // //await Iframe.locator([href="index.html"])

     await page.goto('https://letcode.in/frame')
    // const inputEle = await page.frameLocator('#firstFr').locator('[placeholder="Enter name"]')
    // await expect(inputEle).toBeVisible()
    // await inputEle.fill('Hello')
    // await page.waitForTimeout(4000)

    //  const Iframe = await page.frame({url:"https://letcode.in/frameUI"})
    // await expect(Iframe.locator('[placeholder="Enter name"]')).toBeVisible()
    // await Iframe.locator('[placeholder="Enter name"]').fill('Mahesh')
    // await page.waitForTimeout(4000)

    const Iframe = await page.frame('firstFr')
    await page.locator('[placeholder="Enter name"]').fill('Mahesh')
    // await expect(Iframe.locator('[placeholder="Enter name"]')).toBeVisible()
    // await Iframe.locator('[placeholder="Enter name"]').fill('Mahesh')
    await page.waitForTimeout(4000)
})