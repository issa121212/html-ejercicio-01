const formulario = document.getElementById("form-registro");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita que la página se recargue

  if (
    nombre.value.trim() === "" ||
    apellido.value.trim() === "" ||
    email.value.trim() === ""
  ) {
    alert("Por favor completa todos los datos principales.");
    return;
  }

  // Validación 2: Verificar largo mínimo de la contraseña
  if (password.value.length < 8) {
    alert("La contraseña debe tener al menos 8 caracteres.");
    password.focus();
    return;
  }

  // Validación 3: Verificar que ambas contraseñas coincidan
  if (password.value !== confirmPassword.value) {
    alert("Las contraseñas no coinciden. Inténtalo nuevamente.");
    confirmPassword.focus();
    return;
  }

  // 4. Guardar los datos en localStorage
  const usuario = {
    nombre: nombre.value.trim(),
    apellido: apellido.value.trim(),
    email: email.value.trim().toLowerCase(),
    password: password.value
  };

  localStorage.setItem("usuario", JSON.stringify(usuario));

 alert('¡Registro exitoso! Bienvenido/a, ${usuario.nombre}.');
  formulario.reset();

  // Redirigir a login.html para iniciar sesión con la cuenta creada
  window.location.href = "login.html";
});