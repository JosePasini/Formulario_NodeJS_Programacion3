const express = require('express');
const app = express();
const router = express.Router();


let entries = [];
app.locals.entries = entries;


app.get('/newEntry', (req, res) => {
    res.render("newEntry")
})

app.post('/newEntry', (req, res) => {
    
    if (!req.body.title || !req.body.body) {
        console.log("Vacio")
    }
    let newEntryLet = 
        {
            title: req.body.title,
            body: req.body.body,
            published: new Date(),
        };
    
    entries.push(newEntryLet);
    
    console.log(app.locals.entries);

    res.redirect('newEntry');
    })

module.exports = app;
//module.exports = router;