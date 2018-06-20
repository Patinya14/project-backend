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
    var datatable = [];
    datatable.push(['วันเดือนปี', 'ลำดับ', 'ชื่อ-สกุล', 'เลขที่บัตร', 'ประเภท', 'ชื่อโรค'])
    summary.forEach(sum => {
        var row = [];
        row.push(sum.date);
        row.push('');
        row.push(sum.personId.personNameTitle + sum.personId.personName + ' ' + sum.personId.personSurname);
        row.push(sum.personId.personId);
        row.push('');
        row.push(sum.disease.disName);
        datatable.push(row);
    });

    var documentPdf = {
        pageOrientation: 'landscape',
        pageSize: 'A4',
        content: [
            {
                table: {
                    body: datatable
               }
           }
        ]
    };
    var pdfDoc = printer.createPdfKitDocument(documentPdf);
    pdfDoc.pipe(fs.createWriteStream('app/Summary/pdfs-summary/basics.pdf'));
    pdfDoc.end();
}

module.exports = library;