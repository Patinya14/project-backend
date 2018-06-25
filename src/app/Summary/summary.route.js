const express = require('express') // create constant value for use express libary 
const router = express.Router() // create constant value for use Router by express libary
const lib = require('../Library/pdfmake/pdf-summary');
const service = require('./summary.service');

let func = {}

router.get('/summary', (req, res) => {
    service.call().then((summary) => {
        (async () => {
            let data = []
            for (let i = 0; i < summary.length; i++) {
                let status = await service.find(summary[i].personId._id).then(cursor => {
                    if (cursor.length > 1) return 'ผู้ป่วยรายเก่า';
                    else  return 'ผู้ป่วยรายใหม่';
                })
                data.push(func.pushSummary(summary[i], status))
            }
            res.json(data)
        })();
    });
});

router.get('/summary/:id', (req, res) => {
    service.find(req.params.id).then((summary) => {
        res.json(summary) // response data with JSON.
    });
});
router.get('/summary/getpdf/:id', (req, res) => {
    service.call().then((summary) => {
        lib.document(summary);
        res.json({})

    });
});
router.post('/summary', (req, res) => {
    service.create(req.body).then((summary) => {
        res.json(summary) // response data with JSON.
    });
});
router.put('/summary/:id', (req, res) => {
    service.update(req.body, req.params.id).then((summary) => { // req.body is all-subject data at user edit. & req.params.id is ID in rows at user edit.
        res.send(summary) // response data with JSON
    });
});
router.delete('/summary/:id', (req, res) => {
    service.delete(req.params.id).then(() => {
        res.send("200")
    });
});

func.pushSummary = (summary, status) => {
    return {
        treatment: summary.treatment,
        countDrugs: summary.countDrugs,
        personId: summary.personId,
        disease: summary.disease,
        treater: summary.treater,
        officer: summary.officer,
        date: summary.date,
        time: summary.time,
        // charge: func.calculateCharge(summary.treatment, summary.statusTime),
        status: status,
        statusTime: summary.statusTime
    }
}

func.calculateCharge = (treatment, statusTime) => {
    if ( statusTime !== undefined && statusTime !== '') {
        treatment.forEach(treat => {
            if(statusTime === 'ในเวลา') {
                Number(treat.treatInTime)
            }
        });
    }
}
module.exports = router