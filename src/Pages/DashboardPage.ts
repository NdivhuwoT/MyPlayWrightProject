import { BasePage } from "./BasePage";


export class DashboardPage extends BasePage {

    async clickMenuButton(){
        const menuButton = this.page.locator('xpath=//span[normalize-space()="Menu"]');
        await this.clickElement(menuButton);
    }

    async clickAdminPanel(){
        const adminPanelButton = this.page.locator('button.nav-dropdown-item:has-text("Admin Panel")');
        await this.clickElement(adminPanelButton);
    }

    async clickInvoiceButton(){
        const invoiceButton = this.page.getByRole('button', { name: 'Invoices' });
        await this.clickElement(invoiceButton);
    }

}