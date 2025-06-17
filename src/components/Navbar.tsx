'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link href="/" className={isActive('/') ? 'active' : ''}>
          Inicio
        </Link>
        <Link href="/h1b" className={isActive('/h1b') ? 'active' : ''}>
          H1B
        </Link>
        <Link href="/h2b" className={isActive('/h2b') ? 'active' : ''}>
          H2B
        </Link>
        <Link href="/eb2" className={isActive('/eb2') ? 'active' : ''}>
          EB2
        </Link>
        <Link href="/eb2-niw" className={isActive('/eb2-niw') ? 'active' : ''}>
          EB2-NIW
        </Link>
        <Link href="/contacto" className={isActive('/contacto') ? 'active' : ''}>
          Contacto
        </Link>
      </div>
    </nav>
  );
};

export default Navbar; 