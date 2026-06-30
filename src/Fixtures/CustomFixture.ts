import {test as base} from "@playwright/test";
import {LoginPage} from "../Pages/LoginPage";
import { DashboardPage } from "../Pages/DashboardPage";


type CustomerFixture = {
    loginPage: LoginPage;
    dashboardPage: DashboardPage;

}

export const test = base.extend<CustomerFixture>({
    loginPage: async ({page}, use) => {
        await use(new LoginPage(page));
    },

    dashboardPage: async ({page}, use) => {
        await use(new DashboardPage(page));
    }
});