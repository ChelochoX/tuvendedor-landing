document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  if (!form) {
    console.error("❌ No se encontró el formulario #contactForm");
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      nombre: form.nombre.value.trim(),
      email: form.email.value.trim(),
      mensaje: form.mensaje.value.trim(),
    };

    try {
      const resp = await fetch("https://graciatech.com.py/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!resp.ok) {
        alert("❌ Error al enviar. Intente más tarde.");
        return;
      }

      // Si todo salió bien → redirigimos
      window.location.href = "gracias.html";
    } catch (err) {
      console.error("❌ Error de red:", err);
      alert("❌ No se pudo conectar con la API.");
    }
  });
});
