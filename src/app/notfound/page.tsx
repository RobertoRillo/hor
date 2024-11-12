"use client";
import React, { useState } from 'react';
import { Sidebar } from '../components/sidebar';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export default function NotFoundPage() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col bg-black text-gray-300 font-mono relative overflow-hidden bg-fixed bg-center bg-no-repeat bg-cover bg-[url('/espada-optimized.png')]">
            {/* Fondo con ruido y decoraciones */}
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
            
            {/* Sidebar y contenido */}
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            {/* Contenido principal */}
            <div className="flex flex-col flex-grow relative">
                <Header onOpenSidebar={() => setSidebarOpen(true)} />

                <main className="flex flex-col items-center justify-center flex-grow text-center px-4">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-red-500 mb-4">404</h1>
                    <p className="text-xl sm:text-2xl md:text-3xl mb-6">Not Found</p>
                    <p className="text-gray-400 text-base sm:text-lg">
                    </p>
                </main>

                <Footer />
            </div>
        </div>
    );
}
