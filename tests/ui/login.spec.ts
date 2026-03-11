import { test, expect } from '../../fixtures/baseTest'
import { users } from '../../utils/testdata'

test.use({ storageState: { cookies: [], origins: [] } })

test('valid login test', async ({ loginPage, page }) => {

  await loginPage.navigateToLoginPage()

  await loginPage.login(
    users.standardUser.username,
    users.standardUser.password
  )

  await expect(page).toHaveURL(/inventory/)

})