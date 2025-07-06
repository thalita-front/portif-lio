document.getElementById("formContato").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  // Dados ocultos exigidos pelo FormSubmit
  formData.append("_captcha", "false");
  formData.append("_template", "box");

  try {
    const res = await fetch("https://formsubmit.co/thalitav694@gmail.com", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      form.reset();
      document.getElementById("mensagemStatus").style.display = "block";
    } else {
      alert("❌ Erro ao enviar. Tente novamente.");
    }
  } catch (err) {
    alert("⚠️ Erro de conexão. Verifique sua internet.");
  }
});
