const express = require('express') // create constant value for use express libary 
const router = express.Router() // create constant value for use Router by express libary
const service = require('./officer.service');

router.get('/officer', (req, res) => {
    service.call().then((listofficer) => {
        res.json(listofficer);
    })
});
router.get('/officer/:id', (req, res) => {
    service.find(req.params.id).then((officer) => {
        res.json(officer);
    })
});
router.post('/officer', (req, res) => {
    service.create(req.body).then((officer) => { // req.body is all-subject data at user new entered.  
        res.json(officer) // response data with JSON.
    });
});
router.put('/officer/:id', (req, res) => {
    service.update(req.body, req.params.id).then((officer) => { // req.body is all-subject data at user edit. & req.params.id is ID in rows at user edit.
        res.send(officer) // response data with JSON
    });
});
router.delete('/officer/:id', (req, res) => {
    service.delete(req.params.id).then(() => {
        res.send("200")
    });
});

module.exports = router