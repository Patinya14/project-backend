const express = require('express') // create constant value for use express libary 
const router = express.Router() // create constant value for use Router by express libary
const service = require('./personal.service');

router.get('/personal', (req, res) => {
    service.call().then((listPersonal) => {
        res.json(listPersonal);
    })
});
router.get('/personal/:id', (req, res) => {
    service.find(req.params.id).then((personal) => {
        res.json(personal);
    })
});
router.post('/personal', (req, res) => {
    service.create(req.body).then(() => { // req.body is all-subject data at user new entered.  
        res.json({}) // response data with JSON.
    });
});
router.put('/personal/:id', (req, res) => {
    service.update(req.body, req.params.id).then(() => { // req.body is all-subject data at user edit. & req.params.id is ID in rows at user edit.
        res.send({}) // response data with JSON
    });
});
router.delete('/personal/:id', (req, res) => {
    service.delete(req.params.id).then(() => {
        res.send("200")
    });
});

module.exports = router