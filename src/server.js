import express from 'express';
import {pool} from './db.js';

const app = express();
const PORT = 3000;



app.get('/', (req, res)=>{
    res.send('La API está funcionando');
});

app.get('/api/v1/books', async (req, res)=>{
    let rows;
    try{
        ({rows} = await pool.query(`SELECT * FROM book`));
    }catch(err){
        console.error(err);
    }
    if (!rows)  rows = {"msg": "la consulta no devolvió ningún registro"}
    res.json(rows);
});

/* TO-DO: DEBERES: endpoint debe apuntar a BD*/
app.get('/api/v1/books/:id', (req, res)=>{
    let book = books.find(b => b.id == req.params.id);
    if (!book) {
        res.status(404).json({error: 'No se econtró ningún libro con ese id'});
    }
    res.json(book);
});

app.get('/api/v1/books/writer/:writer', (req, res)=>{
    let book = books.find(b=> b.writer == req.params.writer);
     if (!book) {
        res.status(404).json({error: 'No se econtró ningún libro con ese escritor'});
    }
    res.json(book);
});

app.listen(PORT, ()=>{
    console.log(`El servidor está escuchando en el puerto ${PORT}`);
});
