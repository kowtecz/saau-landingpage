// Função para mostrar/ocultar seções
function showSection(sectionId) {
    // Oculta todas as seções
    document.querySelectorAll('section').forEach(function (section) {
        section.style.display = 'none';
    });

    // Mostra a seção correspondente
    var targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
    }
}

// Adiciona um listener para cada link na navegação
document.querySelectorAll('.nav a').forEach(function (link) {
    link.addEventListener('click', function (event) {
        // Previne o comportamento padrão do link
        event.preventDefault();

        // Obtém o ID da seção associada ao link
        var sectionId = this.getAttribute('href').substring(1);

        // Chama a função para mostrar a seção
        showSection(sectionId);

        // Atualiza a URL sem recarregar a página
        history.pushState(null, null, '#' + sectionId);
    });
});

// Adiciona um listener para o evento de popstate (voltar/navegar)
window.addEventListener('popstate', function () {
    // Obtém a parte do hash da URL
    var sectionId = location.hash.substring(1);

    // Chama a função para mostrar a seção
    showSection(sectionId);
});

// Verifica se há um hash na URL inicial e mostra a seção correspondente
if (location.hash) {
    var sectionId = location.hash.substring(1);
    showSection(sectionId);
}
