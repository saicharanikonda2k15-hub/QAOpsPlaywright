import { expect, type Locator, type Page } from '@playwright/test';
let message1:string = "hiii";
console.log(message1);
let age1 : number = 20;
 console.log(age1);
let isActive:boolean = false;
let numberarray : number[] = [2,3,4];
let data:any = "this could be anything";
data = 45;

function add(a:number,b: number): number
{

    return a+b;
}
add(3,4);

let user:{name:string , age: number , location:string}= {name : "sai",age : 34,location: "Hyderabad"};

/*
class Cartpage
{
    page: Page;
    cartproducts: Locator

    constructor(page:any)
    {
        this.page = page;
        this.cart = page.locator("[routerlink*='cart']");
         this.orders = page.locator("button[routerlink*='myorders']");
        this.cartproducts = page.locator("div li").first();
        this.productstext = page.locator(".card-body b");
                  this.checkout = page.locator("text = Checkout");
    
        
    }
                  */