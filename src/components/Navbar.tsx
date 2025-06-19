'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [isServiciosOpen, setIsServiciosOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path;
  };

  const serviciosOptions = [
    { href: '/servicios/asilo', label: 'Asilo' },
    { href: '/servicios/autorizacion-empleo', label: 'Autorización de Empleo' },
    { href: '/servicios/green-card', label: 'Green Card' },
    { href: '/servicios/naturalizacion', label: 'Naturalización' },
    { href: '/servicios/perdon', label: 'Perdón' }
  ];

  return (
    <nav className="navbar">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1400px', margin: '0 auto', height: '80px', padding: '0 2rem' }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', height: '60px' }}>
          <Image src="/Logo.png" alt="Colombo & Hurd Logo" width={150} height={60} style={{ objectFit: 'contain', height: '60px', width: 'auto' }} priority />
        </Link>
        {/* Enlaces */}
        <div className="nav-links" style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', gap: '2.5rem' }}>
          <Link href="/" className={isActive('/') ? 'active' : ''}>
            Inicio
          </Link>
          <Link href="/informacion" className={isActive('/informacion') ? 'active' : ''}>
            Información
          </Link>
          <Link href="/equipo" className={isActive('/equipo') ? 'active' : ''}>
            Equipo
          </Link>
          <Link href="/noticias" className={isActive('/noticias') ? 'active' : ''}>
            Noticias
          </Link>
          
          {/* Dropdown Servicios */}
          <div 
            className="relative"
            onMouseEnter={() => setIsServiciosOpen(true)}
            onMouseLeave={() => setIsServiciosOpen(false)}
          >
            <button
              className={`servicios-btn flex items-center gap-1 ${isActive('/servicios') ? 'active' : ''}`}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white', fontSize: 'inherit', fontFamily: 'inherit', height: '100%', display: 'flex', alignItems: 'center' }}
            >
              Servicios
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${isServiciosOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            {isServiciosOpen && (
              <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                <div className="py-2">
                  {serviciosOptions.map((option) => (
                    <Link
                      key={option.href}
                      href={option.href}
                      className="dropdown-link block px-4 py-3 hover:bg-[#FFD700] hover:text-[#C8102E] transition-colors duration-200 font-medium"
                    >
                      {option.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 