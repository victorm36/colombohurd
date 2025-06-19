"use client";

import React from 'react';
import Image from 'next/image';

export default function NaturalizacionPage() {
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
            Naturalización en Estados Unidos
          </h1>
        </div>
        {/* Imagen a la derecha */}
        <div className="flex-1 flex justify-center items-start" style={{ marginTop: '4cm' }}>
          <Image
            src="/naturalizacion.png"
            alt="Naturalización en Estados Unidos"
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
              La naturalización es el proceso mediante el cual una persona extranjera, que ya es residente permanente legal, puede convertirse en ciudadano de los Estados Unidos. Este paso otorga derechos plenos como votar, obtener pasaporte estadounidense y acceder a ciertos beneficios federales.
            </p>
          </div>
        </div>
      </section>
      {/* Sección: Requisitos principales */}
      <section className="w-full max-w-5xl mx-auto mb-32">
        <div className="animate-fade-in-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-left md:text-center tracking-tight uppercase mt-24" style={{
            background: 'linear-gradient(90deg, #b8860b 20%, #1a365d 80%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 4px 24px rgba(184,134,11,0.10)',
            letterSpacing: '.04em'
          }}>Requisitos principales</h2>
          {/* Grilla de requisitos principales con el quinto centrado debajo de la segunda fila */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Fila 1 */}
            <div className="flex items-start gap-4 p-6 bg-white/80 shadow-md border-l-4 border-[var(--dorado-elegante)] rounded-none">
              <span className="text-3xl text-[var(--dorado-elegante)] font-bold">1</span>
              <div>
                <h3 className="text-lg font-semibold text-[var(--azul-legal)] mb-1">Residencia permanente</h3>
                <p className="text-gray-700 text-base">Tener al menos 5 años como residente permanente (o 3 si estás casado con un ciudadano estadounidense).</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white/80 shadow-md border-l-4 border-[var(--dorado-elegante)] rounded-none">
              <span className="text-3xl text-[var(--dorado-elegante)] font-bold">2</span>
              <div>
                <h3 className="text-lg font-semibold text-[var(--azul-legal)] mb-1">Exámenes</h3>
                <p className="text-gray-700 text-base">Aprobar los exámenes de inglés y educación cívica.</p>
              </div>
            </div>
            {/* Fila 2 */}
            <div className="flex items-start gap-4 p-6 bg-white/80 shadow-md border-l-4 border-[var(--dorado-elegante)] rounded-none">
              <span className="text-3xl text-[var(--dorado-elegante)] font-bold">3</span>
              <div>
                <h3 className="text-lg font-semibold text-[var(--azul-legal)] mb-1">Carácter moral</h3>
                <p className="text-gray-700 text-base">Demostrar buen carácter moral.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white/80 shadow-md border-l-4 border-[var(--dorado-elegante)] rounded-none">
              <span className="text-3xl text-[var(--dorado-elegante)] font-bold">4</span>
              <div>
                <h3 className="text-lg font-semibold text-[var(--azul-legal)] mb-1">Presencia física</h3>
                <p className="text-gray-700 text-base">Tener presencia física continua en EE.UU.</p>
              </div>
            </div>
            {/* Fila 3: requisitos 5 y 6 */}
            <div className="flex items-start gap-4 p-6 bg-white/80 shadow-md border-l-4 border-[var(--dorado-elegante)] rounded-none">
              <span className="text-3xl text-[var(--dorado-elegante)] font-bold">5</span>
              <div>
                <h3 className="text-lg font-semibold text-[var(--azul-legal)] mb-1">Edad mínima</h3>
                <p className="text-gray-700 text-base">Ser mayor de 18 años.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white/80 shadow-md border-l-4 border-[var(--dorado-elegante)] rounded-none">
              <span className="text-3xl text-[var(--dorado-elegante)] font-bold">6</span>
              <div>
                <h3 className="text-lg font-semibold text-[var(--azul-legal)] mb-1">No tener antecedentes penales graves</h3>
                <p className="text-gray-700 text-base">No haber cometido delitos que impidan la naturalización, según la ley migratoria de EE.UU.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Sección: Recursos para prepararte */}
      <section className="w-full max-w-5xl mx-auto mb-32">
        <div className="animate-fade-in-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-left md:text-center tracking-tight uppercase mt-24" style={{
            background: 'linear-gradient(90deg, #1a365d 20%, #b8860b 80%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 4px 24px rgba(26,54,93,0.10)',
            letterSpacing: '.04em'
          }}>Recursos para prepararte</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10 text-left md:text-center">
            Convertirte en ciudadano estadounidense requiere preparación, especialmente para los exámenes de inglés y educación cívica. Estos recursos te ayudarán a estudiar de forma práctica y confiable:
          </p>
          <ul className="flex flex-col gap-8">
            <li className="bg-white/80 shadow-md border-l-4 border-[var(--dorado-elegante)] p-6">
              <span className="font-bold text-[var(--azul-legal)] text-lg block mb-1">Guía de estudio oficial del USCIS</span>
              <span className="text-gray-700 block mb-2">Incluye las 100 preguntas del examen cívico con respuestas, vocabulario clave y ejemplos de lectura y escritura.</span>
              <a href="https://www.uscis.gov/es/ciudadania/estudie-para-el-examen-de-ciudadania/materiales-para-el-examen-de-educacion-civica" target="_blank" rel="noopener noreferrer" className="text-[var(--dorado-elegante)] underline font-semibold hover:text-[var(--azul-legal)] transition">Guía de estudio y materiales oficiales – USCIS</a>
            </li>
            <li className="bg-white/80 shadow-md border-l-4 border-[var(--dorado-elegante)] p-6">
              <span className="font-bold text-[var(--azul-legal)] text-lg block mb-1">Videos explicativos sobre el proceso de naturalización</span>
              <span className="text-gray-700 block mb-2">Serie de cuatro videos que muestran cómo es la entrevista, el examen y qué esperar en cada etapa.</span>
              <a href="https://www.uscis.gov/es/ciudadania/estudie-para-el-examen-de-ciudadania/videos-del-proceso-de-naturalizacion" target="_blank" rel="noopener noreferrer" className="text-[var(--dorado-elegante)] underline font-semibold hover:text-[var(--azul-legal)] transition">Videos del proceso de naturalización – USCIS</a>
            </li>
            <li className="bg-white/80 shadow-md border-l-4 border-[var(--dorado-elegante)] p-6">
              <span className="font-bold text-[var(--azul-legal)] text-lg block mb-1">Aplicación móvil oficial del USCIS</span>
              <span className="text-gray-700 block mb-2">Estudia desde tu celular con preguntas interactivas, audios y simulacros del examen. Disponible para Android y iOS.</span>
              <a href="https://www.uscis.gov/es/ciudadania/estudie-para-el-examen-de-ciudadania/aplicacion-movil-uscis-civics-test-study-tools" target="_blank" rel="noopener noreferrer" className="text-[var(--dorado-elegante)] underline font-semibold hover:text-[var(--azul-legal)] transition">App USCIS Civics Test Study Tools</a>
            </li>
            <li className="bg-white/80 shadow-md border-l-4 border-[var(--dorado-elegante)] p-6">
              <span className="font-bold text-[var(--azul-legal)] text-lg block mb-1">Curso gratuito en línea de USAHello</span>
              <span className="text-gray-700 block mb-2">Curso estructurado para inmigrantes, con explicaciones claras y ejercicios prácticos.</span>
              <a href="https://www.usahello.org/es/ciudadania/curso-de-ciudadania/" target="_blank" rel="noopener noreferrer" className="text-[var(--dorado-elegante)] underline font-semibold hover:text-[var(--azul-legal)] transition">Curso de ciudadanía – USAHello</a>
            </li>
            <li className="bg-white/80 shadow-md border-l-4 border-[var(--dorado-elegante)] p-6">
              <span className="font-bold text-[var(--azul-legal)] text-lg block mb-1">Simulacros de examen en línea</span>
              <span className="text-gray-700 block mb-2">Practica con preguntas reales del examen cívico y mide tu progreso.</span>
              <a href="https://www.uscis.gov/es/ciudadania/estudie-para-el-examen-de-ciudadania/examen-de-practica" target="_blank" rel="noopener noreferrer" className="text-[var(--dorado-elegante)] underline font-semibold hover:text-[var(--azul-legal)] transition">Examen de práctica – USCIS</a>
            </li>
          </ul>
        </div>
      </section>
      {/* Pie de página: Recursos y enlaces útiles para la naturalización, en tres columnas, solo enlaces subrayados y colores coherentes */}
      <section className="w-full bg-[var(--azul-legal)] py-16 px-0 flex justify-center items-center" style={{ marginTop: '4cm' }}>
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-stretch justify-between h-full px-4 md:px-12 xl:px-24 gap-12">
          {/* Columna 1: Formularios y pasos */}
          <div className="flex flex-col justify-center items-start flex-1 min-w-[220px] gap-4">
            <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide">Formulario y pasos</h3>
            <a href="https://www.uscis.gov/es/n-400" target="_blank" rel="noopener noreferrer" className="underline text-white hover:text-[var(--dorado-elegante)] transition mb-1">Formulario N-400 – Solicitud de Naturalización</a>
            <a href="https://www.uscis.gov/es/ciudadania/aprenda-sobre-ciudadania/10-pasos-hacia-la-naturalizacion" target="_blank" rel="noopener noreferrer" className="underline text-white hover:text-[var(--dorado-elegante)] transition">10 pasos hacia la naturalización – USCIS</a>
          </div>
          {/* Columna 2: Materiales de estudio */}
          <div className="flex flex-col justify-center items-start flex-1 min-w-[220px] gap-4">
            <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide">Materiales de estudio</h3>
            <a href="https://www.uscis.gov/es/ciudadania/encuentre-materiales-de-estudio-y-recursos" target="_blank" rel="noopener noreferrer" className="underline text-white hover:text-[var(--dorado-elegante)] transition mb-1">Materiales de estudio para el examen cívico y de inglés</a>
            <a href="https://www.usahello.org/es/ciudadania/curso-de-ciudadania/" target="_blank" rel="noopener noreferrer" className="underline text-white hover:text-[var(--dorado-elegante)] transition">Curso gratuito de ciudadanía – USAHello</a>
          </div>
          {/* Columna 3: Guía post-naturalización */}
          <div className="flex flex-col justify-center items-start flex-1 min-w-[220px] gap-4">
            <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide">Después de naturalizarte</h3>
            <a href="https://www.uscis.gov/es/ciudadania/una-vez-que-se-haya-convertido-en-ciudadano-estadounidense" target="_blank" rel="noopener noreferrer" className="underline text-[var(--dorado-elegante)] hover:text-white transition">Guía: ¿Qué hacer después de naturalizarte?</a>
          </div>
        </div>
      </section>
    </main>
  );
} 