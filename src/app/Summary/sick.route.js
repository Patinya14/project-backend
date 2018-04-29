const express = require('express') // create constant value for use express libary 
const router = express.Router() // create constant value for use Router by express libary
const service = require('./sick.service');

router.get('/summary', (req, res) => {
    service.call().then((listSummary) => {
        res.json(listSummary);
    })
});
router.get('/summary/:id', (req, res) => {
    service.find(req.params.id).then((summary) => {
        res.json(summary);
    })
});
router.post('/summary', (req, res) => {
    service.create(req.body).then((summary) => { // req.body is all-subject data at user new entered.  
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