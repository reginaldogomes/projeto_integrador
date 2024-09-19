import { menuItems } from '../data/menu';

export function renderMenu() {
  const menu = document.createElement('nav');

  if (menu) {
    const menuHtml = menuItems.map(item => `
      <li><a href="${item.link}">${item.name}</a></li>
    `).join('');

    menu.innerHTML = `
      <ul>
        ${menuHtml}
      </ul>
    `;
  } else {
    console.error('Elemento #menu não encontrado no DOM.');
  }
  return menu
}