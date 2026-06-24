import {test, expect} from '@playwright/test';

test('Login To Ndosi Website', async ({page}) => {
    await page.goto('*/');

    const loginButton = page.locator('button:text("Login")');

    await loginButton.click();
    const emailInput = page.locator('input[name="email"]');
    const passwordInput = page.locator('input[name="password"]');
    const submitButton = page.locator('button[type="submit"]');
});