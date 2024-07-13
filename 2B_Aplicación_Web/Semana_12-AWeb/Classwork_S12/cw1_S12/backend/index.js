var mongoose = require('mongoose');
var port = '3600';
mongoose.promise = global.Promise;
mongoose.set("strictQuery", false);

var app = require('./app');
mongoose.connect('mongodb://localhost:27017/clientesdb')
.then(() => {
    console.log('Conexión a la base de datos establecida con éxito');
    console.log('Conexión exitosa con la bdd');
    app.listen(port, () => {
        console.log('Servidor corriendo en http://localhost:' + port);
        console.log('Conexion establecida en localhost:3600');
    });
})
.catch(err => console.log(err));