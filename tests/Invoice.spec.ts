import {expect} from '@playwright/test';
import { test } from '../src/Fixtures/CustomFixture';
import { loginTestData } from '../src/Data/TestData';


test('Create Invoice', async ({loginPage, dashboardPage}) => {
    
    await loginPage.openURL();
    await loginPage.clickLoginButton();
    await loginPage.enterUsername(loginTestData.email);
    await loginPage.enterPassword(loginTestData.password);
    await loginPage.clickSubmitButton();
    await dashboardPage.clickMenuButton();
    await dashboardPage.clickAdminPanel();
    await dashboardPage.clickInvoiceButton();
});