const{Loginpage} = require('./Loginpage');
const{Dashboardpage} = require('./Dashboardpage');
const{Cartpage} = require('./Cartpage');
const{OrderHistorypage} = require('./OrderHistorypage');
const{OrdersReviewpage} = require('./OrdersReviewpage');


class POManager
{
    constructor(page)
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
module.exports = {POManager};