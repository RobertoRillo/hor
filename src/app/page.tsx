"use client";

import React, { useState } from 'react';
import { Sidebar } from './components/sidebar';
import { Header } from './components/header';
import { AlbumContent } from './album';
import { Footer } from './components/footer';

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-gray-300 font-mono relative overflow-hidden bg-fixed bg-center bg-no-repeat bg-cover bg-[url('/espada-optimized.png')]">
      {/* Ruido de fondo */}
      <div className="fixed inset-0 bg-noise opacity-50 pointer-events-none"></div>
      
      {/* Imagen decorativa izquierda */}
      <img 
        src="/espada-optimized.png" 
        alt="Espada izquierda" 
        className="fixed left-0 top-1/4 h-64 transform -rotate-12 opacity-100 pointer-events-none"
      />
      
      {/* Imagen decorativa derecha */}
      <img 
        src="/espada-optimized.png" 
        alt="Espada derecha" 
        className="fixed right-0 top-1/4 h-64 transform rotate-12 opacity-100 pointer-events-none"
      />

      {/* Sidebar y contenido de la página */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="relative">
        <Header onOpenSidebar={() => setSidebarOpen(true)} />
        <AlbumContent />
        <Footer />
      </div>
    </div>
  );
}
