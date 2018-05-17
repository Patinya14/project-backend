const express = require('express') // create constant value for use express libary 
const router = express.Router() // create constant value for use Router by express libary
const service = require('./disease.service');

router.get('/disease', (req, res) => {
    service.call().then((listDisease) => {
        res.json(listDisease);
    })
});
router.get('/disease/:id', (req, res) => {
    service.find(req.params.id).then((disease) => {
        res.json(disease);
    })
});
router.post('/disease', (req, res) => {
    service.create(req.body).then((disease) => { // req.body is all-subject data at user new entered.  
        res.json(disease) // response data with JSON.
    });
});
router.put('/disease/:id', (req, res) => {
    service.update(req.body, req.params.id).then((disease) => { // req.body is all-subject data at user edit. & req.params.id is ID in rows at user edit.
        res.send(disease) // response data with JSON
    });
});
router.delete('/disease/:id', (req, res) => {
    service.delete(req.params.id).then(() => {
        res.send("200")
    });
});

module.exports = router