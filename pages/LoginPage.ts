import { Page } from '@playwright/test';

export class LoginPage {

  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  username = '#user-name'
  password = '#password'
  loginButton = '#login-button'
  errorMessage = '[data-test="error"]'

  async navigateToLoginPage() {
    await this.page.goto('/')
  }

  async enterUsername(user: string) {
    await this.page.fill(this.username, user)
  }

  async enterPassword(pass: string) {
    await this.page.fill(this.password, pass)
  }

  async clickLogin() {
    await this.page.click(this.loginButton)
  }

  async login(user: string, pass: string) {
    await this.enterUsername(user)
    await this.enterPassword(pass)
    await this.clickLogin()
  }

}