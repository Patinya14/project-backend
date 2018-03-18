const express = require('express') // create constant value for use express libary 
const router = express.Router() // create constant value for use Router by express libary
const service = require('./login.service');

router.get('/login', (req, res) => {
    service.call().then((listLogin) => {
        res.json(listLogin);
    })
});
router.post('/login', (req, res) => {
    service.create(req.body).then((login) => { // req.body is all-subject data at user new entered.  
        res.json(login) // response data with JSON.
    });
});
router.put('/login/:id', (req, res) => {
    service.update(req.body, req.params.id).then((login) => { // req.body is all-subject data at user edit. & req.params.id is ID in rows at user edit.
        res.send(login) // response data with JSON
    });
});



module.exports = router