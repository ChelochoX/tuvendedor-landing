document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const mensajeExito = document.getElementById("mensajeExito");
  const cerrarBtn = document.getElementById("cerrarMensaje");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevenir envío inmediato

    // Enviar manualmente el formulario
    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          form.reset(); // Limpiar formulario
          mensajeExito.style.display = "block"; // Mostrar mensaje
        } else {
          alert("Error al enviar. Intente más tarde.");
        }
      })
      .catch(() => {
        alert("Ocurrió un error. Intente más tarde.");
      });
  });

  cerrarBtn.addEventListener("click", () => {
    mensajeExito.style.display = "none";
  });
});
