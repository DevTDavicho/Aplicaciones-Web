var Auto = require('../models/auto');
var fs = require('fs');
var path = require('path');

var controller = {
    inicio:function(req,res){
        return res.status(200).send({
            message: "<h1> Hola </h1>"
        })
    },
    getAutos:async function(req, res){
        try{
            const autos = await Auto.find({}).sort();
            if(autos.lenght == 0){
                return res.status(404).send({message:"No hay autos para mostrar"});
            }
            return res.status(200).send({autos})

        }catch(error){
            res.status(500).send({message:'Error al devolver los datos'});
        }
    },
    saveAuto:async function(req, res){
        try{
            var auto = new Auto();
            var params = req.body;
            auto.marca = params.marca;
            auto.modelo = params.modelo;
            auto.color = params.color;
            auto.anio = params.anio;
            auto.precio = params.precio;
            auto.imagen = null;

            var autoStored = await auto.save();
            if(!autoStored){
                return res.status(404).send({message: 'No se guardo el auto'});
            }
            return res.status(201).send({auto: autoStored});
        }
        catch(error){
            res.status(500).send({message: 'Error al guardar'});
        }
    },
    getAuto:async function(req, res){
        try{
            var autoId = req.params.id;
            if(!autoId) return res.status(404).send({message:'El auto no existe'});
            var auto = await Auto.findById(autoId);
            if(!auto) return res.status(404).send({message:'El auto no existe'});
            return res.status(200).send({auto}
            );
        }catch(error){
            return res.status(500).send({message: 'Error al recuperar los datos'});
        }
    },
    deleteAuto: async function(req, res){
        try{
            var autoId = req.params.id;
            var autoRemove = await Auto.findByIdAndDelete(autoId);
            if(!autoRemove) return res.status(404).send({message: 'El auto no se puede eliminar'});
            return res.status(200).send({auto: autoRemoved});
        }catch(error){
            return res.status(500).send({message: 'Error al eliminar los datos'});
        }
    },
    updateAuto:async function(req,res){
        try{
            var autoId = req.params.id;
            var update = req.body;
            var autoUpdate = await Auto.findByIdAndUpdate(autoId, update, {new: true});

            if(!autoUpdate) return res.status(404).send({message: 'El auto no se puede actualizar'});
            return res.status(200).send({auto:autoUpdate}
            );
        }catch(error){
            return res.status(500).send({message: 'Error al actualizar los datos'});
        }
    },
    uploadImagen:async function(req,res){
        try {
            var autoId=req.params.id;
            var fileName='Imagen no subida';
            
            if(req.files){
                var filePath=req.files.imagen.path;
                var fileSplit=filePath.split('\\');
                fileName=fileSplit[1];
                var extSplit=fileName.split('.');
                var fileExt=extSplit[1];
                
                if(fileExt==='png' || fileExt==='jpg' || fileExt==='jpeg' || fileExt==='gif'|| fileExt==='PNG'){
                    var autoUpdated= await Auto.findByIdAndUpdate(autoId,{imagen:fileName},{new:true});
                    if(!autoUpdated) return res.status(404).send({message:'El auto no existe y no se puede subir la imagen'});
                    return res.status(200).send({auto:autoUpdated});
                }else{
                    fs.unlink(filePath,(err)=>{
                        return res.status(200).send({message:'Extensión no válida'});
                    });
                }
            }else{
                return res.status(200).send({message: fileName});
            }
        } catch (err) {
            return res.status(500).send({ message: 'La imagen no se ha subido' });
        }
    },
    getImagen:async function(req,res){
        try {
            var file=req.params.imagen;
            var path_file="./uploads/"+file;

            var exists=await fs.promises.access(path_file)
            .then(()=>true)
            .catch(()=>false);
            
            if(exists) return res.sendFile(path.resolve(path_file));
                else return res.status(200).send({message:'La imagen no existe'});
        } catch (err) {
            return res.status(500).send({ message: 'Error al recuperar la imagen' });
        }
    }
}

module.exports=controller;