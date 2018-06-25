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

library.document = (certificate) => {
    var printer = new PdfPrinter(font);
    var documentPdf = {
        pageSize: 'A5',
        content: [

            { image: 'app/Library/pdfmake/fonts/482457_10200601494981789_1825578775_n.jpg', alignment: 'center', width: 60, height: 60, },
            { alignment: 'center', fontSize: 20, text: 'ใบรับรองแพทย์' },
            { alignment: 'right', fontSize: 15, text: 'ศูนย์บริการการแพทย์แผนไทยและการแพทย์ทางเลือก' },
            { alignment: 'right', fontSize: 15, text: 'คณะการแพทย์แผนไทยอภัยภูเบศร' },
            { alignment: 'right', fontSize: 15, text: 'มหาวิทยาลัยบูรพา จังหวัดชลบุรี 20131' },
            { margin: 10, text: '' },
            { fontSize: 15, text: 'ข้าพเจ้า' },
            { fontSize: 15, text: 'ใบอนุญาตประกอบโรคศิลปะสาขาการแพทย์แผนไทยประยุกต์เลขที่' },
            { fontSize: 15, text: 'ได้ทำการตรวจร่างกาย' },
            { fontSize: 15, text: 'ที่อยู่ปัจจุบัน' },
            { fontSize: 15, text: 'เมื่อวันที่' },
            { fontSize: 15, text: 'ได้พิจารณาเห็นแล้วว่า ...................................................................................................' },
            '..........................................................................................................................................................................',
            { fontSize: 15, text: 'มีอาการ/โรค ซึ่งเป็นผู้มีข้อบ่งชี้' },
            { fontSize: 15, text: 'ซึ่งเป็นผู้มีข้อบ่งชี้' },
            { fontSize: 15, text: 'ทางการแพทย์ว่าจำเป็นต้องรักษาฟื้นฟูสภาพโดยวิธีทางการแพทย์แผนไทย' },
            { margin: 10, text: '' },
            { alignment: 'right', fontSize: 15, text: 'ลงชื่อ.................................................ผู้ตรวจ' },
            { alignment: 'right', fontSize: 15, text: '(                                                )' },
            { margin: [215, 0, 0, 15], fontSize: 15, text: 'แพทย์แผนไทยประยุกต์' }, 
            'หมายเหตุ : ใบรับรองแพทย์นี้จะสมบูรณ์เมื่อมีตราประทับของศูนย์บริการการแพทย์แผนไทยและ',
            { margin: [40, 0, 0, 0], text: 'การแพทย์ทางเลือกคณะการแพทย์แผนไทยอภัยภูเบศร มหาวิทยาลัยบูรพา จังหวัดชลบุรี' }, 
            { margin: [40, 0, 0, 0], text: 'และลงนามลายมือชื่อเจ้าหน้าที่ที่ได้รับมอบหมายกำกับตรา' }
        ]
    };
    var pdfDoc = printer.createPdfKitDocument(documentPdf);
    pdfDoc.pipe(fs.createWriteStream('app/Certificate/pdfs-certificate/certificate.pdf'));
    pdfDoc.end();
}

module.exports = library;