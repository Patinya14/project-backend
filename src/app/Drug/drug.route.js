const express = require('express') // create constant value for use express libary 
const router = express.Router() // create constant value for use Router by express libary
const service = require('./drug.service');

router.get('/medicine', (req, res) => {
    service.call().then((listMedicine) => {
        res.json(listMedicine);
    })
});

router.get('/medicine/:id', (req, res) => {
    service.find(req.params.id).then((medicine) => {
        res.json(medicine);
    })
});

router.post('/medicine', (req, res) => {
    service.create(req.body).then((medicine) => { // req.body is all-subject data at user new entered.  
        res.json(medicine) // response data with JSON.
    });
});
router.put('/medicine/:id', (req, res) => {
    service.update(req.body, req.params.id).then((medicine) => { // req.body is all-subject data at user edit. & req.params.id is ID in rows at user edit.
        res.send(medicine) // response data with JSON
    });
});
router.delete('/medicine/:id', (req, res) => {
    service.delete(req.params.id).then(() => {
        res.send("200") // response data with JSON
    });
});

module.exports = router