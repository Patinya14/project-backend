const express = require('express') // create constant value for use express libary 
const router = express.Router() // create constant value for use Router by express libary
const service = require('./treater.service');

router.get('/treater', (req, res) => {
    service.call().then((listTreater) => {
        res.json(listTreater);
    })
});
router.get('/treater/:id', (req, res) => {
    service.find(req.params.id).then((treater) => {
        res.json(treater);
    })
});
router.post('/treater', (req, res) => {
    service.create(req.body).then((treater) => { // req.body is all-subject data at user new entered.  
        res.json(treater) // response data with JSON.
    });
});
router.put('/treater/:id', (req, res) => {
    service.update(req.body, req.params.id).then((treater) => { // req.body is all-subject data at user edit. & req.params.id is ID in rows at user edit.
        res.send(treater) // response data with JSON
    });
});
router.delete('/treater/:id', (req, res) => {
    service.delete(req.params.id).then(() => {
        res.send("200")
    });
});

module.exports = router