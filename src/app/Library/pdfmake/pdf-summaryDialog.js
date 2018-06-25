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
                text:'รายละเอียด: ข้อมูลสรุปความเจ็บป่วย',fontSize: 22,bold:true,margin:[0,0,0,8]
            },{
                table: {
                    headerRows: 1,
                    body: [
                        [{margin:[50,0,0,0],fontSize: 16,text:'วันที่ :'}],
                        [{margin:[50,0,0,0],fontSize: 16,text:'อาการโรค :'}],
                        [{margin:[50,0,0,0],fontSize: 16,text:'หัตถการ :'}],
                        [{margin:[50,0,0,0],fontSize: 16,text:'วิธีการรักษา : '}],
                        [{margin:[50,0,0,0],fontSize: 16,text:'ช่วงเวลาการรักษา :'}],
                        [{margin:[50,0,0,0],fontSize: 16,text:'จ่ายยา :'}],
                        [{margin:[50,0,0,0],fontSize: 16,text:'ผู้รักษา :'}],
                        [{margin:[50,0,0,0],fontSize: 16,text:'ผู้ตรวจ :'}],
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