import { test, expect } from '@playwright/test'

import { LoginPage } from '../../pages/LoginPage'
import { InventoryPage } from '../../pages/InventoryPage'
import { CartPage } from '../../pages/CartPage'
import { CheckoutPage } from '../../pages/CheckoutPage'

test('complete purchase flow', async ({ page }) => {

  const loginPage = new LoginPage(page)
  const inventoryPage = new InventoryPage(page)
  const cartPage = new CartPage(page)
  const checkoutPage = new CheckoutPage(page)

  await loginPage.navigateToLoginPage()

  await loginPage.login(
    'standard_user',
    'secret_sauce'
  )

  await inventoryPage.verifyInventoryPage()

  await inventoryPage.addBackpackToCart()

  await inventoryPage.openCart()

  await cartPage.clickCheckout()

  await checkoutPage.enterCheckoutDetails(
    'John',
    'Doe',
    '600001'
  )

  await checkoutPage.continueCheckout()

  await checkoutPage.finishCheckout()

  await expect(page.locator('.complete-header'))
    .toHaveText('Thank you for your order!')

})