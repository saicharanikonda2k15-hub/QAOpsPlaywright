const base = require('@playwright/test');

exports.customtest = base.test.extend
(
    {
        testDataForOrder :
        {
    username : "saicharani.konda2k15@gmail.com",
    password : "Saicharani@123",
    productName : "ZARA COAT 3"
        }
    }
)