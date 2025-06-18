"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import emailjs from 'emailjs-com';

export default function ConsultaForm() {
  // Estado para los campos del formulario
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [nivel, setNivel] = useState("");

  // Estado para las preguntas (mantener nombres simples)
  const [oferta, setOferta] = useState<number|null>(null); // Pregunta 1
  const [titulo, setTitulo] = useState<number|null>(null); // Pregunta 2
  const [experiencia, setExperiencia] = useState<number|null>(null); // Pregunta 3
  const [impacto, setImpacto] = useState<number|null>(null); // Pregunta 4
  const [residencia, setResidencia] = useState<number|null>(null); // Pregunta 5

  // Estado para mostrar/ocultar el modal
  const [mostrarModal, setMostrarModal] = useState(false);

  // Estado para la visa posible
  const [visaPosible, setVisaPosible] = useState('');

  // Limpiar los valores al desmontar el componente
  useEffect(() => {
    return () => {
      setNombre("");
      setCorreo("");
      setTelefono("");
      setNivel("");
      setOferta(null);
      setTitulo(null);
      setExperiencia(null);
      setImpacto(null);
      setResidencia(null);
    };
  }, []);

  // Función para limpiar todo el formulario
  const limpiarFormulario = () => {
    setNombre("");
    setCorreo("");
    setTelefono("");
    setNivel("");
    setOferta(null);
    setTitulo(null);
    setExperiencia(null);
    setImpacto(null);
    setResidencia(null);
    // Limpiar los radio buttons manualmente
    const inputs = document.querySelectorAll('input[type="radio"]');
    inputs.forEach((input) => {
      (input as HTMLInputElement).checked = false;
    });
    // Limpiar los campos de texto
    const textos = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"]');
    textos.forEach((input) => {
      (input as HTMLInputElement).value = '';
    });
  };

  // Lista de combinaciones exactas y su resultado
  const combinaciones = [
    { nivel: 'tecnico', oferta: 0, titulo: 0, experiencia: 0, impacto: 0, residencia: 0, visa: 'H2B, EB3 (no-skilled)' },
    { nivel: 'tecnico', oferta: 0, titulo: 0, experiencia: 0, impacto: 0, residencia: 1, visa: 'H2B, EB3 (no-skilled)' },
    { nivel: 'tecnico', oferta: 0, titulo: 0, experiencia: 0, impacto: 1, residencia: 0, visa: 'H2B, EB3 (no-skilled)' },
    { nivel: 'tecnico', oferta: 0, titulo: 0, experiencia: 0, impacto: 1, residencia: 1, visa: 'H2B, EB3 (no-skilled)' },
    { nivel: 'tecnico', oferta: 0, titulo: 0, experiencia: 1, impacto: 0, residencia: 0, visa: 'H2B, EB3 (no-skilled)' },
    { nivel: 'tecnico', oferta: 0, titulo: 0, experiencia: 1, impacto: 0, residencia: 1, visa: 'H2B, EB3 (no-skilled)' },
    { nivel: 'tecnico', oferta: 0, titulo: 0, experiencia: 1, impacto: 1, residencia: 0, visa: 'H2B, EB3 (no-skilled)' },
    { nivel: 'tecnico', oferta: 0, titulo: 0, experiencia: 1, impacto: 1, residencia: 1, visa: 'H2B, EB3 (no-skilled)' },
    { nivel: 'tecnico', oferta: 0, titulo: 1, experiencia: 0, impacto: 0, residencia: 0, visa: 'H2B, EB3 (no-skilled)' },
    { nivel: 'tecnico', oferta: 0, titulo: 1, experiencia: 0, impacto: 0, residencia: 1, visa: 'H2B, EB3 (no-skilled)' },
    { nivel: 'tecnico', oferta: 0, titulo: 1, experiencia: 0, impacto: 1, residencia: 0, visa: 'H2B, EB3 (no-skilled)' },
    { nivel: 'tecnico', oferta: 0, titulo: 1, experiencia: 0, impacto: 1, residencia: 1, visa: 'H2B, EB3 (no-skilled)' },
    { nivel: 'tecnico', oferta: 0, titulo: 1, experiencia: 1, impacto: 0, residencia: 0, visa: 'H2B, EB3 (no-skilled)' },
    { nivel: 'tecnico', oferta: 0, titulo: 1, experiencia: 1, impacto: 0, residencia: 1, visa: 'H2B, EB3 (no-skilled)' },
    { nivel: 'tecnico', oferta: 0, titulo: 1, experiencia: 1, impacto: 1, residencia: 0, visa: 'H2B, EB3 (no-skilled)' },
    { nivel: 'tecnico', oferta: 0, titulo: 1, experiencia: 1, impacto: 1, residencia: 1, visa: 'H2B, EB3 (no-skilled)' },
    { nivel: 'tecnico', oferta: 1, titulo: 0, experiencia: 0, impacto: 0, residencia: 0, visa: 'No aplica' },
    { nivel: 'tecnico', oferta: 1, titulo: 0, experiencia: 0, impacto: 0, residencia: 1, visa: 'No aplica' },
    { nivel: 'tecnico', oferta: 1, titulo: 0, experiencia: 0, impacto: 1, residencia: 0, visa: 'No aplica' },
    { nivel: 'tecnico', oferta: 1, titulo: 0, experiencia: 0, impacto: 1, residencia: 1, visa: 'No aplica' },
    { nivel: 'tecnico', oferta: 1, titulo: 0, experiencia: 1, impacto: 0, residencia: 0, visa: 'No aplica' },
    { nivel: 'tecnico', oferta: 1, titulo: 0, experiencia: 1, impacto: 0, residencia: 1, visa: 'No aplica' },
    { nivel: 'tecnico', oferta: 1, titulo: 0, experiencia: 1, impacto: 1, residencia: 0, visa: 'No aplica' },
    { nivel: 'tecnico', oferta: 1, titulo: 0, experiencia: 1, impacto: 1, residencia: 1, visa: 'No aplica' },
    { nivel: 'tecnico', oferta: 1, titulo: 1, experiencia: 0, impacto: 0, residencia: 0, visa: 'No aplica' },
    { nivel: 'tecnico', oferta: 1, titulo: 1, experiencia: 0, impacto: 0, residencia: 1, visa: 'No aplica' },
    { nivel: 'tecnico', oferta: 1, titulo: 1, experiencia: 0, impacto: 1, residencia: 0, visa: 'No aplica' },
    { nivel: 'tecnico', oferta: 1, titulo: 1, experiencia: 0, impacto: 1, residencia: 1, visa: 'No aplica' },
    { nivel: 'tecnico', oferta: 1, titulo: 1, experiencia: 1, impacto: 0, residencia: 0, visa: 'No aplica' },
    { nivel: 'tecnico', oferta: 1, titulo: 1, experiencia: 1, impacto: 0, residencia: 1, visa: 'No aplica' },
    { nivel: 'tecnico', oferta: 1, titulo: 1, experiencia: 1, impacto: 1, residencia: 0, visa: 'No aplica' },
    { nivel: 'tecnico', oferta: 1, titulo: 1, experiencia: 1, impacto: 1, residencia: 1, visa: 'No aplica' },
    { nivel: 'universitario', oferta: 0, titulo: 0, experiencia: 0, impacto: 0, residencia: 0, visa: 'H1B, EB2, EB3' },
    { nivel: 'universitario', oferta: 0, titulo: 0, experiencia: 0, impacto: 0, residencia: 1, visa: 'H1B, EB2, EB3' },
    { nivel: 'universitario', oferta: 0, titulo: 0, experiencia: 0, impacto: 1, residencia: 0, visa: 'H1B, EB2, EB3' },
    { nivel: 'universitario', oferta: 0, titulo: 0, experiencia: 0, impacto: 1, residencia: 1, visa: 'H1B, EB2, EB3' },
    { nivel: 'universitario', oferta: 0, titulo: 0, experiencia: 1, impacto: 0, residencia: 0, visa: 'H1B, EB2, EB3' },
    { nivel: 'universitario', oferta: 0, titulo: 0, experiencia: 1, impacto: 0, residencia: 1, visa: 'H1B, EB2, EB3' },
    { nivel: 'universitario', oferta: 0, titulo: 0, experiencia: 1, impacto: 1, residencia: 0, visa: 'H1B, EB2, EB3' },
    { nivel: 'universitario', oferta: 0, titulo: 0, experiencia: 1, impacto: 1, residencia: 1, visa: 'H1B, EB2, EB3' },
    { nivel: 'universitario', oferta: 0, titulo: 1, experiencia: 0, impacto: 0, residencia: 0, visa: 'EB3' },
    { nivel: 'universitario', oferta: 0, titulo: 1, experiencia: 0, impacto: 0, residencia: 1, visa: 'EB3' },
    { nivel: 'universitario', oferta: 0, titulo: 1, experiencia: 0, impacto: 1, residencia: 0, visa: 'EB3' },
    { nivel: 'universitario', oferta: 0, titulo: 1, experiencia: 0, impacto: 1, residencia: 1, visa: 'EB3' },
    { nivel: 'universitario', oferta: 0, titulo: 1, experiencia: 1, impacto: 0, residencia: 0, visa: 'EB3' },
    { nivel: 'universitario', oferta: 0, titulo: 1, experiencia: 1, impacto: 0, residencia: 1, visa: 'EB3' },
    { nivel: 'universitario', oferta: 0, titulo: 1, experiencia: 1, impacto: 1, residencia: 0, visa: 'EB3' },
    { nivel: 'universitario', oferta: 0, titulo: 1, experiencia: 1, impacto: 1, residencia: 1, visa: 'EB3' },
    { nivel: 'universitario', oferta: 1, titulo: 0, experiencia: 0, impacto: 0, residencia: 0, visa: 'EB2 NIW' },
    { nivel: 'universitario', oferta: 1, titulo: 0, experiencia: 0, impacto: 0, residencia: 1, visa: 'EB2 NIW' },
    { nivel: 'universitario', oferta: 1, titulo: 0, experiencia: 0, impacto: 1, residencia: 0, visa: 'No aplica' },
    { nivel: 'universitario', oferta: 1, titulo: 0, experiencia: 0, impacto: 1, residencia: 1, visa: 'No aplica' },
    { nivel: 'universitario', oferta: 1, titulo: 0, experiencia: 1, impacto: 0, residencia: 0, visa: 'EB2 NIW' },
    { nivel: 'universitario', oferta: 1, titulo: 0, experiencia: 1, impacto: 0, residencia: 1, visa: 'EB2 NIW' },
    { nivel: 'universitario', oferta: 1, titulo: 0, experiencia: 1, impacto: 1, residencia: 0, visa: 'No aplica' },
    { nivel: 'universitario', oferta: 1, titulo: 0, experiencia: 1, impacto: 1, residencia: 1, visa: 'No aplica' },
    { nivel: 'universitario', oferta: 1, titulo: 1, experiencia: 0, impacto: 0, residencia: 0, visa: 'EB2 NIW' },
    { nivel: 'universitario', oferta: 1, titulo: 1, experiencia: 0, impacto: 0, residencia: 1, visa: 'EB2 NIW' },
    { nivel: 'universitario', oferta: 1, titulo: 1, experiencia: 0, impacto: 1, residencia: 0, visa: 'No aplica' },
    { nivel: 'universitario', oferta: 1, titulo: 1, experiencia: 0, impacto: 1, residencia: 1, visa: 'No aplica' },
    { nivel: 'universitario', oferta: 1, titulo: 1, experiencia: 1, impacto: 0, residencia: 0, visa: 'EB2 NIW' },
    { nivel: 'universitario', oferta: 1, titulo: 1, experiencia: 1, impacto: 0, residencia: 1, visa: 'EB2 NIW' },
    { nivel: 'universitario', oferta: 1, titulo: 1, experiencia: 1, impacto: 1, residencia: 0, visa: 'No aplica' },
    { nivel: 'universitario', oferta: 1, titulo: 1, experiencia: 1, impacto: 1, residencia: 1, visa: 'No aplica' },
    { nivel: 'postgrado', oferta: 0, titulo: 0, experiencia: 0, impacto: 0, residencia: 0, visa: 'H1B, EB2, EB3' },
    { nivel: 'postgrado', oferta: 0, titulo: 0, experiencia: 0, impacto: 0, residencia: 1, visa: 'H1B, EB2, EB3' },
    { nivel: 'postgrado', oferta: 0, titulo: 0, experiencia: 0, impacto: 1, residencia: 0, visa: 'H1B, EB2, EB3' },
    { nivel: 'postgrado', oferta: 0, titulo: 0, experiencia: 0, impacto: 1, residencia: 1, visa: 'H1B, EB2, EB3' },
    { nivel: 'postgrado', oferta: 0, titulo: 0, experiencia: 1, impacto: 0, residencia: 0, visa: 'H1B, EB2, EB3' },
    { nivel: 'postgrado', oferta: 0, titulo: 0, experiencia: 1, impacto: 0, residencia: 1, visa: 'H1B, EB2, EB3' },
    { nivel: 'postgrado', oferta: 0, titulo: 0, experiencia: 1, impacto: 1, residencia: 0, visa: 'H1B, EB2, EB3' },
    { nivel: 'postgrado', oferta: 0, titulo: 0, experiencia: 1, impacto: 1, residencia: 1, visa: 'H1B, EB2, EB3' },
    { nivel: 'postgrado', oferta: 0, titulo: 1, experiencia: 0, impacto: 0, residencia: 0, visa: 'EB3' },
    { nivel: 'postgrado', oferta: 0, titulo: 1, experiencia: 0, impacto: 0, residencia: 1, visa: 'EB3' },
    { nivel: 'postgrado', oferta: 0, titulo: 1, experiencia: 0, impacto: 1, residencia: 0, visa: 'EB3' },
    { nivel: 'postgrado', oferta: 0, titulo: 1, experiencia: 0, impacto: 1, residencia: 1, visa: 'EB3' },
    { nivel: 'postgrado', oferta: 0, titulo: 1, experiencia: 1, impacto: 0, residencia: 0, visa: 'EB3' },
    { nivel: 'postgrado', oferta: 0, titulo: 1, experiencia: 1, impacto: 0, residencia: 1, visa: 'EB3' },
    { nivel: 'postgrado', oferta: 0, titulo: 1, experiencia: 1, impacto: 1, residencia: 0, visa: 'EB3' },
    { nivel: 'postgrado', oferta: 0, titulo: 1, experiencia: 1, impacto: 1, residencia: 1, visa: 'EB3' },
    { nivel: 'postgrado', oferta: 1, titulo: 0, experiencia: 0, impacto: 0, residencia: 0, visa: 'EB2 NIW' },
    { nivel: 'postgrado', oferta: 1, titulo: 0, experiencia: 0, impacto: 0, residencia: 1, visa: 'EB2 NIW' },
    { nivel: 'postgrado', oferta: 1, titulo: 0, experiencia: 0, impacto: 1, residencia: 0, visa: 'No aplica' },
    { nivel: 'postgrado', oferta: 1, titulo: 0, experiencia: 0, impacto: 1, residencia: 1, visa: 'No aplica' },
    { nivel: 'postgrado', oferta: 1, titulo: 0, experiencia: 1, impacto: 0, residencia: 0, visa: 'EB2 NIW' },
    { nivel: 'postgrado', oferta: 1, titulo: 0, experiencia: 1, impacto: 0, residencia: 1, visa: 'EB2 NIW' },
    { nivel: 'postgrado', oferta: 1, titulo: 0, experiencia: 1, impacto: 1, residencia: 0, visa: 'No aplica' },
    { nivel: 'postgrado', oferta: 1, titulo: 0, experiencia: 1, impacto: 1, residencia: 1, visa: 'No aplica' },
    { nivel: 'postgrado', oferta: 1, titulo: 1, experiencia: 0, impacto: 0, residencia: 0, visa: 'EB2 NIW' },
    { nivel: 'postgrado', oferta: 1, titulo: 1, experiencia: 0, impacto: 0, residencia: 1, visa: 'EB2 NIW' },
    { nivel: 'postgrado', oferta: 1, titulo: 1, experiencia: 0, impacto: 1, residencia: 0, visa: 'No aplica' },
    { nivel: 'postgrado', oferta: 1, titulo: 1, experiencia: 0, impacto: 1, residencia: 1, visa: 'No aplica' },
    { nivel: 'postgrado', oferta: 1, titulo: 1, experiencia: 1, impacto: 0, residencia: 0, visa: 'EB2 NIW' },
    { nivel: 'postgrado', oferta: 1, titulo: 1, experiencia: 1, impacto: 0, residencia: 1, visa: 'EB2 NIW' },
    { nivel: 'postgrado', oferta: 1, titulo: 1, experiencia: 1, impacto: 1, residencia: 0, visa: 'No aplica' },
    { nivel: 'postgrado', oferta: 1, titulo: 1, experiencia: 1, impacto: 1, residencia: 1, visa: 'No aplica' },
  ];

  // Función para determinar la visa posible según la combinación exacta
  function determinarVisaExacta() {
    const resultado = combinaciones.find(c =>
      c.nivel === nivel &&
      c.oferta === oferta &&
      c.titulo === titulo &&
      c.experiencia === experiencia &&
      c.impacto === impacto &&
      c.residencia === residencia
    );
    return resultado ? resultado.visa : 'No aplica';
  }

  // Manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Construir el objeto con los datos
    const datos = {
      to_email: 'colombo.hurdlaw01@gmail.com',
      nombre,
      correo,
      telefono,
      nivel,
      oferta,
      titulo,
      experiencia,
      impacto,
      residencia,
      visaPosible: determinarVisaExacta()
    };

    // Enviar el correo con EmailJS
    try {
      await emailjs.send(
        'service_oyt1tpk',
        'template_0dl3ykt',
        datos,
        '6Sfh92g7sR2X2Sbdb'
      );
    } catch (error) {
      // Puedes mostrar un mensaje de error si lo deseas
      console.error('Error enviando el correo:', error);
    }

    setVisaPosible(datos.visaPosible);
    setMostrarModal(true);
  };

  // Manejar el cierre del modal
  const handleCerrarModal = () => {
    setMostrarModal(false);
    limpiarFormulario();
  };

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
        <form className="w-full flex flex-col gap-12 items-center" onSubmit={handleSubmit}>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-[var(--azul-legal)] tracking-tight text-center w-full">
            <span className="border-b-4 border-[var(--dorado-elegante)] pb-1">1. Información Personal</span>
          </h1>
          {/* Información Personal */}
          <div className="flex flex-col gap-8 w-full">
            <div>
              <label className="block font-semibold mb-2 text-[var(--azul-legal)] text-lg md:text-xl">Nombre</label>
              <input type="text" name="nombre" className="w-full rounded-xl border border-blue-200 focus:border-[var(--dorado-elegante)] focus:ring-2 focus:ring-[var(--dorado-elegante)] bg-blue-50/60 px-6 py-4 text-lg md:text-xl transition-all duration-200 outline-none" 
                value={nombre} onChange={e => setNombre(e.target.value)} />
            </div>
            <div>
              <label className="block font-semibold mb-2 text-[var(--azul-legal)] text-lg md:text-xl">Correo electrónico</label>
              <input type="email" name="email" className="w-full rounded-xl border border-blue-200 focus:border-[var(--dorado-elegante)] focus:ring-2 focus:ring-[var(--dorado-elegante)] bg-blue-50/60 px-6 py-4 text-lg md:text-xl transition-all duration-200 outline-none" 
                value={correo} onChange={e => setCorreo(e.target.value)} />
            </div>
            <div>
              <label className="block font-semibold mb-2 text-[var(--azul-legal)] text-lg md:text-xl">Teléfono</label>
              <input type="tel" name="telefono" className="w-full rounded-xl border border-blue-200 focus:border-[var(--dorado-elegante)] focus:ring-2 focus:ring-[var(--dorado-elegante)] bg-blue-50/60 px-6 py-4 text-lg md:text-xl transition-all duration-200 outline-none" 
                value={telefono} onChange={e => setTelefono(e.target.value)} />
            </div>
            <div>
              <label className="block font-semibold mb-3 text-[var(--azul-legal)] text-lg md:text-xl">Nivel académico</label>
              <div className="flex flex-col gap-4 mt-2">
                <label className="flex items-center gap-3 text-base md:text-lg">
                  <input type="radio" name="nivel" value="tecnico" className="accent-[var(--azul-legal)]" 
                    checked={nivel === "tecnico"} onChange={() => setNivel("tecnico")} />
                  Técnico / Tecnológico
                </label>
                <label className="flex items-center gap-3 text-base md:text-lg">
                  <input type="radio" name="nivel" value="universitario" className="accent-[var(--azul-legal)]" 
                    checked={nivel === "universitario"} onChange={() => setNivel("universitario")} />
                  Universitario
                </label>
                <label className="flex items-center gap-3 text-base md:text-lg">
                  <input type="radio" name="nivel" value="postgrado" className="accent-[var(--azul-legal)]" 
                    checked={nivel === "postgrado"} onChange={() => setNivel("postgrado")} />
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
                  <input type="radio" name="oferta" value="si" className="accent-[var(--azul-legal)]" onChange={() => setOferta(0)} checked={oferta === 0} /> Sí
                </label>
                <label className="flex items-center gap-3 text-base md:text-lg">
                  <input type="radio" name="oferta" value="no" className="accent-[var(--azul-legal)]" onChange={() => setOferta(1)} checked={oferta === 1} /> No
                </label>
              </div>
            </div>
            <div>
              <label className="font-semibold text-[var(--azul-legal)] text-lg md:text-xl mb-3 block">2. ¿Su trabajo requiere título universitario?</label>
              <div className="flex gap-10 mt-2 ml-2">
                <label className="flex items-center gap-3 text-base md:text-lg">
                  <input type="radio" name="titulo" value="si" className="accent-[var(--azul-legal)]" onChange={() => setTitulo(0)} checked={titulo === 0} /> Sí
                </label>
                <label className="flex items-center gap-3 text-base md:text-lg">
                  <input type="radio" name="titulo" value="no" className="accent-[var(--azul-legal)]" onChange={() => setTitulo(1)} checked={titulo === 1} /> No
                </label>
              </div>
            </div>
            <div>
              <label className="font-semibold text-[var(--azul-legal)] text-lg md:text-xl mb-3 block">3. ¿Posee experiencia laboral de al menos dos años en su campo?</label>
              <div className="flex gap-10 mt-2 ml-2">
                <label className="flex items-center gap-3 text-base md:text-lg">
                  <input type="radio" name="experiencia" value="si" className="accent-[var(--azul-legal)]" onChange={() => setExperiencia(0)} checked={experiencia === 0} /> Sí
                </label>
                <label className="flex items-center gap-3 text-base md:text-lg">
                  <input type="radio" name="experiencia" value="no" className="accent-[var(--azul-legal)]" onChange={() => setExperiencia(1)} checked={experiencia === 1} /> No
                </label>
              </div>
            </div>
            <div>
              <label className="font-semibold text-[var(--azul-legal)] text-lg md:text-xl mb-3 block">4. ¿Puede demostrar que su trabajo tiene un impacto significativo en EE.UU.?</label>
              <div className="flex gap-10 mt-2 ml-2">
                <label className="flex items-center gap-3 text-base md:text-lg">
                  <input type="radio" name="impacto" value="si" className="accent-[var(--azul-legal)]" onChange={() => setImpacto(0)} checked={impacto === 0} /> Sí
                </label>
                <label className="flex items-center gap-3 text-base md:text-lg">
                  <input type="radio" name="impacto" value="no" className="accent-[var(--azul-legal)]" onChange={() => setImpacto(1)} checked={impacto === 1} /> No
                </label>
              </div>
            </div>
            {/* Pregunta 5: Lugar de residencia */}
            <div>
              <label className="font-semibold text-[var(--azul-legal)] text-lg md:text-xl mb-3 block">5. ¿Cuál es su lugar de residencia?</label>
              <div className="flex gap-10 mt-2 ml-2">
                <label className="flex items-center gap-3 text-base md:text-lg">
                  <input type="radio" name="residencia" value="estados_unidos" className="accent-[var(--azul-legal)]" onChange={() => setResidencia(0)} checked={residencia === 0} /> Estados Unidos
                </label>
                <label className="flex items-center gap-3 text-base md:text-lg">
                  <input type="radio" name="residencia" value="colombia" className="accent-[var(--azul-legal)]" onChange={() => setResidencia(1)} checked={residencia === 1} /> Colombia
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
      {/* Modal de respuestas */}
      {mostrarModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full relative animate-fade-in">
            <h2 className="text-2xl font-bold mb-6 text-center text-[var(--azul-legal)]">Resultado</h2>
            <div className="mb-8 text-xl font-bold text-center text-[var(--azul-legal)]">
              {nombre ? `${nombre}, puedes optar por las siguientes visas:` : 'Puedes optar por las siguientes visas:'}
              <br />
              <span className="text-[var(--dorado-elegante)]">{visaPosible}</span>
            </div>
            <button onClick={handleCerrarModal} className="w-full py-3 rounded-lg bg-[var(--azul-legal)] text-white text-lg font-semibold shadow-md hover:bg-blue-900 transition-all duration-300 uppercase tracking-wider focus:outline-none focus:ring-4 focus:ring-blue-200">Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
} 