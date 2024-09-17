// src/components/Footer.js
export function renderFooter() {
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <p>&copy; 2024 Floripa  Tour</p>
  `;
  return footer;
}