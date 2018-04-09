const express = require('express') // create constant value for use express libary 
const router = express.Router() // create constant value for use Router by express libary
const service = require('./evalution.service');

router.get('/evalution', (req, res) => {
    service.call().then((listEvalution) => {
        res.json(listEvalution);
    })
});
router.post('/evalution', (req, res) => {
    service.create(req.body).then((evalution) => { // req.body is all-subject data at user new entered.  
        res.json(evalution) // response data with JSON.
    });
});
router.put('/evalution/:id', (req, res) => {
    service.update(req.body, req.params.id).then((evalution) => { // req.body is all-subject data at user edit. & req.params.id is ID in rows at user edit.
        res.send(evalution) // response data with JSON
    });
});
router.delete('/evalution/:id', (req, res) => {
    service.delete(req.params.id).then(() => {
        res.send("200")
    });
});

module.exports = router