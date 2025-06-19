import React from 'react';
import FooterContacto from '@/components/FooterContacto';
import Link from 'next/link';
import TestimoniosCarrusel from '@/components/TestimoniosCarrusel';

export default function InformacionPage() {
  return (
    <main>
      <div style={{ height: '80px' }} />
      <section className="section" style={{ padding: 0, marginBottom: 0 }}>
        <div className="flex flex-col md:flex-row gap-0 shadow-lg overflow-hidden min-h-[400px] w-full">
          {/* Columna izquierda: Información H1B */}
          <div className="flex-1 bg-[var(--azul-legal)] text-white p-10 md:p-20 flex flex-col justify-center min-h-[400px]">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white animate-pulse" style={{ 
              background: 'linear-gradient(45deg, #ffffff, #fbbf24, #ffffff)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'gradient 3s ease infinite'
            }}>
              Visa H1B
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-white/90 animate-fade-in" style={{
              animation: 'fadeInUp 1s ease-out'
            }}>
              Permite a profesionales extranjeros trabajar en Estados Unidos en ocupaciones especializadas. Es la visa más solicitada por empresas para atraer talento internacional calificado.
            </p>
          </div>
          {/* Columna derecha: Video H1B */}
          <div className="flex-1 bg-white flex items-center justify-center p-8 md:p-20 min-h-[400px]">
            <div className="flex items-center justify-center w-full h-full">
              <video
                src="/H1B.mp4"
                controls
                style={{ maxWidth: '100%', maxHeight: '340px', boxShadow: '0 4px 16px rgba(0,0,0,0.10)' }}
              >
                Tu navegador no soporta el video.
              </video>
            </div>
          </div>
        </div>

        {/* Segunda fila: Visa H2B, información a la derecha */}
        <div className="flex flex-col md:flex-row gap-0 shadow-lg overflow-hidden min-h-[400px] w-full mt-16">
          {/* Columna izquierda: Video H2B */}
          <div className="flex-1 bg-white flex items-center justify-center p-8 md:p-20 min-h-[400px]">
            <div className="flex items-center justify-center w-full h-full">
              <video
                src="/H2B.mp4"
                controls
                style={{ maxWidth: '100%', maxHeight: '340px', boxShadow: '0 4px 16px rgba(0,0,0,0.10)' }}
              >
                Tu navegador no soporta el video.
              </video>
            </div>
          </div>
          {/* Columna derecha: Información H2B */}
          <div className="flex-1 bg-[var(--azul-legal)] text-white p-10 md:p-20 flex flex-col justify-center min-h-[400px]">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white animate-pulse" style={{ 
              background: 'linear-gradient(45deg, #ffffff, #fbbf24, #ffffff)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'gradient 3s ease infinite'
            }}>
              Visa H2B
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-white/90 animate-fade-in" style={{
              animation: 'fadeInUp 1s ease-out'
            }}>
              Dirigida a trabajadores temporales no agrícolas para empleos estacionales o de corta duración. Ideal para trabajos que requieren personal adicional durante períodos específicos del año.
            </p>
          </div>
        </div>

        {/* Tercera fila: Visa EB2, información a la izquierda */}
        <div className="flex flex-col md:flex-row gap-0 shadow-lg overflow-hidden min-h-[400px] w-full mt-16">
          {/* Columna izquierda: Información EB2 */}
          <div className="flex-1 bg-[var(--azul-legal)] text-white p-10 md:p-20 flex flex-col justify-center min-h-[400px]">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white animate-pulse" style={{ 
              background: 'linear-gradient(45deg, #ffffff, #fbbf24, #ffffff)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'gradient 3s ease infinite'
            }}>
              Visa EB2
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-white/90 animate-fade-in" style={{
              animation: 'fadeInUp 1s ease-out'
            }}>
              Para profesionales con títulos avanzados o habilidades excepcionales que buscan residencia permanente. Requiere patrocinio de empleador o demostración de habilidad excepcional.
            </p>
          </div>
          {/* Columna derecha: Video EB2 */}
          <div className="flex-1 bg-white flex items-center justify-center p-8 md:p-20 min-h-[400px]">
            <div className="flex items-center justify-center w-full h-full">
              <video
                src="/EB2.mp4"
                controls
                style={{ maxWidth: '100%', maxHeight: '340px', boxShadow: '0 4px 16px rgba(0,0,0,0.10)' }}
              >
                Tu navegador no soporta el video.
              </video>
            </div>
          </div>
        </div>

        {/* Cuarta fila: Visa EB2-NIW, información a la derecha */}
        <div className="flex flex-col md:flex-row gap-0 shadow-lg overflow-hidden min-h-[400px] w-full mt-16">
          {/* Columna izquierda: Video EB2-NIW */}
          <div className="flex-1 bg-white flex items-center justify-center p-8 md:p-20 min-h-[400px]">
            <div className="flex items-center justify-center w-full h-full">
              <video
                src="/EB2NIW.mp4"
                controls
                style={{ maxWidth: '100%', maxHeight: '340px', boxShadow: '0 4px 16px rgba(0,0,0,0.10)' }}
              >
                Tu navegador no soporta el video.
              </video>
            </div>
          </div>
          {/* Columna derecha: Información EB2-NIW */}
          <div className="flex-1 bg-[var(--azul-legal)] text-white p-10 md:p-20 flex flex-col justify-center min-h-[400px]">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white animate-pulse" style={{ 
              background: 'linear-gradient(45deg, #ffffff, #fbbf24, #ffffff)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'gradient 3s ease infinite'
            }}>
              Visa EB2-NIW
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-white/90 animate-fade-in" style={{
              animation: 'fadeInUp 1s ease-out'
            }}>
              Permite solicitar residencia permanente sin oferta laboral si demuestras que tu trabajo beneficia al interés nacional. Ideal para investigadores, científicos y profesionales destacados.
            </p>
          </div>
        </div>

        {/* Quinta fila: Visa EB3, información a la izquierda */}
        <div className="flex flex-col md:flex-row gap-0 shadow-lg overflow-hidden min-h-[400px] w-full mt-16">
          {/* Columna izquierda: Información EB3 */}
          <div className="flex-1 bg-[var(--azul-legal)] text-white p-10 md:p-20 flex flex-col justify-center min-h-[400px]">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white animate-pulse" style={{
              background: 'linear-gradient(45deg, #ffffff, #fbbf24, #ffffff)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'gradient 3s ease infinite'
            }}>
              Visa EB3
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-white/90 animate-fade-in" style={{
              animation: 'fadeInUp 1s ease-out'
            }}>
              La visa EB3 permite a trabajadores calificados, no calificados y profesionales obtener la residencia permanente en Estados Unidos a través de una oferta laboral. Es ideal para quienes buscan oportunidades de empleo en diversas áreas, incluso sin título universitario. Requiere una oferta de trabajo y el patrocinio de un empleador estadounidense.
            </p>
          </div>
          {/* Columna derecha: Video EB3 */}
          <div className="flex-1 bg-white flex items-center justify-center p-8 md:p-20 min-h-[400px]">
            <div className="flex items-center justify-center w-full h-full">
              <video
                src="/EB3.mp4"
                controls
                style={{ maxWidth: '100%', maxHeight: '340px', boxShadow: '0 4px 16px rgba(0,0,0,0.10)' }}
              >
                Tu navegador no soporta el video.
              </video>
            </div>
          </div>
        </div>
        {/* Espacio antes de testimonios */}
        <div style={{ marginTop: '64px' }} />
        <TestimoniosCarrusel />
      </section>
      {/* Espacio extra antes del footer */}
      <div style={{ marginTop: '80px' }} />
      {/* Línea dorada animada de separación */}
      <div className="w-full flex justify-center">
        <div className="h-1 bg-[var(--dorado-elegante)] rounded animate-grow-line" style={{ width: '220px' }} />
      </div>
      <FooterContacto />
      <Link href="/informacion">Prueba Info</Link>
    </main>
  );
} 