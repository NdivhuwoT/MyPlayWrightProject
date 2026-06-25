import {test as base} from "@playwright/test";
import {LoginPage} from "../Pages/LoginPage";

type CustomerFixture = {
    loginPage: LoginPage;

}

export const test = base.extend<CustomerFixture>({
    loginPage: async ({page}, use) => {
        const loginPage = new LoginPage(page);
    },
});