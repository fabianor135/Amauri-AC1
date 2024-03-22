document.addEventListener("DOMContentLoaded", function() {
  // URL da API (substitua pela URL real da sua API)
  const apiUrl = "https://mockapi.io/courses";

  // Função para obter os cursos da API
  function getCursos() {
      fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          const listaCursos = document.getElementById("cursos-lista");
          listaCursos.innerHTML = ""; // Limpa a lista de cursos antes de preencher novamente

          data.forEach(curso => {
              const itemCurso = document.createElement("li");
              itemCurso.textContent = `${curso.nome} - ${curso.descricao}`;
              listaCursos.appendChild(itemCurso);
          });
      })
      .catch(error => console.error("Erro ao obter cursos:", error));
  }

  // Função para enviar dados de inscrição para a API
  function enviarInscricao(dados) {
      fetch(apiUrl, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(dados)
      })
      .then(response => response.json())
      .then(data => console.log("Inscrição realizada com sucesso:", data))
      .catch(error => console.error("Erro ao realizar inscrição:", error));
  }

  // Evento de envio do formulário de inscrição
  document.getElementById("form-inscricao").addEventListener("submit", function(event) {
      event.preventDefault(); // Evita o comportamento padrão de recarregar a página

      // Obtém os valores dos campos do formulário
      const alunoNome = document.getElementById("aluno-nome").value;
      // Obtenha os outros valores dos campos do formulário aqui

      // Monta o objeto com os dados da inscrição
      const dadosInscricao = {
          alunoNome: alunoNome,
          // Adicione os outros dados da inscrição aqui
      };

      // Envia os dados de inscrição para a API
      enviarInscricao(dadosInscricao);
  });

  // Ao carregar a página, obtém os cursos da API e preenche a lista de cursos
  getCursos();
});
