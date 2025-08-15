import xlsx from 'xlsx'

export class ExcelUtils{

    // filePath
    // sheetName

    static getExcelData(filePath, sheetName){
        try{
            const workbook = xlsx.readFile(filePath)
            const sheet = workbook.Sheets[sheetName]
            const data = xlsx.utils.sheet_to_json(sheet)
            return data
        }
        catch(error){
            console.log(error);
        }
    }

}

// Jenkins - Allure report
// Visual Testing

// Basic API
// Array - Table




