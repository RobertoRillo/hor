// sidebar.tsx
import React from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Artistas', href: '/artists' },
    { label: 'Merch', href: '/notfound' }, // Si no tienes página aún, crea una
    { label: 'Galería', href: '/notfound' }, // Si no tienes página aún, crea una
    { label: 'Shows', href: '/notfound' }, // Si no tienes página aún, crea una
  ];

  return (
    <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
      <div className="p-5">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-white">
          <X size={24} />
        </button>
        <nav className="mt-8 space-y-4">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="block text-lg hover:text-red-500 transition-colors duration-200">
            {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
