import React from 'react'


import '../styles/components/header.css'

const header = () => {

  return (
  <header>
            {/* <img src="assets/LOGO-BRANCO.png" alt=""> */}
            <ul class="nav" id="nav">
                <strong>Sentido <br /> Fotografia</strong>
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
    // const menu = document.getElementById('menu')
    // const navigation = document.getElementById('nav')

    // menu.addEventListener('click', ()=>{
    //     menu.classList.toggle('active')
    //     navigation.classList.toggle('active')
    // })

    // navigation.addEventListener('click', ()=>{
    //     menu.classList.remove('active')
    //     navigation.classList.remove('active')
    // });

export default header