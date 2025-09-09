import sqlite3 from 'sqlite3'
const { Database } = sqlite3;

const db = new sqlite3.Database('./mi_data_base.db', (erro)=>{
  if(erro){
     console.error('❌ Error al abrir la base de datos:', erro.message);
  }else{
     console.log('✅ Base de datos SQLite conectada.');
  } 
}
);


db.run(`CREATE TABLE IF NOT EXISTS usuarios (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL,
  password TEXT NOT NULL
)`);


export default db;