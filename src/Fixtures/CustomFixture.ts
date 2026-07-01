import {test as base} from "@playwright/test";
import {LoginPage} from "../Pages/LoginPage";
import { DashboardPage } from "../Pages/DashboardPage";
import { InvoicePage } from "../Pages/InvoicePage";


type CustomerFixture = {
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    invoicePage: InvoicePage;

}

export const test = base.extend<CustomerFixture>({
    loginPage: async ({page}, use) => {
        await use(new LoginPage(page));
    },

    dashboardPage: async ({page}, use) => {
        await use(new DashboardPage(page));
    },

    invoicePage: async ({page}, use) => {
        await use(new InvoicePage(page));
    }
});