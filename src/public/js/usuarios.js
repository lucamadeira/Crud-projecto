// Selecciona todos los botones de editar
const editButtons = document.getElementsByClassName('edit-btn');
for (let btn of editButtons) {
  btn.addEventListener('click', async (e) => {
    const id = e.target.dataset.id;
    const email = prompt('Nuevo email:');
    const password = prompt('Nueva contraseña:');

    if (!email || !password) return alert('Datos inválidos');

    const res = await fetch(`/usuarios/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    alert(await res.text());
    location.reload();
  });
}

// Selecciona todos los botones de eliminar
const deleteButtons = document.getElementsByClassName('delete-btn');
for (let btn of deleteButtons) {
  btn.addEventListener('click', async (e) => {
    const id = e.target.dataset.id;
    if (!confirm('¿Seguro que quieres eliminar este usuario?')) return;

    const res = await fetch(`/usuarios/${id}`, { method: 'DELETE' });
    alert(await res.text());
    location.reload();
  });
}
