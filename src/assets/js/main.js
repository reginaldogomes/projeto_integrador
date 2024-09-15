import { router, navigateTo } from './router.js';

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  window.addEventListener('popstate', router);

  // Inicializa a rota correta ao carregar a página
  router();
});
