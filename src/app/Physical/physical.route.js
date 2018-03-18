const express = require('express') // create constant value for use express libary 
const router = express.Router() // create constant value for use Router by express libary
const service = require('./physical.service');

router.get('/physical', (req, res) => {
    service.call().then((listPhysical) => {
        res.json(listPhysical);
    })
});
router.post('/physical', (req, res) => {
    service.create(req.body).then((physical) => { // req.body is all-subject data at user new entered.  
        res.json(physical) // response data with JSON.
    });
});
router.put('/physical/:id', (req, res) => {
    service.update(req.body, req.params.id).then((physical) => { // req.body is all-subject data at user edit. & req.params.id is ID in rows at user edit.
        res.send(physical) // response data with JSON
    });
});
router.delete('/physical/:id', (req, res) => {
    service.delete(req.params.id).then(() => {
        res.send("200")
    });
});

module.exports = router