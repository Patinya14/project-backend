const express = require('express') // create constant value for use express libary 
const router = express.Router() // create constant value for use Router by express libary
const service = require('./personal.service');
const controll = {};

router.get('/personal', (req, res) => {
    service.call().then((listPersonal) => {
        res.json(listPersonal);
    })
});

router.get('/personal/generate', (req, res) => {
    service.generate().then(person => {
        let year = person.substring(0, 2);
        let number = '0000' + String(Number(person.substring(3, 7))+1);
        number = number.substring(number.length-4, number.length);
        res.json(year + '-' + number);
    })
});

router.get('/personal/:id', (req, res) => {
    service.find(req.params.id).then((personal) => {
        res.json(personal);
    })
});

router.post('/personal', (req, res) => {
    service.create(req.body).then((personal) => { // req.body is all-subject data at user new entered.  
        res.json(personal) // response data with JSON.
    });
});

router.put('/personal/:id', (req, res) => {
    service.update(req.body, req.params.id).then((personal) => { // req.body is all-subject data at user edit. & req.params.id is ID in rows at user edit.
        res.send(personal) // response data with JSON
    });
});
router.delete('/personal/:id', (req, res) => {
    service.delete(req.params.id).then(() => {
        res.send("200") // response data with JSON
    });
});



module.exports = router