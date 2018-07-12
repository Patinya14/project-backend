const pdfMake = require('pdfmake');
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

library.document = async (summary, filename) => {
    var printer = new pdfMake(font);
    var documentPdf = {
        pageOrientation: 'landscape',
        pageSize: 'A4',
        content: [

            {
                table: {
                    headerRows: 2,
                    widths: ['auto', 120, 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
                    body: table.createTable(summary)
                }
 
            }
        ],
        defaultStyle: {
            fontSize: 14,
            alignment: 'center'
        }
    };

    var pdfDoc = printer.createPdfKitDocument(documentPdf)
    pdfDoc.pipe(fs.createWriteStream('app/Summary/pdf-summary/' + filename + '.pdf'));
    return pdfDoc.end();
}

table.createTable = (summary) => {
    var datatable = [];

    datatable.push([
        { text: 'วันเดือนปี', rowSpan: 2 }, { text: 'ชื่อ-สกุล', rowSpan: 2 }, { text: 'เลขที่บัตร', rowSpan: 2 },
        { text: 'ประเภท', rowSpan: 2 }, { text: 'อาการ', rowSpan: 2 }, { text: 'บริการที่ใช้ แพทย์แผนไทย', rowSpan: 1, colSpan: 2 }, '',
        { text: 'รวมเงิน(บาท)', rowSpan: 2 }, { text: 'ผู้ตรวจ', rowSpan: 2 }, { text: 'ผู้รักษา', rowSpan: 2 }])
    datatable.push(['', '', '', '', '', { text: 'วิธีรักษา' }, { text: 'จ่ายยา' }, '', '', ''])
    summary.forEach(sum => {
        var row = [];
        row.push(table.showDate(sum.date));
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