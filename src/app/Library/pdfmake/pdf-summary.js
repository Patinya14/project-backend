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
    datatable.push([{rowSpan: 3,margin: [0, 10, 0, 5],alignment: 'center',text:'วันเดือนปี'}, {rowSpan: 3,margin: [0, 10, 0, 5],text:'ลำดับ'}, {rowSpan: 3,margin: [0, 10, 0, 5],alignment: 'center',text:'ชื่อ-สกุล'}, {rowSpan: 3,margin: [0, 10, 0, 5],text:'เลขที่บัตร'}, {rowSpan: 3,margin: [0, 10, 0, 5],text:'ประเภท'},{rowSpan: 3,margin: [0, 10, 0, 5],text:'อาการ'},{colSpan: 5,alignment: 'center',rowSpan: 2,text:'บริการที่ใช้ แพทย์แผนไทย'},'','','','',{rowSpan: 3,margin: [0, 10, 0, 5],text:'รวมเงิน(บาท)'},{rowSpan: 3,margin: [0, 10, 0, 5],text:'ผู้ตรวจ'},{rowSpan: 3,margin: [0, 10, 0, 5],text:'ผู้รักษา'}])
    datatable.push(['','','','','','','','','','','','','',''])
    datatable.push(['','','','','','','นวด','ประคบสมุนไพร','จ่ายยาสมุนไพร','อบสมุนไพร','ทับหม้อ','','',''])
    summary.forEach(sum => {
        var row = [];
        row.push(sum.date);
        row.push('');
        row.push(sum.personId.personNameTitle + sum.personId.personName + ' ' + sum.personId.personSurname);
        row.push(sum.personId.personId);
        row.push('');
        row.push('');
        row.push('');
        row.push('');
        row.push('');
        row.push('');
        row.push('');
        row.push('');
        row.push('');
        row.push('');
        
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