const express = require('express') // create constant value for use express libary 
const router = express.Router() // create constant value for use Router by express libary
const cer = require('../Library/pdfmake/pdf-certificate');
const service = require('./certificate.service');
var path = require('path');

router.get('/certificate', (req, res) => {
    service.call().then((listCertificate) => {
        res.json(listCertificate);
    })
});
router.get('/certificate/:id', (req, res) => {
    service.find(req.params.id).then((certificate) => {
        res.json(certificate);
    })
});
router.get('/certificate/getpdf/:id', (req, res) => {
    let pdfCer = __dirname +'/pdf-certificate/' + req.params.id + '.pdf';
    res.setHeader("Content-Type","application/pdf");
    res.sendFile(pdfCer)
        
    });

router.post('/certificate/createpdf',  (req, res) => {
    service.call().then(async(certificate) => {
        let pdf = [];
        await cer.document(pdf , res);
        
    });
});
router.post('/certificate', (req, res) => {
    service.create(req.body).then((certificate) => {
        res.json(certificate) // response data with JSON.
    });
});
router.put('/certificate/:id', (req, res) => {
    service.update(req.body, req.params.id).then((certificate) => { // req.body is all-subject data at user edit. & req.params.id is ID in rows at user edit.
        res.send(certificate) // response data with JSON
    });
});
router.delete('/certificate/:id', (req, res) => {
    service.delete(req.params.id).then(() => {
        res.send("200")
    });
});

module.exports = router