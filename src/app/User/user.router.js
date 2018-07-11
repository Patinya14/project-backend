const express = require('express') // create constant value for use express libary 
const router = express.Router() // create constant value for use Router by express libary
const service = require('./user.service');

router.post('/login', (req, res) => {
    service.create(req.body).then((user) => { // req.body is all-subject data at user new entered.  
        res.status(200).send(true)
    });
});

module.exports = router