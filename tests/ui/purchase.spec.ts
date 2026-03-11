import { test, expect } from '../../fixtures/baseTest'
import { users } from '../../utils/testdata'

test('complete purchase flow', async ({

 loginPage,
 inventoryPage,
 cartPage,
 checkoutPage,
 page

}) => {

 await loginPage.navigateToLoginPage()

 await loginPage.login(
   users.standardUser.username,
   users.standardUser.password
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