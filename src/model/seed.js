import {pool} from './db.js';

const books = [{title: 'El juego de Ender', writer: 'Orson Scott Card', year: 1982}, {title:'King Sorrow', writer: 'Joe Hill', year:2025}];

try {
    await pool.query(`CREATE TABLE IF NOT EXISTS book (
            id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            title TEXT NOT NULL,
            writer TEXT,
            year INTEGER
        )`);
    for(const {title, writer, year} of books){
        await pool.query('INSERT INTO book(title, writer, year) VALUES ($1, $2, $3)', [title, writer, year]);
    }

   /* books.forEach(b=>{
        await pool.query(`
                INSERT INTO book VALUES (${b.title}, ${b.writer}, ${b.year})
            `);
    }); ESTO NO VA A FUNCIONAR PORQUE FOREARCH NO ADMITE FUNCIONES ASYNC*/

} catch(err){
    console.error(err);
} finally {
    await pool.end();
}