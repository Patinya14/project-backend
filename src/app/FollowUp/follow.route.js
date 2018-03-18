const express = require('express') // create constant value for use express libary 
const router = express.Router() // create constant value for use Router by express libary
const service = require('./follow.service');

router.get('/follow', (req, res) => {
    service.call().then((listFollow) => {
        res.json(listFollow);
    })
});
router.post('/follow', (req, res) => {
    service.create(req.body).then((follow) => { // req.body is all-subject data at user new entered.  
        res.json(follow) // response data with JSON.
    });
});
router.put('/personal/:id', (req, res) => {
    service.update(req.body, req.params.id).then((follow) => { // req.body is all-subject data at user edit. & req.params.id is ID in rows at user edit.
        res.send(follow) // response data with JSON
    });
});
router.delete('/follow/:id', (req, res) => {
    service.delete(req.params.id).then(() => {
        res.send("200")
    });
});

module.exports = router