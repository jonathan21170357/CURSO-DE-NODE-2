const db = require('../database/conexion.js');

class cursosController {
    constructor() {

    }

    consultar(req, res){
        res.json({msg: 'Consulta cursos desde clase'});
    }

    consultarDetalle(req, res){
        const {id } = req.params;
        res.json({msg: `Consulta detalle curso desde clase con id ${id}`});
    }

    ingresar(req, res){
        res.json({msg: 'Ingresa curso desde clase'});
    }

    actualizar(req, res){
        res.json({msg: 'Actualiza curso desde clase'});
    }

    borrar(req, res){
        res.json({msg: 'Borra curso desde clase'});
    }


}

module.exports = new cursosController();