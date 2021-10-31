const express = require('express');
const router = express.Router();

router.get('/newEntry', (req, res) => {
    res.render("newEntry")
    console.log(req.body)
})

router.post('/newEntry', (req, res) => {
    console.log(req.body)
    //res.send('Recibido');
    res.render('newEntry');
    //const parametro = req.body;
    //console.log(parametro.body)
    /*
    if (!req.title || !req.body) {
        res.send(400).send("Debe enviar titulo y cuerpo");
    }*/
})

module.exports = router;