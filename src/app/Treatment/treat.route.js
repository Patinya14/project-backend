const express = require('express') // create constant value for use express libary 
const router = express.Router() // create constant value for use Router by express libary
const service = require('./treat.service');

router.get('/treatment', (req, res) => {
    service.call().then((listTreatment) => {
        res.json(listTreatment);
    })
});
router.get('/treatment/:id', (req, res) => {
    service.find(req.params.id).then((treatment) => {
        res.json(treatment);
    })
});
router.post('/treatment', (req, res) => {
    service.create(req.body).then((treatment) => { // req.body is all-subject data at user new entered.  
        res.json(treatment) // response data with JSON.
    });
});
router.put('/treatment/:id', (req, res) => {
    service.update(req.body, req.params.id).then((treatment) => { // req.body is all-subject data at user edit. & req.params.id is ID in rows at user edit.
        res.send(treatment) // response data with JSON
    });
});
router.delete('/treatment/:id', (req, res) => {
    service.delete(req.params.id).then(() => {
        res.send("200")
    });
});

module.exports = router