import Navbar from '@/components/Navbar';
import Image from 'next/image';
import AbogadosBanner from '@/components/AbogadosBanner';
import ImmigrationBlocks from '@/components/ImmigrationBlocks';
import ConsultaGratis from '@/components/ConsultaGratis';
import FooterContacto from '@/components/FooterContacto';

export default function Home() {
  return (
    <main className="pt-[160px]">
      <Navbar />
      <div className="mb-32">
        <AbogadosBanner />
      </div>
      <ConsultaGratis />
      {/* Sección visual elegante de bienvenida */}
      <section className="hero-section mb-32">
        <div className="hero-content">
          <div className="hero-img-box">
            <Image
              src="/servicios.png"
              alt="Servicios de inmigración"
              width={340}
              height={340}
              className="hero-img"
              priority
            />
          </div>
          <div className="hero-info">
            <h1 className="hero-title">Soluciones Migratorias Profesionales</h1>
            <p className="hero-desc">
              Asesoría experta y acompañamiento personalizado para tu proceso migratorio. <br />
              Confía en un equipo de abogados con experiencia, ética y resultados comprobados.
            </p>
            <ul className="hero-list">
              <li>✔️ Visas de trabajo y residencia</li>
              <li>✔️ Estrategias legales a tu medida</li>
              <li>✔️ Atención en español e inglés</li>
            </ul>
          </div>
        </div>
      </section>
      <div className="mb-32">
        <ImmigrationBlocks />
      </div>
      <div style={{ marginTop: '80px' }} />
      <FooterContacto />
    </main>
  );
}
