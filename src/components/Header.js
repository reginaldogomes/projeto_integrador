// src/components/Header.js
import '@/assets/css/components/header.css'

import { renderLogo } from './Logo'
import { renderMenu } from './Menu'

export function renderHeader() {
  const header = document.createElement('header')

  const menu = renderMenu()
  const logo = renderLogo()

  header.appendChild(logo)
  header.appendChild(menu)

  return header
}
