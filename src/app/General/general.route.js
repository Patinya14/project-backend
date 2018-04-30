const express = require('express') // create constant value for use express libary 
const router = express.Router() // create constant value for use Router by express libary
const service = require('./general.service');

router.get('/general', (req, res) => {
    service.call().then((listGeneral) => {
        res.json(listGeneral);
    })
});
router.get('/general/:id', (req, res) => {
    service.find(req.params.id).then((general) => {

        res.json(general);
    })
});
router.post('/general', (req, res) => {
    service.create(req.body).then((general) => { // req.body is all-subject data at user new entered.  
        res.json(general) // response data with JSON.
    });
});
router.put('/general/:id', (req, res) => {
    service.update(req.body, req.params.id).then((general) => { // req.body is all-subject data at user edit. & req.params.id is ID in rows at user edit.
        res.send(general) // response data with JSON
    });
});
router.delete('/general/:id', (req, res) => {
    service.delete(req.params.id).then(() => {
        res.send("200")
    });
});

module.exports = router