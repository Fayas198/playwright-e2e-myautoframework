import { test as setup } from '@playwright/test'

setup('authenticate user', async ({ page }) => {

  await page.goto('/')

  await page.fill('#user-name','standard_user')

  await page.fill('#password','secret_sauce')

  await page.click('#login-button')

  await page.waitForURL('**/inventory.html')

  await page.context().storageState({
    path: 'auth/storageState.json'
  })

})