import {Page, Locator, expect} from "@playwright/test";

export class BasePage {

    constructor(public page: Page) {
        this.page = page;
    }

    //Create common reusable methods for all pages here

    async goToURL(url: string) {
        await this.page.goto(url);
    }

    async clickElement(locator: Locator) {
        await locator.click();
    }

    async enterText(locator: Locator, text: string) {
        await locator.clear();
        await locator.fill(text);
    }
}
