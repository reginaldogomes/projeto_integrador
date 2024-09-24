// src/components/Header.js
import { renderLogo } from './Logo'
import { renderMenu } from './Menu'

const menu = renderMenu()
const logo = renderLogo()

export function renderHeader() {
  const header = document.createElement('header')

  header.appendChild(logo)
  header.appendChild(menu)

  return header
}
