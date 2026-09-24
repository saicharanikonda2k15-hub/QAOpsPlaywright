const Exceljs = require('exceljs');
const {test,expect} = require("@playwright/test");

async function writeExcelTest(searchtext,replacetext,change,filepath)
{
    let output = {row: -1, column: 1};
    const workbook = new Exceljs.Workbook();
    await workbook.xlsx.readFile(filepath);
    const worksheet = workbook.getWorksheet("Sheet1");
    await readExcel(worksheet,searchtext);
    const cell = worksheet.getCell(output.row,output.column+change.columnchange);
    cell.value = replacetext;
    await workbook.xlsx.writeFile(filepath);
    
    async function readExcel(worksheet,searchtext)
    {
        
        worksheet.eachRow((row, rowNumber) => 
            {
row.eachCell((cell,colnumber) =>
{
    if (cell.value === searchtext)
    {
        output.row = rowNumber;
        output.column = colnumber;
    }
})
    })


}
}
//update mango price to 350 (for this scenario we are adding another parameter as below)
//writeExcelTest("Mango",350,{rowchange:0,columnchange: 2}, "C://Users//ravit//Downloads//ExcelDownloadtest.xlsx");
test("upload download validation" , async({page}) =>
{

    const textsearch = "Mango";
    const Updatedvalue = "350";
    
    await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html");
     const downloadpromise = page.waitForEvent("download");
    await page.getByRole("button", {name : "Download"}).click();
    await downloadpromise;

    writeExcelTest(textsearch, Updatedvalue, {rowchange:0,columnchange: 2}, "C://Users//ravit//Downloads//download (1).xlsx");
    await page.locator("#fileinput").click();
    await page.locator("#fileinput").setInputFiles("C://Users//ravit//Downloads//download (1).xlsx");
    const textloactor = page.getByText(textsearch);
    const desiredrow = await page.getByRole('row').filter({has:textloactor});
    await expect(desiredrow.locator("#cell-4-undefined")).toContainText(Updatedvalue);
    
    await page.pause();


});