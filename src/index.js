document.addEventListener("DOMContentLoaded", () => {
    const nomeInput = document.getElementById("searchNome");
    const emailInput = document.getElementById("searchEmail");
    const statusSelect = document.getElementById("searchStatus");
    const nivelSelect = document.getElementById("searchNivel");
  
    function filtrarUsuarios() {
      const nome = nomeInput.value.toLowerCase();
      const email = emailInput.value.toLowerCase();
      const status = statusSelect.value.toLowerCase();
      const nivel = nivelSelect.value.toLowerCase();
  
      const linhas = document.querySelectorAll("#userTable tbody tr");
  
      linhas.forEach((linha) => {
        const colunas = linha.querySelectorAll("td");
        const nomeTexto = colunas[0].textContent.toLowerCase();
        const emailTexto = colunas[1].textContent.toLowerCase();
        const statusTexto = colunas[2].textContent.toLowerCase();
        const nivelTexto = colunas[3].textContent.toLowerCase();
  
        const mostrar =
          (!nome || nomeTexto.includes(nome)) &&
          (!email || emailTexto.includes(email)) &&
          (!status || statusTexto === status) &&
          (!nivel || nivelTexto === nivel);
  
        linha.style.display = mostrar ? "" : "none";
      });
    }
  
    nomeInput.addEventListener("input", filtrarUsuarios);
    emailInput.addEventListener("input", filtrarUsuarios);
    statusSelect.addEventListener("change", filtrarUsuarios);
    nivelSelect.addEventListener("change", filtrarUsuarios);
  });
  