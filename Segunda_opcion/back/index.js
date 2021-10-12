const express = require('express');
const app = express();
var cors = require('cors');

app.use(express.static(__dirname + '/public/'));
app.use(cors());

//Conexión a BD postgress
var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://joddie:Huitzi12@localhost:5432/practica");



app.get('/hola', async function (req, res) {  
    db.many("SELECT * FROM actor;")
    .then(function (data) {
        console.log(data);
        res.send(data);
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });

});


app.get('/datos', async function (req, res) {  
    db.many("SELECT * FROM clima ORDER BY id_clima DESC limit 7")
    .then(function (data) {
        res.send(data);
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });

});



app.listen('3001', function() {
  console.log('Servidor web escuchando en el puerto 3001');
});