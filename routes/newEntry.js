const express = require('express');
const router = express.Router();

let entries = [];

router.get('/newEntry', (req, res) => {
    res.render("newEntry")
    console.log(req.body)
})

router.post('/newEntry', (req, res) => {
    
    if (!req.body.title || !req.body.body) {
        console.log("Vacio")
    }
    
    let newEntryLet = [
        {
            title: req.body.title,
            body: req.body.body,
        }
    ];
    
    newEntryLet.forEach(e => {
        console.log(e);
    })

    res.render('newEntry');
})

module.exports = router;