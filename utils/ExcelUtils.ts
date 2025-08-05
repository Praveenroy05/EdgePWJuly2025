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

// Array - Inheritence
// GitHub
// Jenkins

// Basic API
// Visual Testing



