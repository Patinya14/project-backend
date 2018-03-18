const express = require('express') // create constant value for use express libary 
const router = express.Router() // create constant value for use Router by express libary
const service = require('./modern.service');

router.get('/modern', (req, res) => {
    service.call().then((listModern) => {
        res.json(listModern);
    })
});
router.post('/modern', (req, res) => {
    service.create(req.body).then((modern) => { // req.body is all-subject data at user new entered.  
        res.json(modern) // response data with JSON.
    });
});
router.put('/modern/:id', (req, res) => {
    service.update(req.body, req.params.id).then((modern) => { // req.body is all-subject data at user edit. & req.params.id is ID in rows at user edit.
        res.send(modern) // response data with JSON
    });
});
router.delete('/modern/:id', (req, res) => {
    service.delete(req.params.id).then(() => {
        res.send("200")
    });
});

module.exports = router