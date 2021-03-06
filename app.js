const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));
app.use('/', require('./routes/index'));
app.use('/', require('./routes/newEntry'));
app.use('/', require('./routes/servicios'));


app.use((req, res, next) => {
   res.status(404).render('404', { error: 'ERROR. 404 not found'})
})

app.listen(3000, (req, res) => {
    console.log("Conectado correctamente al servidor en puerto 3000");
})
