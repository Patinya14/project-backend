const express = require('express') // create constant value for use express libary 
const router = express.Router() // create constant value for use Router by express libary
const lib = require('../Library/pdfmake/pdf-summary');
const dia = require('../Library/pdfmake/pdf-summaryDialog');
const service = require('./summary.service');
router.get('/summary', (req, res) => {
    service.call().then((summary) => {  
        res.json(summary) // response data with JSON.
    });
});
router.get('/summary/:id', (req, res) => {
    service.find(req.params.id).then((summary) => {   
        res.json(summary) // response data with JSON.
    });
});
router.get('/summary/getpdf/:id', (req, res) => {
    service.call().then((summary) => {
        lib.document(summary);
        dia.document(summary);
        res.json({})
        
    });
});
router.post('/summary', (req, res) => {
    service.create(req.body).then((summary) => {   
        res.json(summary) // response data with JSON.
    });
});
router.put('/summary/:id', (req, res) => {
    service.update(req.body, req.params.id).then((summary) => { // req.body is all-subject data at user edit. & req.params.id is ID in rows at user edit.
        res.send(summary) // response data with JSON
    });
});
router.delete('/summary/:id', (req, res) => {
    service.delete(req.params.id).then(() => {
        res.send("200")
    });
});

module.exports = router