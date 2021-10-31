const express = require('express');
const router = express.Router();

router.get('/servicios', (req, res) => {
    res.render('servicios', { titulo: 'Soy el titulo del SERVICIO desde el método GET'});
})


module.exports = router;