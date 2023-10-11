const {test,expect} = require('@playwright/test')

test('Handling the simple alert',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.on('dialog', async simplealert =>{
        await expect(simplealert.message()).toContain('I am a JS Alert')
        await expect(simplealert.type()).toContain('alert')
        await simplealert.accept()
    })
    await page.locator('button[onclick="jsAlert()"]').click()
    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert')
    page.waitForTimeout(5000)
})

test('Handling the confirm alert',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.on('dialog', async confirmAlert =>{
        await expect(confirmAlert.message()).toContain('I am a JS Confirm')
        await expect(confirmAlert.type()).toContain('confirm')
        //await confirmAlert.accept()
        await confirmAlert.dismiss()
    })
    await page.locator('button[onclick="jsConfirm()"]').click()
    //await expect(page.locator('#result')).toHaveText('You clicked: Ok')
    await expect(page.locator('#result')).toHaveText('You clicked: Cancel')
    page.waitForTimeout(5000)
})

test.only('Handling the Prompt alert',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.on('dialog', async promptAlert =>{
        await expect(promptAlert.message()).toContain('I am a JS prompt')
        await expect(promptAlert.type()).toContain('prompt')
        //await promptAlert.accept('Mahesh')
        await promptAlert.dismiss()
    })
    await page.locator('button[onclick="jsPrompt()"]').click()
    //await expect(page.locator('#result')).toHaveText('You entered: Mahesh')
    await expect(page.locator('#result')).toHaveText('You entered: null')
    page.waitForTimeout(5000)
})

