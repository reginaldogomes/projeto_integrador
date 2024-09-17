// src/components/Header.js
export function renderHeader() {
    const header = document.createElement('header');
    header.innerHTML = `
        <span>Floripa Tour</span>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/blog">Blog</a></li>
            </ul>
        </nav>
    `;
    return header;
}