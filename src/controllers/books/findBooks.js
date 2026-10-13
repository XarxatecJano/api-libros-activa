import { pool } from "../../model/db.js";
import { findAll } from "../../model/books/findAll.js";

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