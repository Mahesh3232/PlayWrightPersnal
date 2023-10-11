const {test,expect} = require('@playwright/test')
let page 
test.beforeEach(async({browser})=>{
    page= await browser.newPage()
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('[name="username"]').fill('Admin')
    await page.locator('[name="password"]').fill('admin123')
    await page.locator('[type="submit"]').click()
    //await console.log('I am from beforeach block')
})

test.afterEach(async()=>{
    await page.locator('.oxd-userdropdown-name').click()
    await page.locator('[href="/web/index.php/auth/logout"]').click()
    await page.waitForTimeout(10000)
})

test.beforeAll(async()=>{
    await console.log('I am from beforeall block')
})


test.afterAll(async()=>{
    await console.log('I am from afterall block')
})


test('Test Case one',async({})=>{
    await expect(page.locator('span[class="oxd-text oxd-text--span oxd-main-menu-item--name"]').first()).toBeVisible()
    await expect(page.locator('img[alt="client brand banner"]')).toBeVisible()
    await expect(page.locator('.oxd-topbar-header-breadcrumb-module')).toHaveText('Dashboard')  
})

test('Test Case two',async({})=>{
    await expect(page).toHaveTitle('OrangeHRM')
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    //await console.log('I am from Test two')
})
