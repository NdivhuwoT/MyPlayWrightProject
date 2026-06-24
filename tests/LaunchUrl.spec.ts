import {expect, test} from '@playwright/test';

test('Launch Ndosi Dev Url', async ({page}) => {
  await page.goto('https://ndosisimplifiedautomation.vercel.app');

  await expect(page).toHaveTitle('Ndosi Test Automation');
});

test('Verify The Login Button', async ({page}) => {
  await page.goto('*/');
  
  const loginButton = page.locator('button:text("Login")');

  await loginButton.isVisible();
});