import express from 'express';

const app = express();
const PORT = 3000;

const books = [{id: 1, title: 'El juego de Ender', writer: 'Orson Scott Card'}, {id: 2, title:'King Sorrow', writer: 'Joe Hill'}];

app.get('/', (req, res)=>{
    res.send('La API está funcionando');
});

app.get('/api/v1/books', (req, res)=>{
    res.json(books);
});

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
})

app.listen(PORT, ()=>{
    console.log(`El servidor está escuchando en el puerto ${PORT}`);
});
