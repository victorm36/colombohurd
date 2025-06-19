"use client";

import React from 'react';
import Image from 'next/image';
import { AccordionListEAD } from '@/components/AccordionListEAD';

export default function AutorizacionEmpleoPage() {
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
            Autorización de Empleo en Estados Unidos
          </h1>
        </div>
        {/* Imagen a la derecha, más abajo */}
        <div className="flex-1 flex justify-center items-start" style={{ marginTop: '4cm' }}>
          <Image
            src="/autorizacion.png"
            alt="Autorización de Empleo en Estados Unidos"
            width={300}
            height={300}
            className="rounded-2xl shadow-2xl object-contain"
            priority
          />
        </div>
      </section>
      {/* Sección: Definición con espacio antes */}
      <section className="w-full max-w-5xl mx-auto mb-32 mt-24">
        <div className="animate-fade-in-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--azul-legal)] mb-6 text-left md:text-center tracking-tight uppercase" style={{letterSpacing: '.04em'}}>Definición</h2>
          <div className="p-10 shadow-[0_4px_32px_rgba(184,134,11,0.08)] border-l-4 border-[var(--dorado-elegante)] relative overflow-hidden" style={{borderRadius: 0, paddingLeft: '2.5rem', background: 'transparent'}}>
            {/* Línea decorativa sutil */}
            <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-[var(--dorado-elegante)] to-transparent opacity-70" style={{zIndex:1}} />
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed relative z-10">
              La Autorización de Empleo (Employment Authorization Document o EAD) es una tarjeta oficial emitida por el gobierno de Estados Unidos que permite a ciertos no-ciudadanos trabajar legalmente en el país durante un período determinado. Esta tarjeta sirve como prueba de autorización laboral ante empleadores y suele ser válida por uno a dos años, dependiendo del estatus migratorio del solicitante.
            </p>
          </div>
        </div>
      </section>

      {/* Sección: ¿Quiénes pueden aplicar? */}
      <section className="w-full max-w-5xl mx-auto mb-32 animate-fade-in-up flex flex-col items-center justify-center">
        <div style={{ height: '3.5rem' }} />
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--azul-legal)] mb-8 text-center tracking-tight uppercase" style={{letterSpacing: '.04em'}}>¿Quiénes pueden aplicar?</h2>
        <div className="w-full flex justify-center">
          {/* Acordeón Material UI */}
          <AccordionListEAD />
        </div>
      </section>

      {/* Sección: Cómo solicitar la EAD */}
      <section className="w-full max-w-5xl mx-auto mb-32 animate-fade-in-up flex flex-col items-center justify-center">
        <div style={{ height: '4rem' }} />
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--azul-legal)] mb-8 text-center tracking-tight uppercase" style={{letterSpacing: '.04em'}}>¿Cómo solicitar la EAD?</h2>
        <div className="w-full max-w-5xl mx-auto">
          <div className="p-10 shadow-[0_4px_32px_rgba(184,134,11,0.08)] border-l-4 border-[var(--dorado-elegante)] relative overflow-hidden mb-8" style={{borderRadius: 0, paddingLeft: '2.5rem', background: 'transparent'}}>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed relative z-10 mb-8">
              El proceso para obtener tu Autorización de Empleo (EAD) incluye una serie de pasos que deben seguirse con cuidado. Esta guía simplificada te orienta sobre lo esencial:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-separate border-spacing-y-3">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-lg md:text-xl font-bold text-[var(--azul-legal)] bg-transparent">Paso</th>
                    <th className="px-4 py-2 text-lg md:text-xl font-bold text-[var(--azul-legal)] bg-transparent">Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white/80 shadow-sm rounded-lg">
                    <td className="px-4 py-3 font-semibold text-[var(--azul-legal)] align-top">Completa el Formulario I-765</td>
                    <td className="px-4 py-3 text-gray-700">Asegúrate de llenar todos los campos requeridos con información precisa.</td>
                  </tr>
                  <tr className="bg-white/80 shadow-sm rounded-lg">
                    <td className="px-4 py-3 font-semibold text-[var(--azul-legal)] align-top">Reúne tus documentos</td>
                    <td className="px-4 py-3 text-gray-700">Necesitarás documentos de identidad, evidencia de tu estatus migratorio y fotografías tipo pasaporte.</td>
                  </tr>
                  <tr className="bg-white/80 shadow-sm rounded-lg">
                    <td className="px-4 py-3 font-semibold text-[var(--azul-legal)] align-top">Verifica si debes pagar una tarifa</td>
                    <td className="px-4 py-3 text-gray-700">Algunas personas están exentas, dependiendo de su situación migratoria.</td>
                  </tr>
                  <tr className="bg-white/80 shadow-sm rounded-lg">
                    <td className="px-4 py-3 font-semibold text-[var(--azul-legal)] align-top">Prepara tu solicitud</td>
                    <td className="px-4 py-3 text-gray-700">Asegúrate de que todos los formularios y documentos estén organizados y sin errores para evitar demoras.</td>
                  </tr>
                  <tr className="bg-white/80 shadow-sm rounded-lg">
                    <td className="px-4 py-3 font-semibold text-[var(--azul-legal)] align-top">Sigue tu proceso</td>
                    <td className="px-4 py-3 text-gray-700">Una vez enviada la solicitud, recibirás una confirmación y número de referencia para hacer seguimiento.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Pie de página tipo footer, ahora en tres columnas para mejor distribución */}
      <section className="w-full bg-[var(--azul-legal)] py-16 px-0 flex justify-center items-center" style={{ marginTop: '4cm' }}>
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-stretch justify-between h-full px-4 md:px-12 xl:px-24 gap-12">
          {/* Columna 1: Formulario */}
          <div className="flex flex-col justify-center items-start flex-1 min-w-[220px] gap-4">
            <h3 className="text-2xl font-bold text-white mb-1 uppercase tracking-wide">Formulario</h3>
            <a href="https://www.uscis.gov/es/i-765" target="_blank" rel="noopener noreferrer" className="inline-block bg-[var(--dorado-elegante)] text-[var(--azul-legal)] font-semibold px-6 py-3 rounded shadow hover:bg-yellow-400 transition mb-2 mt-2">I-765: Solicitud de Autorización de Empleo</a>
          </div>
          {/* Columna 2: Instrucciones y lista de cotejo */}
          <div className="flex flex-col justify-center items-start flex-1 min-w-[220px] gap-4">
            <h3 className="text-2xl font-bold text-white mb-1 uppercase tracking-wide">Guías y requisitos</h3>
            <a href="https://www.uscis.gov/es/i-765#instrucciones-especiales" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-yellow-200 transition">Instrucciones oficiales para completar el I-765</a>
            <a href="https://www.uscis.gov/es/formularios/guias-para-presentacion-de-formularios/lista-de-cotejo-sobre-evidencia-inicial-requerida-para-el-formulario-i-765-para-propositos" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-yellow-200 transition">Lista de cotejo de documentos requeridos</a>
          </div>
          {/* Columna 3: Portal y recursos */}
          <div className="flex flex-col justify-center items-start flex-1 min-w-[220px] gap-4">
            <h3 className="text-2xl font-bold text-white mb-1 uppercase tracking-wide">Portal y seguimiento</h3>
            <a href="https://my.uscis.gov/" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-[var(--azul-legal)] font-semibold px-6 py-3 rounded shadow hover:bg-gray-200 transition mb-2 mt-2">Crear cuenta y seguimiento de caso</a>
            <span className="text-white text-sm">En el portal de USCIS puedes crear tu cuenta, presentar solicitudes en línea y dar seguimiento a tu caso.</span>
            <a href="https://www.uscis.gov/es/i-765" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-yellow-200 transition">Página oficial de USCIS: I-765</a>
          </div>
        </div>
      </section>
    </main>
  );
} 