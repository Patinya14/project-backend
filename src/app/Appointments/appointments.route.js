const express = require('express') // create constant value for use express libary 
const router = express.Router() // create constant value for use Router by express libary
const service = require('./appointments.service');

router.get('/appointments', (req, res) => {
    service.call().then((listAppointments) => {
        res.json(listAppointments);
    })
});
router.post('/appointments', (req, res) => {
    service.create(req.body).then((appointments) => { // req.body is all-subject data at user new entered.  
        res.json(appointments) // response data with JSON.
    });
});
router.put('/appointments/:id', (req, res) => {
    service.update(req.body, req.params.id).then((appointments) => { // req.body is all-subject data at user edit. & req.params.id is ID in rows at user edit.
        res.send(appointments) // response data with JSON
    });
});
router.delete('/appointments/:id', (req, res) => {
    service.delete(req.params.id).then(() => {
        res.send("200")
    });
});

module.exports = router