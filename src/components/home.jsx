import React from 'react'
import backgroundImage from '../assets/Henrique-Melissa-Home.png';
import '../styles/components/home.css'

const home = () => {
  return (
    <div class="home-container">
        <div style={{
            backgroundImage: `url(${backgroundImage})`,
            width: '400px',
            height: '600px',
            backgroundPosition: 'center 180px',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',
            position: 'relative'
        }}>
        {/* Conteúdo do componente */}
        <h2>TEXTO 2</h2>
        </div>
    </div>

);
}

export default home