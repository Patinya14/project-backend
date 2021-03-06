const pdfMake = require('pdfmake');
const fs = require('fs');
let library = {};
let cer = {}
var font = {
    Roboto: {
        normal: 'app/Library/pdfmake/fonts/THSarabunNew.ttf',
        bold: 'app/Library/pdfmake/fonts/THSarabunNew Bold.ttf',
        italics: 'app/Library/pdfmake/fonts/THSarabunNew Italic.ttf',
        bolditalics: 'app/Library/pdfmake/fonts/THSarabunNew BoldItalic.ttf'
    }
};

library.document = async (certificate, res) => {
    var printer = new pdfMake(font);
    var documentPdf = {
        pageSize: 'A5',
        content: [

            { image: 'app/Library/pdfmake/fonts/pic.png', alignment: 'center', width: 60, height: 60, },
            { alignment: 'center', fontSize: 20, text: 'ใบรับรองแพทย์' },
            { alignment: 'right', fontSize: 15, text: 'ศูนย์บริการการแพทย์แผนไทยและการแพทย์ทางเลือก' },
            { alignment: 'right', fontSize: 15, text: 'คณะการแพทย์แผนไทยอภัยภูเบศร' },
            { alignment: 'right', fontSize: 15, text: 'มหาวิทยาลัยบูรพา จังหวัดชลบุรี 20131' },
            { margin: 10, text: '' },
            { fontSize: 15, text: 'ข้าพเจ้า' }, { margin: [40, -20, 0, 0], fontSize: 15, text: certificate.treater.treNameTitle + certificate.treater.trePhysicianName + ' ' + certificate.treater.trePhysicianSurName },
            { fontSize: 15, text: 'ใบอนุญาตประกอบโรคศิลปะสาขาการแพทย์แผนไทยประยุกต์เลขที่' }, { margin: [270, -19, 0, 0], fontSize: 15, text: certificate.treater.treLicensed_No },
            { fontSize: 15, text: 'ได้ทำการตรวจร่างกาย' }, { margin: [100, -19, 0, 0], fontSize: 15, text: certificate.personal.personNameTitle + certificate.personal.personName + ' ' + certificate.personal.personSurname },
            { fontSize: 15, text: 'ที่อยู่ปัจจุบัน' }, { margin: [60, -19, 0, 0], fontSize: 15, text: certificate.personal.personAddress },
            { fontSize: 15, text: 'เมื่อวันที่' }, { margin: [50, -19, 0, 0], fontSize: 15, text: cer.showDate(certificate.date) },
            { fontSize: 15, text: 'ได้พิจารณาเห็นแล้วว่า' }, { margin: [100, -19, 0, 0], fontSize: 15, text: certificate.personal.personNameTitle + certificate.personal.personName + ' ' + certificate.personal.personSurname },
            { fontSize: 15, text: 'มีอาการ/โรค' }, { margin: [60, -20, 0, 0], fontSize: 15, text: certificate.cerSymptom },
            { fontSize: 15, text: 'ซึ่งเป็นผู้มีข้อบ่งชี้ทางการแพทย์ว่าจำเป็นต้องรักษาฟื้นฟูสภาพ' },
            { fontSize: 15, text: 'โดยวิธี ......................................................................................................................' },
            '..................................................................................................................................................................',
            '..................................................................................................................................................................',
            { margin: 10, text: '' },
            { alignment: 'right', fontSize: 15, text: 'ลงชื่อ.................................................ผู้ตรวจ' },
            { alignment: 'right', fontSize: 15, text: '(                                                )' }, { margin: [208, -20, 0, 0], fontSize: 15, text: certificate.treater.treNameTitle + certificate.treater.trePhysicianName + ' ' + certificate.treater.trePhysicianSurName },
            { margin: [215, 0, 0, 15], fontSize: 15, text: 'แพทย์แผนไทยประยุกต์' },
            'หมายเหตุ : ใบรับรองแพทย์นี้จะสมบูรณ์เมื่อมีตราประทับของศูนย์บริการการแพทย์แผนไทยและ',
            { margin: [40, 0, 0, 0], text: 'การแพทย์ทางเลือกคณะการแพทย์แผนไทยอภัยภูเบศร มหาวิทยาลัยบูรพา จังหวัดชลบุรี' },
            { margin: [40, 0, 0, 0], text: 'และลงนามลายมือชื่อเจ้าหน้าที่ที่ได้รับมอบหมายกำกับตรา' }
        ]
    };
    var pdfDoc = printer.createPdfKitDocument(documentPdf);
    pdfDoc.pipe(res);
    pdfDoc.end();
}
cer.showDate = (date) => {
    let year = String(Number(String(date).substr(0, 4)) + 543);
    let month = String(date).substr(5, 2);
    let day = String(date).substr(8, 2);
    return day + '/' + month + '/' + year;
}

module.exports = library;