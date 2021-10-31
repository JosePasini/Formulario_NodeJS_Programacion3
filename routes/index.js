const express = require('express');
const router = express.Router();


router.get('/index', (req, res) => {
    res.render('index', { titulo: 'Soy el titulo del INDEX desde el método GET'});
})


module.exports = router;