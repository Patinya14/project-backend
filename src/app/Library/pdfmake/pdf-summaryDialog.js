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

library.document = (summary, res) => {
    var printer = new PdfPrinter(font);
    var documentPdf = {
        pageOrientation: 'landscape',
        pageSize: 'A5',
        content: [
            {
                text: 'รายละเอียด: ข้อมูลสรุปความเจ็บป่วย', fontSize: 22, bold: true, margin: [0, 0, 0, 8]
            },
            { margin: [50, 5, 0, 0], fontSize: 16, text: 'วันที่ :' }, { margin: [150, -20, 0, 0], fontSize: 16, text: summary.date },
            { margin: [50, 5, 0, 0], fontSize: 16, text: 'อาการโรค :' }, { margin: [150, -20, 0, 0], fontSize: 16, text: summary.disease.disName },
            { margin: [50, 5, 0, 0], fontSize: 16, text: 'หัตถการ :' }, { margin: [150, -20, 0, 0], fontSize: 16, text: summary.disease.disProcedure },
            { margin: [50, 0, 0, 0], fontSize: 16, text: 'วิธีการรักษา : ' },{margin: [150, -20, 0, 0], fontSize: 16,text: dialog.printTreatment(summary.treatment)},
            { margin: [50, 5, 0, 0], fontSize: 16, text: 'ช่วงเวลาการรักษา :' }, { margin: [150, -20, 0, 0], fontSize: 16, text: summary.statusTime },
            { margin: [50, 5, 0, 0], fontSize: 16, text: 'ผู้รักษา :' }, { margin: [150, -20, 0, 0], fontSize: 16, text: summary.treater.trePhysicianName + ' ' + summary.treater.trePhysicianSurName },
            { margin: [50, 5, 0, 0], fontSize: 16, text: 'ผู้ตรวจ :' }, { margin: [150, -20, 0, 0], fontSize: 16, text: summary.officer.ficerName + ' ' + summary.officer.ficerSurName },
            { margin: [50, 0, 0, 0], fontSize: 16, text: 'จ่ายยา :' }, {margin: [150, -20, 0, 0], fontSize: 16,text:dialog.printDrug(summary.countDrugs)},
        ]
    };
    var pdfDoc = printer.createPdfKitDocument(documentPdf);
    pdfDoc.pipe(res);
    pdfDoc.end();
}

dialog.printTreatment = (treatment) => {
    let text = '';
    treatment.forEach(element => {
        if (element.treat.treatMents !== '' && element.treat.treatMents !== undefined) text += element.treat.treatMents + ' '
    });
    return text
}

dialog.printDrug = (countdrug) => {
    let text = '';
    countdrug.forEach(element => {
        if (element.drug.drugName !== '' && element.count !== null) text += element.drug.drugName + '(' + element.count + ') '
    });
    return text
}
module.exports = library;