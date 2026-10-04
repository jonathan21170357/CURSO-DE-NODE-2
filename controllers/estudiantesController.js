const db = require('../database/conexion.js');

class estudiantesController {
    constructor() {

    }

    consultar(req, res){
        res.json({msg: 'Consulta estudiantes desde clase'});
    }

    consultarDetalle(req, res){
        const {id } = req.params;
        res.json({msg: `Consulta detalle estudiante desde clase con id ${id}`});
    }

    ingresar(req, res){
        try { 
        const {dni, nombre, apellido, email} = req.body;
        db.query(`INSERT INTO estudiantes 
        (id, dni, nombre, apellido, email) 
        VALUES (null, ?, ?, ?, ?);`, 
            [dni, nombre, apellido, email],(err, rows) => {
                if(err){
                    res.status(400).send(err);
                }
                res.status(201).json(rows);
            } );
        } catch(err) {
            res.status(500).send(err); 
        }
    }

    actualizar(req, res){
        res.json({msg: 'Actualiza estudiante desde clase'});
    }

    borrar(req, res){
        res.json({msg: 'Borra estudiante desde clase'});
    }


}

module.exports = new estudiantesController();