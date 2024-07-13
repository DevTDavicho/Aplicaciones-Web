var express = require('express');
var router = express.Router();
var autoController = require('../controllers/auto.controller');

var multiparty  = require('connect-multiparty');
var multipartyMiddleWare = multiparty({uploadDir:'./uploads'});

//pagina de inicio
router.get('/inicio', autoController.inicio);

//ver informacion de todos los autos
router.get('/autos', autoController.getAutos);

//guardar datos de un auto
router.post('/guardar-auto', autoController.saveAuto);

//recuperar datos de un auto
router.get('/auto/:id', autoController.getAuto);

//eliminar un auto
router.delete('/auto/:id', autoController.deleteAuto);

// actualizar
router.put('/auto/:id', autoController.updateAuto);

// agregar imagen
router.post('/subir-imagen/:id', multipartyMiddleWare, autoController.uploadImagen);

//recuperar una imagen
router.get('/get-imagen/:imagen',autoController.getImagen);

module.exports = router;


//! Test
// var express = require('express');
// var router = express.Router();

// // Ruta de ejemplo
// router.get('/test', (req, res) => {
//     res.status(200).send({ message: "Concesionario route is working!" });
// });

// module.exports = router;