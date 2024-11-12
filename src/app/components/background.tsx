// BackgroundDecor.js
import React from 'react';



export default function BackgroundDecor() {
 const sword = 'https://res.cloudinary.com/dlj39xvd0/image/upload/v1731441741/espada-optimized_amztwu.png';
  return (
    <div className="relative w-full h-full">
      {/* Ruido de fondo */}
      <div className="fixed inset-0 bg-noise opacity-50 pointer-events-none"></div>

      {/* Imagen de fondo */}
      {/* <div className="fixed inset-0 bg-fixed bg-center bg-no-repeat bg-cover bg-[url('https://re.cloudinary.com/dlj39xvd0/image/upload/v1731441741/espada-optimized_amztwu.png')]" /> */}

      {/* Imagen decorativa izquierda */}
      <img 
        src= {sword}
        alt="Espada izquierda" 
        className="fixed left-0 top-1/4 h-64 transform -rotate-12 opacity-100 pointer-events-none"
      />
      
      {/* Imagen decorativa derecha */}
      <img 
        src= {sword}
        alt="Espada derecha" 
        className="fixed right-0 top-1/4 h-64 transform rotate-12 opacity-100 pointer-events-none"
      />
    </div>
  );
}
