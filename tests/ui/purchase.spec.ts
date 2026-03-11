import { test, expect } from '../../fixtures/baseTest'
import { checkoutData } from '../../utils/testdata'

test('complete purchase flow', async ({

 inventoryPage,
 cartPage,
 checkoutPage,
 page

}) => {

 await page.goto('/')

 await inventoryPage.verifyInventoryPage()

 await inventoryPage.addBackpackToCart()

 await inventoryPage.openCart()

 await cartPage.clickCheckout()

 await checkoutPage.enterCheckoutDetails(
   checkoutData.customer.firstName,
   checkoutData.customer.lastName,
   checkoutData.customer.postalCode
 )

 await checkoutPage.continueCheckout()

 await checkoutPage.finishCheckout()

 await expect(page.locator('.complete-header'))
   .toHaveText('Thank you for your order!')

})