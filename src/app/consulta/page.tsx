import React from 'react';
import Link from 'next/link';

export default function ConsultaForm() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-20 px-2 md:px-4">
      <div className="w-full max-w-xl flex flex-col items-center mx-auto">
        <div className="flex justify-center w-full mb-10">
          <Link href="/">
            <button className="w-48 py-3 rounded-lg bg-[var(--azul-legal)] text-white text-lg font-semibold shadow-md hover:bg-blue-900 transition-all duration-300 uppercase tracking-wider focus:outline-none focus:ring-4 focus:ring-blue-200">
              Regresar
            </button>
          </Link>
        </div>
        <form className="w-full flex flex-col gap-12 items-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-[var(--azul-legal)] tracking-tight text-center w-full">
            <span className="border-b-4 border-[var(--dorado-elegante)] pb-1">1. Información Personal</span>
          </h1>
          {/* Información Personal */}
          <div className="flex flex-col gap-8 w-full">
            <div>
              <label className="block font-semibold mb-2 text-[var(--azul-legal)] text-lg md:text-xl">Nombre</label>
              <input type="text" name="nombre" className="w-full rounded-xl border border-blue-200 focus:border-[var(--dorado-elegante)] focus:ring-2 focus:ring-[var(--dorado-elegante)] bg-blue-50/60 px-6 py-4 text-lg md:text-xl transition-all duration-200 outline-none" />
            </div>
            <div>
              <label className="block font-semibold mb-2 text-[var(--azul-legal)] text-lg md:text-xl">Correo electrónico</label>
              <input type="email" name="email" className="w-full rounded-xl border border-blue-200 focus:border-[var(--dorado-elegante)] focus:ring-2 focus:ring-[var(--dorado-elegante)] bg-blue-50/60 px-6 py-4 text-lg md:text-xl transition-all duration-200 outline-none" />
            </div>
            <div>
              <label className="block font-semibold mb-2 text-[var(--azul-legal)] text-lg md:text-xl">Teléfono</label>
              <input type="tel" name="telefono" className="w-full rounded-xl border border-blue-200 focus:border-[var(--dorado-elegante)] focus:ring-2 focus:ring-[var(--dorado-elegante)] bg-blue-50/60 px-6 py-4 text-lg md:text-xl transition-all duration-200 outline-none" />
            </div>
            <div>
              <label className="block font-semibold mb-3 text-[var(--azul-legal)] text-lg md:text-xl">Nivel académico</label>
              <div className="flex flex-col gap-4 mt-2">
                <label className="flex items-center gap-3 text-base md:text-lg">
                  <input type="radio" name="nivel" value="tecnico" className="accent-[var(--azul-legal)]" />
                  Técnico / Tecnológico
                </label>
                <label className="flex items-center gap-3 text-base md:text-lg">
                  <input type="radio" name="nivel" value="universitario" className="accent-[var(--azul-legal)]" />
                  Universitario
                </label>
                <label className="flex items-center gap-3 text-base md:text-lg">
                  <input type="radio" name="nivel" value="postgrado" className="accent-[var(--azul-legal)]" />
                  Postgrado (Maestría / Doctorado)
                </label>
              </div>
            </div>
          </div>

          {/* Título con salto de línea y separación */}
          <div className="w-full text-center mt-8 mb-2">
            <span className="block text-3xl md:text-4xl font-extrabold text-[var(--azul-legal)] tracking-tight border-b-4 border-[var(--dorado-elegante)] pb-1">
              2. Evaluación para Visa de
            </span>
            <span className="block text-3xl md:text-4xl font-extrabold text-[var(--azul-legal)] tracking-tight mt-4 border-b-4 border-[var(--dorado-elegante)] pb-1 w-max mx-auto">
              Trabajo
            </span>
          </div>
          <div className="flex flex-col gap-10 w-full">
            <div>
              <label className="font-semibold text-[var(--azul-legal)] text-lg md:text-xl mb-3 block">1. ¿Tiene una oferta laboral de una empresa en EE.UU.?</label>
              <div className="flex gap-10 mt-2 ml-2">
                <label className="flex items-center gap-3 text-base md:text-lg">
                  <input type="radio" name="oferta" value="si" className="accent-[var(--azul-legal)]" /> Sí
                </label>
                <label className="flex items-center gap-3 text-base md:text-lg">
                  <input type="radio" name="oferta" value="no" className="accent-[var(--azul-legal)]" /> No
                </label>
              </div>
            </div>
            <div>
              <label className="font-semibold text-[var(--azul-legal)] text-lg md:text-xl mb-3 block">2. ¿Su trabajo requiere título universitario?</label>
              <div className="flex gap-10 mt-2 ml-2">
                <label className="flex items-center gap-3 text-base md:text-lg">
                  <input type="radio" name="titulo" value="si" className="accent-[var(--azul-legal)]" /> Sí
                </label>
                <label className="flex items-center gap-3 text-base md:text-lg">
                  <input type="radio" name="titulo" value="no" className="accent-[var(--azul-legal)]" /> No
                </label>
              </div>
            </div>
            <div>
              <label className="font-semibold text-[var(--azul-legal)] text-lg md:text-xl mb-3 block">3. ¿Posee experiencia laboral de al menos dos años en su campo?</label>
              <div className="flex gap-10 mt-2 ml-2">
                <label className="flex items-center gap-3 text-base md:text-lg">
                  <input type="radio" name="experiencia" value="si" className="accent-[var(--azul-legal)]" /> Sí
                </label>
                <label className="flex items-center gap-3 text-base md:text-lg">
                  <input type="radio" name="experiencia" value="no" className="accent-[var(--azul-legal)]" /> No
                </label>
              </div>
            </div>
            <div>
              <label className="font-semibold text-[var(--azul-legal)] text-lg md:text-xl mb-3 block">4. ¿Puede demostrar que su trabajo tiene un impacto significativo en EE.UU.?</label>
              <div className="flex gap-10 mt-2 ml-2">
                <label className="flex items-center gap-3 text-base md:text-lg">
                  <input type="radio" name="impacto" value="si" className="accent-[var(--azul-legal)]" /> Sí
                </label>
                <label className="flex items-center gap-3 text-base md:text-lg">
                  <input type="radio" name="impacto" value="no" className="accent-[var(--azul-legal)]" /> No
                </label>
              </div>
            </div>
            {/* Pregunta 5: Lugar de residencia */}
            <div>
              <label className="font-semibold text-[var(--azul-legal)] text-lg md:text-xl mb-3 block">5. ¿Cuál es su lugar de residencia?</label>
              <div className="flex gap-10 mt-2 ml-2">
                <label className="flex items-center gap-3 text-base md:text-lg">
                  <input type="radio" name="residencia" value="estados_unidos" className="accent-[var(--azul-legal)]" /> Estados Unidos
                </label>
                <label className="flex items-center gap-3 text-base md:text-lg">
                  <input type="radio" name="residencia" value="colombia" className="accent-[var(--azul-legal)]" /> Colombia
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-14 w-full">
            <button type="submit" className="w-full max-w-md py-6 rounded-lg bg-[var(--azul-legal)] text-white text-2xl font-bold shadow-lg hover:bg-blue-900 transition-all duration-300 uppercase tracking-wider focus:outline-none focus:ring-4 focus:ring-blue-200">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 