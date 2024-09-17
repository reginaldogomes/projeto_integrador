// Função para renderizar o menu
export function renderMenu() {
  const menuElement = document.getElementById('menu');

  if (menuElement) {
    menuElement.innerHTML = `
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    `;
  } else {
    console.error('Elemento #menu não encontrado no DOM.');
  }
}

// Garante que o código execute somente após o DOM estar pronto
document.addEventListener('DOMContentLoaded', () => {
  renderMenu()
});