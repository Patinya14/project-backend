const PdfPrinter = require('pdfmake');
const fs = require('fs');
let library = {};
let dialog = {};
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
                text: 'รายละเอียด: ข้อมูลสรุปความเจ็บป่วย', fontSize: 22, bold: true, margin: [0, 0, 0, 8]
            },
            { margin: [50, 5, 0, 0], fontSize: 16, text: 'วันที่ :' }, { margin: [150, -20, 0, 0], fontSize: 16, text: dialog.showDate(summary[0].date) },
            { margin: [50, 5, 0, 0], fontSize: 16, text: 'อาการโรค :' }, { margin: [150, -20, 0, 0], fontSize: 16, text: summary[0].disease.disName },
            { margin: [50, 5, 0, 0], fontSize: 16, text: 'หัตถการ :' }, { margin: [150, -20, 0, 0], fontSize: 16, text: summary[0].disease.disProcedure },
            // { margin: [50, 0, 0, 0], fontSize: 16, text: 'วิธีการรักษา : ' }, summary[0].treat[0].treatMents,
            { margin: [50, 5, 0, 0], fontSize: 16, text: 'ช่วงเวลาการรักษา :' }, { margin: [150, -20, 0, 0], fontSize: 16, text: summary[0].statusTime },
            // { margin: [50, 0, 0, 0], fontSize: 16, text: 'จ่ายยา :' }, summary[0].drug[0].drugName,
            { margin: [50, 5, 0, 0], fontSize: 16, text: 'ผู้รักษา :' }, { margin: [150, -20, 0, 0], fontSize: 16, text: summary[0].treater.trePhysicianName + ' ' + summary[0].treater.trePhysicianSurName },
            { margin: [50, 5, 0, 0], fontSize: 16, text: 'ผู้ตรวจ :' }, { margin: [150, -20, 0, 0], fontSize: 16, text: summary[0].officer.ficerName + ' ' + summary[0].officer.ficerSurName }
        ]
    };
    var pdfDoc = printer.createPdfKitDocument(documentPdf);
    pdfDoc.pipe(fs.createWriteStream('app/Summary/pdfs-summary/summaryDialog.pdf'));
    pdfDoc.end();
}
dialog.showDate = (date) => {
    let year = String(Number(String(date).substr(0, 4)) + 543);
    let month = String(date).substr(5, 2);
    let day = String(date).substr(8, 2);
    return day + '/' + month + '/' + year;
}
module.exports = library;