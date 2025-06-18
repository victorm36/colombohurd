'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="navbar">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1400px', margin: '0 auto', height: '80px', padding: '0 2rem' }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', height: '60px' }}>
          <Image src="/logo.png" alt="Colombo & Hurd Logo" width={150} height={60} style={{ objectFit: 'contain', height: '60px', width: 'auto' }} priority />
        </Link>
        {/* Enlaces */}
        <div className="nav-links" style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', gap: '2.5rem' }}>
          <Link href="/" className={isActive('/') ? 'active' : ''}>
            Inicio
          </Link>
          <Link href="/informacion" className={isActive('/informacion') ? 'active' : ''}>
            Información
          </Link>
          <Link href="/informacion" className={isActive('/informacion') ? 'active' : ''}>
            Prueba Info
          </Link>
          <Link href="/equipo" className={isActive('/equipo') ? 'active' : ''}>
            Equipo
          </Link>
          <Link href="/eb2-niw" className={isActive('/eb2-niw') ? 'active' : ''}>
            Noticias
          </Link>
          <Link href="/contacto" className={isActive('/contacto') ? 'active' : ''}>
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 