const express = require('express') // create constant value for use express libary 
const router = express.Router() // create constant value for use Router by express libary
const service = require('./personal.service');
const controll = {};

router.get('/personal', (req, res) => {
    service.call().then((listPersonal) => {
        let data = [];
        // listPersonal.forEach(element => {
        //     console.log(element)
        //     let temp = String(element.personId).substring(0, 2);
        //     if(temp === String(new Date().getFullYear() + 543).substring(2, 4)) {


        //         console.log(temp)
        //         // temp.push(element)
        //     }
        // });
        res.json(listPersonal);
    })
});

router.get('/personal/:id', (req, res) => {
    service.find(req.params.id).then((personal) => {

        res.json(personal);
    })
});

router.post('/personal', (req, res) => {
    // (async () => {
    //     await controll.generateNumber().then(id => {
    //         req.body.personId = id
    //     })
    // })();
    
    service.create(req.body).then((personal) => { // req.body is all-subject data at user new entered.  
        res.json(personal) // response data with JSON.
    });
});
controll.generateNumber = () => {
    return new Promise((resolve) => {
        service.call().then((listPersonal) => {
            
            // let data = [], count = 1;
            // let now = (String(new Date().getFullYear() + 543)).substring(2, 4);
            listPersonal.forEach(element => {
                
                console.log(element._id.getTimestamp())
            //     if (String(element.personId).substring(0, 2) === now) {
            //         count++;
            //     }
            });
            // result = '000' + count;
            // if (result.length > 4) {
            //     result = result.substring(result.length - 4, result.length)
            // }
            // resolve(now + '-' + result);
        })
    });
}
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