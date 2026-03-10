import { test, expect } from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'

test('valid login test', async ({ page }) => {

  const loginPage = new LoginPage(page)

  await loginPage.navigateToLoginPage()

  await loginPage.login(
    'standard_user',
    'secret_sauce'
  )

  await expect(page).toHaveURL(/inventory/)

})