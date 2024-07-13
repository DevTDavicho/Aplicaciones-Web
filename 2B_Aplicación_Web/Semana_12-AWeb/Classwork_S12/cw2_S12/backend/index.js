var mongoose = require ('mongoose');
var port = '3700'; // Cambiado a 3700

mongoose.promise = global.Promise;
mongoose.set("strictQuery", false);

var app = require('./app');
mongoose.connect('mongodb://localhost:27017/concesionario')
.then(()=>{
    console.log("conexion exitosa con la bd");
    app.listen(port,()=>{
        console.log("Conexion establecida en localhost:" + port);
    })
})
.catch(err=>console.log(err))