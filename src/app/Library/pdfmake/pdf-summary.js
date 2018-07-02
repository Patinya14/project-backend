const PdfPrinter = require('pdfmake');
const fs = require('fs');
let library = {};
let table = {}
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
        pageSize: 'A4',
        
        content: [
            { 
            
                table: {
                    body: table.createTable(summary)
                }
 
            }
        ]
    };
    
    var pdfDoc = printer.createPdfKitDocument(documentPdf);
    pdfDoc.pipe(fs.createWriteStream('app/Summary/pdfs-summary/basics.pdf'));
    pdfDoc.end();
}

table.createTable = (summary) => {
    var datatable = [];
    datatable.push([{ rowSpan: 3, margin: [0, 10, 0, 5], alignment: 'center', text: 'วันเดือนปี' }, { rowSpan: 3, margin: [0, 10, 0, 5], text: 'ลำดับ' }, { rowSpan: 3, margin: [0, 10, 0, 5], alignment: 'center', text: 'ชื่อ-สกุล' }, { rowSpan: 3, margin: [0, 10, 0, 5], text: 'เลขที่บัตร' }, { rowSpan: 3, margin: [0, 10, 0, 5], alignment: 'center', text: 'ประเภท' },
    { rowSpan: 3, alignment: 'center', margin: [0, 10, 0, 5], text: 'อาการ' }, { colSpan: 2, alignment: 'center', rowSpan: 2, text: 'บริการที่ใช้ แพทย์แผนไทย' }, '', { rowSpan: 3, margin: [0, 10, 0, 5], text: 'รวมเงิน(บาท)' }, { rowSpan: 3, alignment: 'center', margin: [0, 10, 0, 5], text: 'ผู้ตรวจ' }, { rowSpan: 3, alignment: 'center', margin: [0, 10, 0, 5], text: 'ผู้รักษา' }])
    datatable.push(['', '', '', '', '', '', '', '', '', '', ''])
    datatable.push(['', '', '', '', '', '', { alignment: 'center', text: 'วิธีรักษา' }, { alignment: 'center', text: 'จ่ายยา' }, '', '', ''])

    summary.forEach(sum => {
        var row = [];
        row.push(table.showDate(sum.date));
        row.push('');
        row.push(sum.personId.personNameTitle + sum.personId.personName + ' ' + sum.personId.personSurname);
        row.push(sum.personId.personId);
        row.push(sum.status);
        row.push(sum.disease.disName);
        let textTreat = '';
        sum.treatment.forEach(element => {
            textTreat += element.treat.treatMents + '\n'
        })
        row.push(textTreat)
        let textDrugs = '';
        sum.countDrugs.forEach(element => {
            textDrugs += element.drug.drugName + '(' + element.count + ')' + '\n'
        })
        row.push(textDrugs);
        row.push(sum.charge);
        row.push(sum.officer.ficerName + ' ' + sum.officer.ficerSurName);
        row.push(sum.treater.trePhysicianName + ' ' + sum.treater.trePhysicianSurName);
        datatable.push(row);
    });
    return datatable;
}

table.showDate = (date) => {
    let year = String(Number(String(date).substr(0, 4)) + 543);
    let month = String(date).substr(5, 2);
    let day = String(date).substr(8, 2);
    return day + '/' + month + '/' + year;
}
module.exports = library;