import{Loginpage} from './Loginpage';
import{Dashboardpage} from './Dashboardpage';
import{Cartpage} from './Cartpage';
import{OrderHistorypage} from './OrderHistorypage';
import{OrdersReviewpage} from './OrdersReviewpage';

import { expect, type Locator, type Page } from '@playwright/test';


export class POManager
{
    page: Page;
    loginpage: Loginpage;
    dashboardpage: Dashboardpage;
    cartpage: Cartpage;
    orderHistorypage: OrderHistorypage;
    ordersReviewpage: OrdersReviewpage;

    constructor(page:any)
    {
        this.page = page;
        this.loginpage = new Loginpage(page);
        this.dashboardpage = new Dashboardpage(page);
        this.cartpage = new Cartpage(page);
        this.orderHistorypage = new OrderHistorypage(page);
        this.ordersReviewpage = new OrdersReviewpage(page);
    }

    getLoginpage()
    {
        return this.loginpage;
    }

    getDashboardpage()
    {
        return this.dashboardpage;

    }

    getCartpage()
    {
        return this.cartpage;
    }

    getOrderHistoryPage()
    {
        return this.orderHistorypage;
    }
    getOrdersReviewPage()
    {
        return this.ordersReviewpage;
    }
}
//module.exports = {POManager};