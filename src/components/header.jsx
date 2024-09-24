import React from 'react'

import '../styles/components/header.css'

const header = () => {
  return (
  <header>
            {/* <img src="assets/LOGO-BRANCO.png" alt=""> */}
            <ul class="nav" id="nav">
                <li>
                    <a id="navlink" class="nav__link" target="_blank" href="vagas.html">Sobre nós</a>
                </li>
                <li>
                    <a id="navlink" href="#QUEMSOMOS" class="nav__link">Fale conosco</a>
                </li>
                <li>
                    <a id="navlink" href="#nossos-serviços" class="nav__link">Casamentos</a>
                </li>
                <li>
                    <a id="navlink" href="#solicite-orçamento" class="nav__link">Ensaios</a>
                </li>
            </ul>

            <button type="button" id="menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </header>
  )
}

export default header