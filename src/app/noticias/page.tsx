"use client";

import React from 'react';
import Image from 'next/image';

export default function NoticiasPage() {
  // Crear un array de 20 elementos para los cuadros
  const gridItems = Array.from({ length: 20 }, (_, i) => i + 1);

  // Títulos de ejemplo para cada noticia
  const titles = [
    'Nuevas reglas migratorias',
    'Visa EB-2 NIW: Oportunidad',
    'Casos de éxito recientes',
    'Requisitos para asilo',
    'Residencia por trabajo',
    'Inmigración y familia',
    'Noticias de USCIS',
    'Visas de estudiante',
    'Naturalización fácil',
    'Actualización de tarifas',
    'Documentos esenciales',
    'Entrevistas consulares',
    'Protección temporal',
    'Visas de inversión',
    'Renovación de green card',
    'Permiso de trabajo',
    'Ciudadanía para hijos',
    'Refugio y asilo',
    'Visas de turismo',
    'Consejos legales',
  ];

  // Resúmenes de ejemplo para cada noticia
  const summaries = [
    'Conoce los cambios más recientes en la legislación migratoria y cómo pueden afectarte.',
    'Descubre si calificas para esta visa y los beneficios que ofrece a profesionales.',
    'Historias reales de personas que lograron su sueño migratorio con éxito.',
    'Todo lo que necesitas saber para solicitar asilo político en el país.',
    'Pasos y requisitos para obtener la residencia a través de una oferta laboral.',
    'Opciones legales para la reunificación familiar y trámites más ágiles.',
    'Actualizaciones y comunicados oficiales del Servicio de Ciudadanía e Inmigración.',
    'Guía para estudiantes internacionales: requisitos, trámites y consejos.',
    'Simplifica tu proceso de naturalización con estos consejos prácticos.',
    'Infórmate sobre los nuevos costos y tarifas para trámites migratorios en 2024.',
    'Documentos imprescindibles para cualquier proceso migratorio exitoso.',
    'Prepárate para tu entrevista consular con estos tips y recomendaciones.',
    '¿Quiénes pueden acceder a protección temporal y cómo solicitarla?',
    'Oportunidades y requisitos para invertir y migrar legalmente.',
    'Renueva tu green card sin contratiempos siguiendo estos pasos.',
    'Solicita tu permiso de trabajo de forma rápida y sencilla.',
    'Requisitos y proceso para obtener la ciudadanía para tus hijos.',
    'Diferencias entre refugio y asilo, y cómo aplicar a cada uno.',
    'Consejos para obtener tu visa de turismo sin complicaciones.',
    'Recomendaciones legales para migrantes en todas las etapas del proceso.',
  ];

  // Asignación de imágenes
  const getBgImage = (num: number) => {
    const images = [
      "/noticias.png",
      "/noticia2.png",
      "/noticia3.png",
      "/noticia4.png",
      "/noticia5.png",
      "/inmigracion.png",
    ];
    return images[(num - 1) % images.length];
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#15396a] via-[#1e2a47] to-[#15396a] font-sans animate-fade-in-up">
      <div className="container mx-auto px-4 pt-10">
        <div className="flex flex-col items-center justify-center min-h-[20vh] mb-8">
          <section className="relative bg-gradient-to-br from-[#15396a] via-[#1e2a47] to-white/80 px-12 rounded-3xl shadow-2xl border-4 border-[#C8102E] flex flex-col items-center max-w-3xl mx-auto mb-8 overflow-hidden" style={{ paddingTop: '0.5cm', paddingBottom: '0.5cm' }}>
            <div className="absolute inset-0 bg-white/10 pointer-events-none rounded-3xl" />
            <div className="relative z-10 flex flex-col items-center w-full">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center font-['Poppins'] tracking-wide mb-8 drop-shadow-lg underline decoration-[#FFD700] decoration-4 underline-offset-[0.5cm]">
                Noticias, Reportajes y Artículos
              </h1>
              <p className="text-base md:text-lg text-white max-w-2xl text-center leading-relaxed font-['Inter'] mb-8 px-4 py-2 rounded-xl bg-[#112244]/60 shadow-md backdrop-blur-sm border border-[#FFD700]/30" style={{ marginTop: '0.4cm' }}>
                Mantente informado sobre las últimas actualizaciones en inmigración, casos de éxito y novedades legales que pueden afectar tu proceso migratorio.
              </p>
              <a
                href="#noticias-grid"
                className="flex items-center gap-2 bg-[#FFD700] text-[#C8102E] text-lg font-bold px-10 py-4 rounded-full shadow-lg hover:bg-[#C8102E] hover:text-white transition-all duration-300 border-2 border-white hover:border-[#FFD700] focus:outline-none focus:ring-4 focus:ring-[#FFD700]/40 mt-6"
                style={{ letterSpacing: '0.04em' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3" />
                </svg>
                Ver Noticias
              </a>
            </div>
          </section>
        </div>
        <div
          id="noticias-grid"
          className="grid grid-cols-1 md:grid-cols-3 gap-[2cm] justify-center"
          style={{ marginTop: '2cm' }}
        >
          {gridItems.map((num) => (
            <div
              key={num}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 flex flex-col items-stretch overflow-hidden border border-gray-200"
              style={{ width: 340, height: 340 }}
            >
              {/* Imagen superior */}
              <div className="w-full" style={{ height: '70%', position: 'relative' }}>
                <Image
                  src={getBgImage(num)}
                  alt={titles[num - 1]}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 340px) 100vw, 340px"
                  priority={num <= 3}
                />
              </div>
              {/* Contenido */}
              <div className="flex flex-col flex-1 pb-4 px-4 justify-end h-full">
                <div className="mt-auto">
                  <h2
                    className="text-lg font-bold text-[#C8102E] mb-2 uppercase leading-tight hover:underline hover:decoration-4 hover:underline-offset-4 transition-all duration-200 cursor-pointer"
                    style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '0.03em' }}
                  >
                    {titles[num - 1]}
                  </h2>
                  <p className="text-gray-700 text-sm mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {summaries[num - 1]}
                  </p>
                </div>
                <div className="flex justify-center mt-auto">
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FF0000] text-white text-xs font-bold rounded shadow hover:bg-red-700 transition-colors duration-200 cursor-pointer flex items-center gap-1 px-4 py-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" className="w-4 h-4">
                      <path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.117C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.386.569A2.994 2.994 0 0 0 .502 6.186C0 8.344 0 12 0 12s0 3.656.502 5.814a2.994 2.994 0 0 0 2.112 2.117C4.772 20.5 12 20.5 12 20.5s7.228 0 9.386-.569a2.994 2.994 0 0 0 2.112-2.117C24 15.656 24 12 24 12s0-3.656-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    <span>Ver más</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 