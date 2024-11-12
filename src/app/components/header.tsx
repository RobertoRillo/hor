import React from 'react';
import { Menu } from 'lucide-react';

interface HeaderProps {
  onOpenSidebar: () => void;
}

export function Header({ onOpenSidebar }: HeaderProps) {
  return (
    <header className="bg-gray-900 border-b border-gray-800 p-4 flex justify-between items-center">
      <button onClick={onOpenSidebar} className="text-gray-500 hover:text-white">
        <Menu size={24} />
      </button>
      {/* Imagen en lugar de texto */}
      <img src="lol.ico" alt="Logo" className="h-20" /> {/* Ajusta el tamaño según sea necesario */}
      <div className="w-6"></div> {/* Placeholder para alineación */}
    </header>
  );
}
