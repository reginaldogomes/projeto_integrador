import { renderHome } from '../pages/home.js';
import { renderAbout } from '../pages/about.js';
import { renderServices } from '../pages/services.js';
import { renderContact } from '../pages/contact.js';
import { renderBlog } from '../pages/blog.js';

export function router() {
    const routes = {
        '/': renderHome,
        '/about': renderAbout,
        '/services': renderServices,
        '/contact': renderContact,
        '/blog': renderBlog,
    };

    // Função que renderiza a página de acordo com a URL atual
    function navigate(path) {
        const route = routes[path] || renderHome; // Redireciona para home caso a rota não exista
        document.getElementById('app').innerHTML = ''; // Limpa o conteúdo anterior
        route(); // Renderiza a nova página
    }

    // Verifica a URL inicial e navega para a rota correta
    navigate(window.location.pathname);

    // Adiciona escuta de eventos para navegações
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const path = event.target.getAttribute('href');
            window.history.pushState({}, '', path); // Atualiza a URL sem recarregar a página
            navigate(path); // Navega para a nova rota
        });
    });

    // Captura as mudanças de histórico (botões de voltar e avançar do navegador)
    window.addEventListener('popstate', () => {
        navigate(window.location.pathname);
    });
}
