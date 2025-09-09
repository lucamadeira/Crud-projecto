const form = document.getElementById('registerForm');

form.addEventListener('submit',async (e) =>{
  e.preventDefault();


 const email = document.getElementById('email').value;
 const password = document.getElementById('password').value;

 try {
    const res = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
  
  
    const text = await res.text();
    alert(text); // muestra el mensaje de éxito o error
    window.location.href = '/usuarios';
  } catch (err) {
    console.error(err);
    alert('❌ Error al enviar los datos');
  }
})