const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));
app.use('/', require('./routes/index'));
app.use('/', require('./routes/servicios'));
app.use('/', require('./routes/newEntry'));

app.use((req, res, next) => {
   res.status(404).render('404', { error: 'ERROR. 404 not found'})
})

app.listen(3000, (req, res) => {
    console.log("Conectado en puerto " , 3000);
})
console.log("Ruta: " + __dirname + "/public")