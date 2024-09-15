const routes = {
  '/': '/src/pages/home.html',
  '/home': '/src/pages/home.html',
  '/about': '/src/pages/about.html',
  '/services': '/src/pages/services.html',
  '/contact': '/src/pages/contact.html',
  '/blog': '/src/pages/blog.html',
};

export async function router() {
  const path = window.location.pathname;
  const route = routes[path] || routes['/']; // Se a rota não for encontrada, vai para Home

  try {
    const response = await fetch(route);
    const content = await response.text();
    document.getElementById('app').innerHTML = content;
  } catch (error) {
    document.getElementById('app').innerHTML = '<h1>Error loading page</h1>';
  }
}

export function navigateTo(url) {
  history.pushState(null, null, url);
  router();
}