import { Page } from '@playwright/test';

export class InventoryPage {

  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  inventoryContainer = '#inventory_container'
  addBackpackButton = '#add-to-cart-sauce-labs-backpack'
  cartIcon = '.shopping_cart_link'

  async verifyInventoryPage() {
    await this.page.waitForSelector(this.inventoryContainer)
  }

  async addBackpackToCart() {
    await this.page.click(this.addBackpackButton)
  }

  async openCart() {
    await this.page.click(this.cartIcon)
  }

}