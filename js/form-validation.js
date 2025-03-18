document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const message = document.getElementById("form-message");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que se envíe el formulario sin validación

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const messageText = document.getElementById("message").value.trim();

        if (name === "" || email === "" || messageText === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Por favor, introduce un correo válido.");
            return;
        }

        message.textContent = "¡Mensaje enviado correctamente!";
        message.classList.remove("hidden");

        form.reset(); // Borra los campos del formulario
    });

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});
