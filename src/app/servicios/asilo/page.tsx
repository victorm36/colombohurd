"use client";

import React from 'react';
import Image from 'next/image';

export default function AsiloPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef] flex flex-col items-center pt-16 pb-10 px-2">
      {/* Sección superior: título afirmativo e imagen */}
      <section className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 mb-20">
        {/* Título a la izquierda */}
        <div className="flex-1 flex flex-col justify-center items-start md:items-start mt-8 md:mt-0">
          <h1
            className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6"
            style={{
              background: 'linear-gradient(90deg, #1a365d 20%, #b8860b 80%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 4px 24px rgba(26,54,93,0.10)',
              fontFamily: 'Poppins, Inter, sans-serif',
              letterSpacing: '-0.03em',
              lineHeight: 1.1
            }}
          >
            Asilo en Estados Unidos
          </h1>
        </div>
        {/* Imagen a la derecha, más abajo */}
        <div className="flex-1 flex justify-center items-start" style={{ marginTop: '4cm' }}>
          <Image
            src="/asilo.png"
            alt="Asilo en Estados Unidos"
            width={300}
            height={300}
            className="rounded-2xl shadow-2xl object-contain"
            priority
          />
        </div>
      </section>

      {/* Sección: Definición con transición desde la izquierda y bordes rectos, visual elegante */}
      <section className="w-full max-w-5xl mx-auto mb-32">
        <div className="animate-fade-in-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--azul-legal)] mb-6 text-left md:text-center tracking-tight uppercase mt-24" style={{letterSpacing: '.04em'}}>Definición</h2>
          <div className="p-10 shadow-[0_4px_32px_rgba(184,134,11,0.08)] border-l-4 border-[var(--dorado-elegante)] relative overflow-hidden" style={{borderRadius: 0, paddingLeft: '2.5rem', background: 'transparent'}}>
            {/* Línea decorativa sutil */}
            <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-[var(--dorado-elegante)] to-transparent opacity-70" style={{zIndex:1}} />
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed relative z-10">
              El asilo es una protección legal y humanitaria que otorga Estados Unidos a personas que han sufrido persecución o temen ser perseguidas en su país de origen. Busca salvaguardar la vida, la libertad y la dignidad de quienes se ven obligados a huir por motivos reconocidos internacionalmente.
            </p>
          </div>
        </div>
      </section>

      {/* Sección: Causales de elegibilidad con tabla */}
      <section className="w-full max-w-5xl mx-auto mb-32">
        <div className="animate-fade-in-left">
          <h2
            className="text-3xl md:text-4xl font-bold mb-8 text-left md:text-center tracking-tight uppercase mt-24"
            style={{
              background: 'linear-gradient(90deg, #b8860b 20%, #1a365d 80%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 4px 24px rgba(184,134,11,0.10)',
              letterSpacing: '.04em'
            }}
          >
            Causales de elegibilidad
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-y-2">
              <thead>
                <tr>
                  <th className="px-6 py-4 text-lg font-bold text-left text-[var(--azul-legal)] bg-transparent">Causal</th>
                  <th className="px-6 py-4 text-lg font-bold text-left text-[var(--dorado-elegante)] bg-transparent">Descripción</th>
                </tr>
              </thead>
              <tbody className="bg-transparent">
                <tr className="bg-white/70 shadow-sm">
                  <td className="px-6 py-4 font-semibold text-[var(--dorado-elegante)] border-l-4 border-[var(--dorado-elegante)]">Raza</td>
                  <td className="px-6 py-4 text-gray-700">Persecución por motivos raciales.</td>
                </tr>
                <tr className="bg-white/70 shadow-sm">
                  <td className="px-6 py-4 font-semibold text-[var(--dorado-elegante)] border-l-4 border-[var(--dorado-elegante)]">Religión</td>
                  <td className="px-6 py-4 text-gray-700">Persecución por creencias religiosas.</td>
                </tr>
                <tr className="bg-white/70 shadow-sm">
                  <td className="px-6 py-4 font-semibold text-[var(--dorado-elegante)] border-l-4 border-[var(--dorado-elegante)]">Nacionalidad</td>
                  <td className="px-6 py-4 text-gray-700">Persecución por origen nacional.</td>
                </tr>
                <tr className="bg-white/70 shadow-sm">
                  <td className="px-6 py-4 font-semibold text-[var(--dorado-elegante)] border-l-4 border-[var(--dorado-elegante)]">Grupo social particular</td>
                  <td className="px-6 py-4 text-gray-700">Pertenencia a un grupo social vulnerable.</td>
                </tr>
                <tr className="bg-white/70 shadow-sm">
                  <td className="px-6 py-4 font-semibold text-[var(--dorado-elegante)] border-l-4 border-[var(--dorado-elegante)]">Opinión política</td>
                  <td className="px-6 py-4 text-gray-700">Persecución por ideas o posturas políticas.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Modalidades de solicitud */}
      <section className="w-full flex justify-center mb-32">
        <div className="w-full max-w-5xl animate-fade-in-left">
          <h2
            className="text-3xl md:text-4xl font-bold mb-10 text-left md:text-center tracking-tight uppercase mt-24"
            style={{
              background: 'linear-gradient(90deg, #1a365d 20%, #b8860b 80%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 4px 24px rgba(26,54,93,0.10)',
              letterSpacing: '.04em'
            }}
          >
            Modalidades de solicitud
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Afirmativo a la izquierda */}
            <div className="flex flex-col justify-between items-start p-8 shadow-md border-l-4 border-[var(--azul-legal)] min-h-[220px]" style={{borderRadius: 0, background: 'transparent'}}>
              <h3 className="text-2xl font-bold text-[var(--azul-legal)] mb-2 uppercase tracking-wide">Afirmativo</h3>
              <span className="text-sm text-gray-500 mb-2">(USCIS)</span>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-0">
                Se solicita directamente ante USCIS cuando la persona no está en proceso de deportación. Es un proceso voluntario y proactivo para quienes buscan protección antes de enfrentar procedimientos migratorios.
              </p>
            </div>
            {/* Defensivo a la derecha */}
            <div className="flex flex-col justify-between items-start p-8 shadow-md border-l-4 border-[var(--dorado-elegante)] min-h-[220px]" style={{borderRadius: 0, background: 'transparent'}}>
              <h3 className="text-2xl font-bold text-[var(--dorado-elegante)] mb-2 uppercase tracking-wide">Defensivo</h3>
              <span className="text-sm text-gray-500 mb-2">(proceso de deportación)</span>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-0">
                Se solicita como defensa ante un proceso de deportación en la corte de inmigración. Es una alternativa legal para quienes enfrentan procedimientos de remoción y buscan permanecer en Estados Unidos bajo protección.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección final: Formulario y recursos tipo pie de página global */}
      <section className="w-full bg-[var(--azul-legal)] py-16 px-0 flex justify-center items-center" style={{ marginTop: '4cm' }}>
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-stretch justify-between h-full px-4 md:px-12 xl:px-24 gap-12">
          {/* Columna 1: Formulario requerido */}
          <div className="flex flex-col justify-center items-start flex-1 w-1/2 gap-4">
            <h3 className="text-2xl font-bold text-white mb-1 uppercase tracking-wide">Formulario requerido</h3>
            <span className="font-bold text-3xl text-[var(--dorado-elegante)] mb-2">I-589</span>
            <p className="text-white/90 text-base mb-2 max-w-md">Este formulario es indispensable para solicitar asilo en EE.UU.</p>
            <a
              href="https://www.uscis.gov/sites/default/files/document/forms/i-589.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--dorado-elegante)] text-white font-bold px-6 py-3 rounded-lg shadow hover:bg-yellow-600 transition-colors duration-200 text-center mb-2"
              download
            >
              Descargar Formulario I-589
            </a>
          </div>
          {/* Columna 2: Recursos y más información */}
          <div className="flex flex-col justify-center items-start flex-1 w-1/2 gap-4">
            <h3 className="text-2xl font-bold text-white mb-1 uppercase tracking-wide">¿Necesitas más información?</h3>
            <p className="text-white/90 text-base mb-2 max-w-md">Encuentra recursos oficiales y respuestas a tus preguntas en el sitio oficial de USCIS.</p>
            <a
              href="https://www.uscis.gov/es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--dorado-elegante)] underline font-semibold hover:text-white transition-colors duration-200 text-lg"
            >
              Visita el sitio oficial de USCIS
            </a>
        </div>
      </div>
      </section>
    </main>
  );
} 