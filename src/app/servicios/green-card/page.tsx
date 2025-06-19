"use client";

import React from 'react';
import Image from 'next/image';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function GreenCardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef] flex flex-col items-center pt-16 pb-10 px-2">
      {/* Sección superior: Título e imagen */}
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
            Green Card
          </h1>
        </div>
        {/* Imagen a la derecha, más abajo */}
        <div className="flex-1 flex justify-center items-start" style={{ marginTop: '4cm' }}>
          <Image
            src="/greencard.png"
            alt="Green Card"
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
              La Green Card (Tarjeta de Residente Permanente) permite a personas extranjeras vivir y trabajar legalmente en Estados Unidos de forma indefinida. Es un paso clave hacia la estabilidad migratoria y, en muchos casos, hacia la ciudadanía.
            </p>
          </div>
        </div>
      </section>
      {/* Sección: Vías de obtención */}
      <section className="w-full max-w-5xl mx-auto mb-32">
        <div className="animate-fade-in-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-left md:text-center tracking-tight uppercase mt-24" style={{
            background: 'linear-gradient(90deg, #b8860b 20%, #1a365d 80%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 4px 24px rgba(184,134,11,0.10)',
            letterSpacing: '.04em'
          }}>Vías de obtención</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 text-left md:text-center max-w-3xl mx-auto">
            Puedes solicitar la Green Card a través de distintas categorías:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-y-4">
              <tbody className="bg-transparent">
                <tr>
                  <td className="align-top bg-white/80 shadow-md border-l-4 border-[var(--dorado-elegante)] p-6 w-1/2">
                    <span className="block text-xl font-bold text-[var(--azul-legal)] mb-2">Familiar</span>
                    <span className="text-gray-700">Cónyuge, padres o hijos de ciudadanos/residentes</span>
                  </td>
                  <td className="align-top bg-white/80 shadow-md border-l-4 border-[var(--dorado-elegante)] p-6 w-1/2">
                    <span className="block text-xl font-bold text-[var(--azul-legal)] mb-2">Empleo</span>
                    <span className="text-gray-700">Trabajadores calificados, inversionistas o con habilidades especiales</span>
                  </td>
                </tr>
                <tr>
                  <td className="align-top bg-white/80 shadow-md border-l-4 border-[var(--dorado-elegante)] p-6 w-1/2">
                    <span className="block text-xl font-bold text-[var(--azul-legal)] mb-2">Refugiado o asilado</span>
                    <span className="text-gray-700">Personas con protección humanitaria</span>
                  </td>
                  <td className="align-top bg-white/80 shadow-md border-l-4 border-[var(--dorado-elegante)] p-6 w-1/2">
                    <span className="block text-xl font-bold text-[var(--azul-legal)] mb-2">Lotería de visas</span>
                    <span className="text-gray-700">Seleccionados por el programa de diversidad</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* Sección: Preguntas frecuentes */}
      <section className="w-full max-w-5xl mx-auto mb-32">
        <div className="animate-fade-in-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-left md:text-center tracking-tight uppercase mt-24" style={{
            background: 'linear-gradient(90deg, #1a365d 20%, #b8860b 80%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 4px 24px rgba(26,54,93,0.10)',
            letterSpacing: '.04em'
          }}>Preguntas frecuentes</h2>
          <div className="w-full flex flex-col gap-4 mt-8">
            <Accordion sx={{ background: 'rgba(255,255,255,0.85)', boxShadow: '0 4px 24px rgba(26,54,93,0.06)', borderLeft: '4px solid var(--dorado-elegante)', borderRadius: 0 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'var(--dorado-elegante)' }} />}>
                <Typography fontWeight={700} color="var(--azul-legal)">¿Cómo saber si califico para una Green Card?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary">
                  Puedes calificar si tienes un familiar directo ciudadano o residente, una oferta de empleo, estatus de refugiado o asilado, o si fuiste seleccionado en la lotería de visas. Cada vía tiene requisitos específicos.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ background: 'rgba(255,255,255,0.85)', boxShadow: '0 4px 24px rgba(26,54,93,0.06)', borderLeft: '4px solid var(--dorado-elegante)', borderRadius: 0 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'var(--dorado-elegante)' }} />}>
                <Typography fontWeight={700} color="var(--azul-legal)">¿Si me caso con un ciudadano estadounidense obtengo la Green Card automáticamente?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary">
                  No. Aunque el matrimonio con un ciudadano puede ser una vía, deberás pasar por un proceso de solicitud, entrevistas y verificación para demostrar que la relación es legítima.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ background: 'rgba(255,255,255,0.85)', boxShadow: '0 4px 24px rgba(26,54,93,0.06)', borderLeft: '4px solid var(--dorado-elegante)', borderRadius: 0 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'var(--dorado-elegante)' }} />}>
                <Typography fontWeight={700} color="var(--azul-legal)">¿Qué es una Green Card condicional?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary">
                  Es una residencia temporal de 2 años otorgada cuando el matrimonio tiene menos de dos años al momento de la aprobación. Debe convertirse en permanente antes de su vencimiento.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ background: 'rgba(255,255,255,0.85)', boxShadow: '0 4px 24px rgba(26,54,93,0.06)', borderLeft: '4px solid var(--dorado-elegante)', borderRadius: 0 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'var(--dorado-elegante)' }} />}>
                <Typography fontWeight={700} color="var(--azul-legal)">¿Cuánto tiempo debo esperar para solicitar la ciudadanía?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary">
                  Generalmente, puedes aplicar después de 5 años como residente permanente. Si obtuviste la Green Card por matrimonio con un ciudadano, el plazo puede reducirse a 3 años.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ background: 'rgba(255,255,255,0.85)', boxShadow: '0 4px 24px rgba(26,54,93,0.06)', borderLeft: '4px solid var(--dorado-elegante)', borderRadius: 0 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'var(--dorado-elegante)' }} />}>
                <Typography fontWeight={700} color="var(--azul-legal)">¿Qué pasa si pierdo mi Green Card o cambia mi situación?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary">
                  Debes solicitar una renovación o reemplazo con el Formulario I-90. Si enfrentas problemas legales o cambias de categoría, es importante consultar con un abogado migratorio.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </section>
      {/* Pie de página: Recursos y enlaces útiles para la Green Card, ahora en tres columnas */}
      <section className="w-full bg-[var(--azul-legal)] py-16 px-0 flex justify-center items-center" style={{ marginTop: '4cm' }}>
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-stretch justify-between h-full px-4 md:px-12 xl:px-24 gap-12">
          {/* Columna 1: Formularios principales */}
          <div className="flex flex-col justify-center items-start flex-1 min-w-[220px] gap-4">
            <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide">Formularios clave</h3>
            <a href="https://www.uscis.gov/sites/default/files/document/forms/i-485.pdf" target="_blank" rel="noopener noreferrer" className="bg-white text-[var(--azul-legal)] font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition mb-2">Formulario I-485 (PDF)</a>
            <a href="https://www.uscis.gov/sites/default/files/document/forms/i-485instr.pdf" target="_blank" rel="noopener noreferrer" className="underline text-white hover:text-[var(--dorado-elegante)] transition">Instrucciones para el Formulario I-485</a>
            <a href="https://www.uscis.gov/sites/default/files/document/forms/i-90.pdf" target="_blank" rel="noopener noreferrer" className="underline text-white hover:text-[var(--dorado-elegante)] transition">Formulario I-90 (Renovación/Reemplazo)</a>
          </div>
          {/* Columna 2: Requisitos y guías */}
          <div className="flex flex-col justify-center items-start flex-1 min-w-[220px] gap-4">
            <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide">Requisitos y guías</h3>
            <a href="https://www.uscis.gov/es/formularios/guias-para-presentacion-de-formularios/lista-de-cotejo-sobre-evidencia-inicial-requerida-para-el-formulario-i-485-para-propositos" target="_blank" rel="noopener noreferrer" className="underline text-white hover:text-[var(--dorado-elegante)] transition mb-1">Lista de cotejo de evidencia inicial</a>
            <a href="https://www.uscis.gov/es/residencia-permanente-tarjeta-verde/categorias-de-elegibilidad-a-la-residencia-permanente" target="_blank" rel="noopener noreferrer" className="underline text-white hover:text-[var(--dorado-elegante)] transition mb-1">Categorías de elegibilidad</a>
            <a href="https://www.uscis.gov/es/residencia-permanente-tarjeta-verde/despues-de-que-le-otorgamos-la-tarjeta-de-residencia-permanente" target="_blank" rel="noopener noreferrer" className="underline text-white hover:text-[var(--dorado-elegante)] transition">Guía: ¿Qué hacer después de obtener la Green Card?</a>
          </div>
          {/* Columna 3: Portales y seguimiento */}
          <div className="flex flex-col justify-center items-start flex-1 min-w-[220px] gap-4">
            <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide">Portales y recursos</h3>
            <a href="https://www.uscis.gov/es/green-card" target="_blank" rel="noopener noreferrer" className="bg-white text-[var(--azul-legal)] font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition mb-2">Portal oficial de la Green Card</a>
            <a href="https://my.uscis.gov/" target="_blank" rel="noopener noreferrer" className="bg-[var(--dorado-elegante)] text-white font-semibold px-6 py-3 rounded shadow hover:bg-yellow-600 transition mb-2">Crear cuenta y seguimiento de caso</a>
            <a href="https://travel.state.gov/content/travel/en/us-visas/immigrate/diversity-visa-program-entry.html" target="_blank" rel="noopener noreferrer" className="underline text-white hover:text-[var(--dorado-elegante)] transition">Programa de Lotería de Visas</a>
          </div>
        </div>
      </section>
    </main>
  );
} 