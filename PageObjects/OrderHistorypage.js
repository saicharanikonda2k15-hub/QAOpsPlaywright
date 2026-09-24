class OrderHistorypage
{

    constructor(page)
    {
        this.page = page;
        this.ordersTable = page.locator("tbody");
        this.rows = page.locator("tbody tr");
        this.orderIdDetails = page.locator(".col-text");
    }
    async searchOrderAndSelect(orderId)
    {
        await this.ordersTable.waitFor();
        //await this.page.waitForURL(/myorders/);
        //console.log("Current Orders URL:", this.page.url());
         //await this.rows.first().waitFor({ state: "visible" });
        //await this.ordersTable.waitFor();
        const  rowCount = await this.rows.count();
        for (let i =0; i< rowCount; i++)
{
    const row = this.rows.nth(i);
  const roworderid = await row.locator("th").first().textContent();
  console.log("Created order ID: " + orderId);
  console.log("Table Order ID:", roworderid);

  if(orderId.includes(roworderid.trim()))
  {
    await row.locator("button").first().click();
                break;
  }
}
    }

    async getOrderId()
    {
        return await this.orderIdDetails.textContent();
    }

}
module.exports = {OrderHistorypage};
