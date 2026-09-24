//const base = require('@playwright/test');
import {test as basetest} from '@playwright/test';
interface TestDataForOrder {
    username: string;
    password: string;
    productName: string;
};

export const customTest = basetest.extend<{testDataForOrder:TestDataForOrder}>
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