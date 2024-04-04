// Função para redirecionar para o Formulário 2 com os cursos selecionados
function redirecionarParaFormulario2() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let cursosSelecionados = [];

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            cursosSelecionados.push(checkbox.value);
        }
    });

    const queryParams = new URLSearchParams();
    cursosSelecionados.forEach(curso => {
        queryParams.append('cursos[]', curso);
    });

    const url = `Lista 04 - formularios2.html?${queryParams.toString()}`;
    window.location.href = url;
}

// Função para exibir os cursos selecionados no Formulário 2
function exibirCursosSelecionados() {
    const urlParams = new URLSearchParams(window.location.search);
    const cursosSelecionados = urlParams.getAll('cursos[]');

    const dadosCursoElement = document.querySelector('#dados-curso');
    if (cursosSelecionados.length > 0) {
        dadosCursoElement.innerHTML = '<h3>Dados do Curso</h3>';
        cursosSelecionados.forEach(curso => {
            dadosCursoElement.innerHTML += `<p>${curso}</p>`;
        });
    } else {
        dadosCursoElement.innerHTML = '<p>Nenhum curso selecionado.</p>';
    }
}
