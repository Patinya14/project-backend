const PdfPrinter = require('pdfmake');
const fs = require('fs');
let library = {};
var font = {
    Roboto: {
        normal: 'app/Library/pdfmake/fonts/THSarabunNew.ttf',
        bold: 'app/Library/pdfmake/fonts/THSarabunNew Bold.ttf',
        italics: 'app/Library/pdfmake/fonts/THSarabunNew Italic.ttf',
        bolditalics: 'app/Library/pdfmake/fonts/THSarabunNew BoldItalic.ttf'
    }
};

library.document = (summary) => {
    var printer = new PdfPrinter(font);
    var documentPdf = {
        pageOrientation: 'landscape',
        pageSize: 'A5',
        content: [
            {
            // columns: [
                //     {fontSize: 16,text:'รายละเอียด: ข้อมูลสรุปความเจ็บป่วย \nอาการโรค: \nหัตถการ: \nวิธีการรักษา \nช่วงเวลาการรักษา: \nจ่ายยา:'},
                //     {fontSize: 16,text:'sfgsgs'}
                    
                   
                // ]
            
                text:'รายละเอียด: ข้อมูลสรุปความเจ็บป่วย',fontSize: 22,bold:true,margin:[0,0,0,8]
            },{
                table: {
                    headerRows: 1,
                    body: [
                        [{fontSize: 16,text:'วันที่:'},{fontSize: 18,text:''}],
                        [{fontSize: 16,text:'อาการโรค:'},{fontSize: 18,text:''}],
                        [{fontSize: 16,text:'หัตถการ:'},{fontSize: 18,text:'aaa'}],
                        [{fontSize: 16,text:'วิธีการรักษา '},{fontSize: 18,text:'aaa'}],
                        [{fontSize: 16,text:'ช่วงเวลาการรักษา:'},{fontSize: 18,text:'aa'}],
                        [{fontSize: 16,text:'จ่ายยา:'},{fontSize: 18,text:'aaa'}],
                    ]
                },
                layout: 'noBorders'
            }
        ]
    };
    var pdfDoc = printer.createPdfKitDocument(documentPdf);
    pdfDoc.pipe(fs.createWriteStream('app/Summary/pdfs-summary/summaryDialog.pdf'));
    pdfDoc.end();
}

module.exports = library;