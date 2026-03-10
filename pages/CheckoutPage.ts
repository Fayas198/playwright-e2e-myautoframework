import { Page } from '@playwright/test';

export class CheckoutPage {

  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  firstName = '#first-name'
  lastName = '#last-name'
  postalCode = '#postal-code'
  continueButton = '#continue'
  finishButton = '#finish'
  successMessage = '.complete-header'

  async enterCheckoutDetails(first: string, last: string, zip: string) {

    await this.page.fill(this.firstName, first)
    await this.page.fill(this.lastName, last)
    await this.page.fill(this.postalCode, zip)

  }

  async continueCheckout() {
    await this.page.click(this.continueButton)
  }

  async finishCheckout() {
    await this.page.click(this.finishButton)
  }

}