import {Router} from 'express'
import db from './db/basedatos.js'

const router = Router()

// Mostrar el formulario de registro
router.get('/', (req, res) => {
  res.render('register'); // register.ejs
});


router.post('/',(req,res)=>{
  console.log(req.body)
const {email,password} = req.body;

if(!email || !password){
   return res.send('❌ Faltan datos');
}

//inserta en la base de datos
const query = 'INSERT INTO usuarios (email, password ) VALUES (?, ?)';
db.run(query, [email, password], function(erro){
  if(erro){
     console.error(erro.message);
      return res.send('❌ Error al registrar usuario');
  }else{
    res.send('✅ Usuario registrado con éxito');
  }
});

});

router.get('/usuarios',(req,res)=>{
  db.all('SELECT * FROM usuarios',[] ,(erro , rows)=>{

     if (erro) return res.send('❌ Error al cargar usuarios');
    res.render('usuarios', { usuarios: rows }); // usuarios.ejs
  });
});




// Editar usuario (PATCH)
router.patch('/usuarios/:id', (req, res) => {
  const { email, password } = req.body;
  const { id } = req.params;

  const query = 'UPDATE usuarios SET email = ?, password = ? WHERE id = ?';
  db.run(query, [email, password, id], function(err) {
    if (err) return res.status(500).send('❌ Error al actualizar usuario');
    res.send('✅ Usuario actualizado');
  });
});


// Eliminar usuario (DELETE)
router.delete('/usuarios/:id', (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM usuarios WHERE id = ?';
  db.run(query, [id], function(err) {
    if (err) return res.status(500).send('❌ Error al eliminar usuario');
    res.send('✅ Usuario eliminado');
  });
});


export default router;