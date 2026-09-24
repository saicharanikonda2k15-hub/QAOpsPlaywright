const Exceljs = require('exceljs');

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
writeExcelTest("Mango",350,{rowchange:0,columnchange: 2}, "C://Users//ravit//Downloads//ExcelDownloadtest.xlsx");
