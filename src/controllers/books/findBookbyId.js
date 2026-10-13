import { pool } from "../../model/db.js";

export async function findBookById(req, res){
    
    let rows;
    try {
        ({rows} = await pool.query(`SELECT * FROM book WHERE id = $1`, [req.params.id]));
    } catch(err){
        console.error(err);
    }
     if(rows.length == 0) rows = {"msg": "No se encontró ningún registro"};
    res.json(rows);
   
}