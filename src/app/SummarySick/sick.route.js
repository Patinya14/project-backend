const express = require('express') // create constant value for use express libary 
const router = express.Router() // create constant value for use Router by express libary
const service = require('./summarySick.service');

router.get('/summarySick', (req, res) => {
    service.call().then((listSummarySick) => {
        res.json(listSummarySick);
    })
});
router.post('/summarySick', (req, res) => {
    service.create(req.body).then((summarySick) => { // req.body is all-subject data at user new entered.  
        res.json(summarySick) // response data with JSON.
    });
});
router.put('/summarySick/:id', (req, res) => {
    service.update(req.body, req.params.id).then((summarySick) => { // req.body is all-subject data at user edit. & req.params.id is ID in rows at user edit.
        res.send(summarySick) // response data with JSON
    });
});
router.delete('/summarySick/:id', (req, res) => {
    service.delete(req.params.id).then(() => {
        res.send("200")
    });
});

module.exports = router