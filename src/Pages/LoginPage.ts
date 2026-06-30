import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {

    async openURL() {
        await this.goToURL('/')
    }

    async clickLoginButton() {
        const loginButton = this.page.locator('xpath=//span[normalize-space()="Login"]');
        await this.clickElement(loginButton);
    }

    async enterUsername(username: string) {
        const usernameField = this.page.locator('input[id="login-email"]');
        await this.enterText(usernameField, username);
    }

    async enterPassword(password: string) {
        const passwordField = this.page.locator('input[id="login-password"]');
        await this.enterText(passwordField, password);
    }

    async clickSubmitButton() {
        const submitButton = this.page.locator('button[name="loginSubmit"]');
        await this.clickElement(submitButton);
    }
}