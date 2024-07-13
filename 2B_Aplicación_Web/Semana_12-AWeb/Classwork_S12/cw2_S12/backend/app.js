var express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
var concesionarioRoutes=require('../backend/routes/concesionario.routes');
var app= express();
const port = 3700;



app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, X-Request-With, Content-Type,Accept, Access-Control-Allow, Request-Method')
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
    res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

// /*/rutas
// app.get('/',(req,res)=>{
//     res.status(502).send("<h1>Hola</h1>")
// })*/
// //module.exports=app;

app.use('/',concesionarioRoutes);
module.exports=app;



// var express = require('express');
// var bodyParser = require('body-parser');
// var app = express();
// var concesionarioRoutes = require('./routes/concesionario.routes'); // Ruta corregida

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, X-Request-With, Content-Type, Accept, Access-Control-Allow, Request-Method');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//     res.header("Access-Control-Allow-Credentials", true);
//     next();
// });

// /*/rutas
// app.get('/', (req, res) => {
//     res.status(502).send("<h1>Hola</h1>")
// })*/

// // Usar las rutas de concesionario
// app.use('/api/concesionario', concesionarioRoutes);

// module.exports = app;
