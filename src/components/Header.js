// src/components/Header.js
export function renderHeader() {
    const header = document.createElement('header');
    header.innerHTML = `
        <span>Logo module</span><ul id="menu">teste</ul>
    `;
    return header;
  }
  
