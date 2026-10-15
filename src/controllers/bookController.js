import { pool } from "../config/db.js";
import { findAll, findOneById } from "../model/bookModel.js";

export async function findBooks(req, res){
    const { writer, year } = req.query;
    try {
        const result = await findAll({writer, year});
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Error al consultar la base de datos' });
    }
}

export async function findBookById(req, res){
    
    const id = req.params.id;
    let rows;
    try {
        const result  = await findOneById(id);
        res.json(result.rows);
    } catch(err){
         console.error(err);
          res.status(500).json({ msg: 'Error al consultar la base de datos' });
    }
}