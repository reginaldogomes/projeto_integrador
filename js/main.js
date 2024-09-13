// Função para navegar para uma rota específica
function navigateTo(event, path) {
  event.preventDefault(); // Impede o comportamento padrão de redirecionamento

  // Atualiza a URL sem recarregar a página
  window.history.pushState({}, path, window.location.origin + path);

  // Renderiza o conteúdo da nova página
  renderContent(path);
}

// Função para carregar o conteúdo dinamicamente via AJAX
function renderContent(path) {
  const contentDiv = document.getElementById('content');
  
  // Definindo qual arquivo carregar com base na rota
  let page = '';
  switch (path) {
    case '/home':
      page = 'home.html';
      break;
    case '/about':
      page = 'about.html';
      break;
    case '/services':
      page = 'services.html';
      break;
    case '/contact':
      page = 'contact.html';
      break;
    case '/blog':
      page = 'blog.html';
      break;
    default:
      page = 'home.html';
  }

  // Carrega o conteúdo da página via AJAX (fetch)
  fetch(`./pages/${page}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao carregar a página');
      }
      return response.text();
    })
    .then(data => {
      // Insere o conteúdo carregado no div
      contentDiv.innerHTML = data;
    })
    .catch(error => {
      contentDiv.innerHTML = `<p>${error.message}</p>`;
    });
}

// Monitora o evento de navegação com o botão "voltar" ou "avançar"
window.onpopstate = () => {
  renderContent(window.location.pathname);
};

// Carrega o conteúdo inicial da página com base na URL atual
document.addEventListener('DOMContentLoaded', () => {
  renderContent(window.location.pathname);
});
