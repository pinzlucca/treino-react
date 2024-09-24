import React from 'react'
import backgroundImage from '../assets/Henrique-Melissa-Home.png';
import '../styles/components/home.css'

const home = () => {
  return (
    <div style={{
        backgroundImage: `url(${backgroundImage})`,
        width: '100%',
        height: '900px',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
        
    }}>
        {/* Conteúdo do componente */}
    </div>
);
}

export default home