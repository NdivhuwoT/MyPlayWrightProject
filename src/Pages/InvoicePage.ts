import {BasePage} from "./BasePage";

export class InvoicePage extends BasePage {

    async clickCreateInvoiceButton(){

        const createInvoiceButton = this.page.getByRole('button', { name: "New Invoice" });
        await this.clickElement(createInvoiceButton);
    }

    async enterClientDetails(ClientName: string, ClientAddress: string){
        
        const invoiceClientNameInput = this.page.locator('input[placeholder="Type client name or email..."]');
        const invoiceAddressTextarea = this.page.locator('textarea[placeholder="Enter client address..."]');
        
        await this.enterText(invoiceClientNameInput, ClientName);
        await this.enterText(invoiceAddressTextarea, ClientAddress);
        
    }

    async addCourse(){

    const invoiceAddCourse = this.page.locator('button:has-text("Add Course")');

    for (let i = 0; i < 4; i++) {
            await this.clickElement(invoiceAddCourse);

        }

    }
}