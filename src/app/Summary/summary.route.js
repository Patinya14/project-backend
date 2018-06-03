const express = require('express') // create constant value for use express libary 
const router = express.Router() // create constant value for use Router by express libary
const disease = require('./../Disease/disease.service');
const treatment = require('./../Treatment/treatment.service');
const drug = require('./../Drug/drug.service');

router.get('/summary/:id', (req, res) => {
    disease.find(req.params.id).then(data => console.log(data))
    // treatment.find(req.params.id);
    // drug.find(req.params.id);
});
// router.post('/summary', (req, res) => {
//     service.create(req.body).then((summary) => { // req.body is all-subject data at user new entered.  
//         res.json(summary) // response data with JSON.
//     });
// });
// router.put('/summary/:id', (req, res) => {
//     service.update(req.body, req.params.id).then((summary) => { // req.body is all-subject data at user edit. & req.params.id is ID in rows at user edit.
//         res.send(summary) // response data with JSON
//     });
// });
// router.delete('/summary/:id', (req, res) => {
//     service.delete(req.params.id).then(() => {
//         res.send("200")
//     });
// });

module.exports = router