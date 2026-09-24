class APIUtils
{
    constructor(apiContext,LoginPayLoad)
    {
        this.apiContext = apiContext;
        this.LoginPayLoad = LoginPayLoad;
    }

async getToken()
{

    const loginResonse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
    {data: this.LoginPayLoad});
    //expect(loginResonse.ok).toBeTruthy();
    const loginResponseJson = await loginResonse.json();
    const token = loginResponseJson.token;
    console.log(token);
    return token;

}
async createOrder(orderPayLoad)
{

    let response = {};
    response.token = await this.getToken();
    const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
    {data: orderPayLoad,
        headers: {
            'Authorization' : response.token,
            'content-type' : 'application/json'
    
        }
    })
    const orderResponseJson = await orderResponse.json();
    console.log(orderResponseJson);
   const  orderId = orderResponseJson.orders[0];
   response.orderId = orderId;

    return response;

}

}
module.exports = {APIUtils};
