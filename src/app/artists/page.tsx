"use client";
import React, { useState } from 'react';
import { Sidebar } from '../components/sidebar';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import ArtistCards from './artists-cards';
import BackgroundDecor from '../components/background';

export default function ArtistsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-gray-300 font-mono relative overflow-hidden">
      <BackgroundDecor />
      {/* Sidebar y contenido de la página */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="relative flex flex-col flex-grow">
        <Header onOpenSidebar={() => setSidebarOpen(true)} />
        <ArtistCards />
        <Footer />
      </div>
    </div>
  );
}
