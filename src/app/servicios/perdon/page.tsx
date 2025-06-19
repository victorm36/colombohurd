"use client";

import React from 'react';
import Image from 'next/image';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function PerdonPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef] flex flex-col items-center pt-16 pb-10 px-2">
      {/* Sección superior: título e imagen */}
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
            Perdón migratorio en Estados Unidos
          </h1>
        </div>
        {/* Imagen a la derecha */}
        <div className="flex-1 flex justify-center items-start" style={{ marginTop: '4cm' }}>
          <Image
            src="/perdon.png"
            alt="Perdón migratorio en Estados Unidos"
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
              El perdón migratorio (o waiver) es un recurso legal que permite a personas consideradas inadmisibles por las leyes migratorias de EE.UU. solicitar la eliminación o reducción de su prohibición de entrada o permanencia en el país. Es clave para quienes desean obtener una visa o la residencia permanente a pesar de antecedentes migratorios complicados.
            </p>
          </div>
        </div>
      </section>

      {/* Sección: ¿Quiénes pueden solicitarlo? */}
      <section className="w-full max-w-5xl mx-auto mb-32">
        <div className="animate-fade-in-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-left md:text-center tracking-tight uppercase mt-24" style={{
            background: 'linear-gradient(90deg, #b8860b 20%, #1a365d 80%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 4px 24px rgba(184,134,11,0.10)',
            letterSpacing: '.04em'
          }}>¿Quiénes pueden solicitarlo?</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 text-left md:text-center">
            Personas con familiares ciudadanos o residentes permanentes que sufrirían dificultades extremas si se niega el perdón.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/80 shadow-md border-l-4 border-[var(--dorado-elegante)] p-6 flex items-start gap-4">
              <span className="text-2xl text-[var(--dorado-elegante)] font-bold">•</span>
              <div>
                <h3 className="text-lg font-semibold text-[var(--azul-legal)] mb-1">Entradas irregulares o estadías prolongadas</h3>
              </div>
            </div>
            <div className="bg-white/80 shadow-md border-l-4 border-[var(--dorado-elegante)] p-6 flex items-start gap-4">
              <span className="text-2xl text-[var(--dorado-elegante)] font-bold">•</span>
              <div>
                <h3 className="text-lg font-semibold text-[var(--azul-legal)] mb-1">Deportaciones previas</h3>
              </div>
            </div>
            <div className="bg-white/80 shadow-md border-l-4 border-[var(--dorado-elegante)] p-6 flex items-start gap-4">
              <span className="text-2xl text-[var(--dorado-elegante)] font-bold">•</span>
              <div>
                <h3 className="text-lg font-semibold text-[var(--azul-legal)] mb-1">Uso de documentos falsos</h3>
              </div>
            </div>
            <div className="bg-white/80 shadow-md border-l-4 border-[var(--dorado-elegante)] p-6 flex items-start gap-4">
              <span className="text-2xl text-[var(--dorado-elegante)] font-bold">•</span>
              <div>
                <h3 className="text-lg font-semibold text-[var(--azul-legal)] mb-1">Ciertas condenas penales</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Requisitos generales como acordeón único */}
      <section className="w-full max-w-5xl mx-auto mb-32">
        <div className="animate-fade-in-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-left md:text-center tracking-tight uppercase mt-24" style={{
            background: 'linear-gradient(90deg, #1a365d 20%, #b8860b 80%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 4px 24px rgba(26,54,93,0.10)',
            letterSpacing: '.04em'
          }}>Requisitos generales</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 text-left md:text-center">
            Para solicitar un perdón migratorio en EE.UU. es fundamental cumplir con ciertos requisitos legales y documentales. Consulta la lista completa a continuación:
          </p>
          <div className="w-full flex flex-col gap-4">
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon className="text-[var(--dorado-elegante)]" />}>
                <Typography className="font-bold text-[var(--azul-legal)]">Ver lista completa de requisitos</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    <span className="font-semibold text-[var(--azul-legal)]">Completar el formulario correspondiente:</span> Debes llenar y firmar el formulario adecuado (I-601, I-601A o I-212) según tu caso, usando la edición vigente. <a href="https://www.uscis.gov/es/i-601" target="_blank" rel="noopener noreferrer" className="text-[var(--dorado-elegante)] underline font-semibold hover:text-[var(--azul-legal)] transition ml-1">Ver formularios oficiales</a>
                  </li>
                  <li>
                    <span className="font-semibold text-[var(--azul-legal)]">Demostrar sufrimiento extremo de un familiar calificado:</span> Debes probar que un cónyuge o padre/madre ciudadano o residente sufriría dificultades extremas si se niega el perdón. Incluye informes médicos, pruebas económicas, cartas, etc.
                  </li>
                  <li>
                    <span className="font-semibold text-[var(--azul-legal)]">Presentar evidencia sólida y documentación de respaldo:</span> Incluye documentos biográficos, pruebas de relación familiar, antecedentes migratorios, sentencias judiciales, cartas explicativas y traducciones certificadas.
                  </li>
                  <li>
                    <span className="font-semibold text-[var(--azul-legal)]">Pagar la tarifa establecida por USCIS:</span> El costo varía según el formulario (I-601: $1,050, I-601A: $795, I-212: $1,175). El pago es final y puede hacerse por cheque, giro postal o tarjeta.
                  </li>
                  <li>
                    <span className="font-semibold text-[var(--azul-legal)]">Asistir a la cita de datos biométricos (si es requerida):</span> USCIS puede citarte para tomar huellas, foto y firma como parte del proceso.
                  </li>
                  <li>
                    <span className="font-semibold text-[var(--azul-legal)]">No tener causales de inadmisibilidad no perdonables:</span> Ciertos delitos graves, terrorismo o fraude a la ciudadanía no pueden ser eximidos. Consulta tu caso con un abogado migratorio.
                  </li>
                  <li>
                    <span className="font-semibold text-[var(--azul-legal)]">Cumplir con requisitos adicionales según el tipo de perdón:</span> Por ejemplo, para el I-601A debes estar físicamente presente en EE.UU. y tener un caso de visa pendiente. Para el I-212, debes haber recibido una orden de deportación y solicitar permiso para reingresar.
                  </li>
                </ol>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </section>
    </main>
  );
} 