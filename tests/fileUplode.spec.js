const {test,expect} = require('@playwright/test')

test.skip('Verify singal file uplode with playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/File-Upload/index.html?')
    await page.locator('#myFile').setInputFiles('tests/UplodeFile/FileUplode1.pdf')
    page.on('dialog', async simplealert =>{
        await expect(simplealert.message()).toContain('Your file has now been uploaded!')
        await expect(simplealert.type()).toContain('alert')
        await simplealert.accept()
    })
    await page.locator('#submit-button').click()
    await page.waitForTimeout(5000)
    await expect(page.url())
    .toContain('https://webdriveruniversity.com/File-Upload/index.html?filename=FileUplode1.pdf')
})


test('Verify multiple file uplode in playwright',async({page})=>{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    await page.locator('#filesToUpload')
    .setInputFiles(['tests/UplodeFile/FileUplode1.pdf','tests/UplodeFile/FileUplode2.pdf'])
    await expect(page.locator('#fileList > li').first()).toHaveText('FileUplode1.pdf')
    await expect(page.locator('#fileList > li').nth(1)).toHaveText('FileUplode2.pdf')
    await page.waitForTimeout(5000)
})