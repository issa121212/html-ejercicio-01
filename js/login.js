const formulario = document.querySelector("#loginForm");
const mensaje = document.querySelector("#mensaje");

const usuarios = [
    {
        email: "cliente@gmail.com",
        password: "12345678"
    },
    {
        email: "usuario@gmail.com",
        password: "paseo123"
    }
];

function esCorreoValido(correo) {

    const correoPartido = correo.split("@");

    if (correoPartido.length !== 2) {
        return false;
    }

    const dominio = correoPartido[1];

    const dominiosValidos = [
        "gmail.com",
        "outlook.com",
        "hotmail.com"
    ];

    return dominiosValidos.includes(dominio);
}

formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    const formData = new FormData(e.target);

    const datosLogin = {
        email: formData.get("email"),
        password: formData.get("password")
    };

    if (!esCorreoValido(datosLogin.email)) {

    mensaje.textContent = "Ingresa un correo válido.";

    return;
}
    if (datosLogin.password.length < 8) {

    mensaje.textContent = "La contraseña debe tener al menos 8 caracteres.";

    return;
}

    const usuarioEncontrado = usuarios.find((usuario) => {

    return usuario.email === datosLogin.email &&
           usuario.password === datosLogin.password;

});
    mensaje.classList.remove("mensaje-exito", "mensaje-error");

    if (usuarioEncontrado) {

    mensaje.textContent = "¡Inicio de sesión exitoso!";
    mensaje.classList.add("mensaje-exito");

    setTimeout(() => {
    window.location.href = "index.html";
}, 1000);

} else {

    mensaje.textContent = "Correo o contraseña incorrectos.";
    mensaje.classList.add("mensaje-error");

}

});