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


  const img3d = document.querySelector('.img-hover3d');
  const container = document.querySelector('#imagem-direita');

  container.addEventListener('mousemove', (e) => {
    const { width, height, left, top } = container.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    const rotateX = -y / 20;
    const rotateY = x / 20;
    img3d.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  container.addEventListener('mouseleave', () => {
    img3d.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
