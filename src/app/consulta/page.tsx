"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import emailjs from 'emailjs-com';

const paises = [
  'Afganistán', 'Alemania', 'Argentina', 'Australia', 'Bolivia', 'Brasil', 'Canadá', 'Chile', 'China', 'Colombia', 'Costa Rica', 'Cuba', 'Ecuador', 'Egipto', 'El Salvador', 'España', 'Estados Unidos', 'Francia', 'Guatemala', 'Honduras', 'India', 'Italia', 'Japón', 'México', 'Nicaragua', 'Panamá', 'Paraguay', 'Perú', 'Portugal', 'Reino Unido', 'República Dominicana', 'Rusia', 'Uruguay', 'Venezuela', 'Otro'
];

export default function ConsultaForm() {
  // Fase 1
  const [nombre, setNombre] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [nacionalidad, setNacionalidad] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  // Fase 2
  const [fechaIngreso, setFechaIngreso] = useState("");
  const [asilo, setAsilo] = useState("");
  const [tiempoAsilo, setTiempoAsilo] = useState("");
  const [puertoEntrada, setPuertoEntrada] = useState("");
  const [puertoOtro, setPuertoOtro] = useState("");
  const [hijosEEUU, setHijosEEUU] = useState("");
  const [cantidadHijos, setCantidadHijos] = useState("");
  // Fase 3
  const [nivel, setNivel] = useState("");
  const [oferta, setOferta] = useState<number|null>(null);
  const [titulo, setTitulo] = useState<number|null>(null);
  const [experiencia, setExperiencia] = useState<number|null>(null);
  const [impacto, setImpacto] = useState<number|null>(null);
  const [residencia, setResidencia] = useState<number|null>(null);
  // Fase 4
  const [ocupacion, setOcupacion] = useState("");
  const [ocupacionOtro, setOcupacionOtro] = useState("");
  const [ingresos, setIngresos] = useState("");

  const [fase, setFase] = useState(1);
  const totalFases = 4;
  const [mostrarModal, setMostrarModal] = useState(false);
  const [visaPosible, setVisaPosible] = useState('');

  // Estado para almacenar todas las respuestas del usuario
  const [respuestasUsuario, setRespuestasUsuario] = useState({});

  // Validaciones por fase
  const validarFase = () => {
    if (fase === 1) {
      return nombre && fechaNacimiento && nacionalidad && correo && telefono;
    }
    if (fase === 2) {
      if (!fechaIngreso || !asilo || !puertoEntrada || !hijosEEUU) return false;
      if (asilo === 'si' && !tiempoAsilo) return false;
      if (puertoEntrada === 'Otro' && !puertoOtro) return false;
      if (hijosEEUU === 'si' && !cantidadHijos) return false;
      return true;
    }
    if (fase === 3) {
      return nivel && oferta !== null && titulo !== null && experiencia !== null && impacto !== null && residencia !== null;
    }
    if (fase === 4) {
      if (!ocupacion) return false;
      if (ocupacion === 'Otro' && !ocupacionOtro) return false;
      return ingresos;
    }
    return false;
  };

  // Barra de progreso
  const progreso = (fase / totalFases) * 100;

  // Lógica de visa
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Construir el objeto de datos para el correo
    const datos = {
      ...respuestasUsuario,
      nombre,
      fechaNacimiento,
      nacionalidad,
      correo,
      telefono,
      fechaIngreso,
      asilo,
      tiempoAsilo: asilo === 'si' ? tiempoAsilo : '',
      puertoEntrada,
      puertoOtro: puertoEntrada === 'Otro' ? puertoOtro : '',
      hijosEEUU,
      cantidadHijos: hijosEEUU === 'si' ? cantidadHijos : '',
      nivel,
      oferta: oferta === 0 ? 'Sí' : oferta === 1 ? 'No' : '',
      titulo: titulo === 0 ? 'Sí' : titulo === 1 ? 'No' : '',
      experiencia: experiencia === 0 ? 'Sí' : experiencia === 1 ? 'No' : '',
      impacto: impacto === 0 ? 'Sí' : impacto === 1 ? 'No' : '',
      residencia: residencia === 0 ? 'Estados Unidos' : residencia === 1 ? 'Colombia' : '',
      ocupacion,
      ocupacionOtro: ocupacion === 'Otro' ? ocupacionOtro : '',
      ingresos,
      visaPosible: determinarVisaExacta()
    };
    try {
      await emailjs.send(
        'service_oyt1tpk',
        'template_0dl3ykt',
        datos,
        '6Sfh92g7sR2X2Sbdb'
      );
    } catch (error) {
      console.error('Error enviando el correo:', error);
    }
    setVisaPosible(datos.visaPosible);
    setMostrarModal(true);
  };

  // Renderizado de cada fase
  const renderFase = () => {
    if (fase === 1) {
      return (
        <div className="flex flex-col gap-8 w-full animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-[var(--azul-legal)] tracking-tight text-center w-full">
            <span className="border-b-4 border-[var(--dorado-elegante)] pb-1">1. Información Personal</span>
          </h1>
          <div>
            <label className="block font-semibold mb-2 text-[var(--azul-legal)] text-lg md:text-xl">Nombre</label>
            <input type="text" className="w-full rounded-xl border border-blue-200 focus:border-[var(--dorado-elegante)] focus:ring-2 focus:ring-[var(--dorado-elegante)] bg-blue-50/60 px-6 py-4 text-lg md:text-xl transition-all duration-200 outline-none" value={nombre} onChange={e => { setNombre(e.target.value); setRespuestasUsuario(prev => ({ ...prev, nombre: e.target.value })); }} />
          </div>
          <div>
            <label className="block font-semibold mb-2 text-[var(--azul-legal)] text-lg md:text-xl">Fecha de nacimiento</label>
            <input type="date" className="w-full rounded-xl border border-blue-200 focus:border-[var(--dorado-elegante)] focus:ring-2 focus:ring-[var(--dorado-elegante)] bg-blue-50/60 px-6 py-4 text-lg md:text-xl transition-all duration-200 outline-none" value={fechaNacimiento} onChange={e => { setFechaNacimiento(e.target.value); setRespuestasUsuario(prev => ({ ...prev, fechaNacimiento: e.target.value })); }} />
          </div>
          <div>
            <label className="block font-semibold mb-2 text-[var(--azul-legal)] text-lg md:text-xl">Nacionalidad</label>
            <select className="w-full rounded-xl border border-blue-200 focus:border-[var(--dorado-elegante)] focus:ring-2 focus:ring-[var(--dorado-elegante)] bg-blue-50/60 px-6 py-4 text-lg md:text-xl transition-all duration-200 outline-none" value={nacionalidad} onChange={e => { setNacionalidad(e.target.value); setRespuestasUsuario(prev => ({ ...prev, nacionalidad: e.target.value })); }}>
              <option value="">Selecciona tu país</option>
              {paises.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-2 text-[var(--azul-legal)] text-lg md:text-xl">Correo electrónico</label>
            <input type="email" className="w-full rounded-xl border border-blue-200 focus:border-[var(--dorado-elegante)] focus:ring-2 focus:ring-[var(--dorado-elegante)] bg-blue-50/60 px-6 py-4 text-lg md:text-xl transition-all duration-200 outline-none" value={correo} onChange={e => { setCorreo(e.target.value); setRespuestasUsuario(prev => ({ ...prev, correo: e.target.value })); }} />
          </div>
          <div>
            <label className="block font-semibold mb-2 text-[var(--azul-legal)] text-lg md:text-xl">Teléfono</label>
            <input type="tel" className="w-full rounded-xl border border-blue-200 focus:border-[var(--dorado-elegante)] focus:ring-2 focus:ring-[var(--dorado-elegante)] bg-blue-50/60 px-6 py-4 text-lg md:text-xl transition-all duration-200 outline-none" value={telefono} onChange={e => { setTelefono(e.target.value); setRespuestasUsuario(prev => ({ ...prev, telefono: e.target.value })); }} />
          </div>
        </div>
      );
    }
    if (fase === 2) {
      return (
        <div className="flex flex-col gap-8 w-full animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-[var(--azul-legal)] tracking-tight text-center w-full">
            <span className="border-b-4 border-[var(--dorado-elegante)] pb-1">2. Información Migratoria</span>
          </h1>
          <div>
            <label className="block font-semibold mb-2 text-[var(--azul-legal)] text-lg md:text-xl">Fecha de ingreso a EE.UU.</label>
            <input type="date" className="w-full rounded-xl border border-blue-200 focus:border-[var(--dorado-elegante)] focus:ring-2 focus:ring-[var(--dorado-elegante)] bg-blue-50/60 px-6 py-4 text-lg md:text-xl transition-all duration-200 outline-none" value={fechaIngreso} onChange={e => { setFechaIngreso(e.target.value); setRespuestasUsuario(prev => ({ ...prev, fechaIngreso: e.target.value })); }} />
          </div>
          <div>
            <label className="block font-semibold mb-2 text-[var(--azul-legal)] text-lg md:text-xl">¿Radicó solicitud de asilo?</label>
            <div className="flex gap-10 mt-2 ml-2">
              <label className="flex items-center gap-3 text-base md:text-lg">
                <input type="radio" name="asilo" value="si" className="accent-[var(--azul-legal)]" checked={asilo === 'si'} onChange={() => { setAsilo('si'); setRespuestasUsuario(prev => ({ ...prev, asilo: 'si' })); }} /> Sí
              </label>
              <label className="flex items-center gap-3 text-base md:text-lg">
                <input type="radio" name="asilo" value="no" className="accent-[var(--azul-legal)]" checked={asilo === 'no'} onChange={() => { setAsilo('no'); setRespuestasUsuario(prev => ({ ...prev, asilo: 'no' })); }} /> No
              </label>
            </div>
          </div>
          {asilo === 'si' && (
            <div>
              <label className="block font-semibold mb-2 text-[var(--azul-legal)] text-lg md:text-xl">¿Hace cuánto la radicó?</label>
              <input type="date" className="w-full rounded-xl border border-blue-200 focus:border-[var(--dorado-elegante)] focus:ring-2 focus:ring-[var(--dorado-elegante)] bg-blue-50/60 px-6 py-4 text-lg md:text-xl transition-all duration-200 outline-none" value={tiempoAsilo} onChange={e => { setTiempoAsilo(e.target.value); setRespuestasUsuario(prev => ({ ...prev, tiempoAsilo: e.target.value })); }} />
            </div>
          )}
          <div>
            <label className="block font-semibold mb-2 text-[var(--azul-legal)] text-lg md:text-xl">¿Cuál fue su puerto de entrada?</label>
            <select className="w-full rounded-xl border border-blue-200 focus:border-[var(--dorado-elegante)] focus:ring-2 focus:ring-[var(--dorado-elegante)] bg-blue-50/60 px-6 py-4 text-lg md:text-xl transition-all duration-200 outline-none" value={puertoEntrada} onChange={e => { setPuertoEntrada(e.target.value); setRespuestasUsuario(prev => ({ ...prev, puertoEntrada: e.target.value })); }}>
              <option value="">Seleccione</option>
              <option value="Visa">Visa</option>
              <option value="Frontera">Frontera</option>
              <option value="CBP One">CBP One</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
          {puertoEntrada === 'Otro' && (
            <div>
              <label className="block font-semibold mb-2 text-[var(--azul-legal)] text-lg md:text-xl">Especifique el puerto de entrada</label>
              <input type="text" className="w-full rounded-xl border border-blue-200 focus:border-[var(--dorado-elegante)] focus:ring-2 focus:ring-[var(--dorado-elegante)] bg-blue-50/60 px-6 py-4 text-lg md:text-xl transition-all duration-200 outline-none" value={puertoOtro} onChange={e => { setPuertoOtro(e.target.value); setRespuestasUsuario(prev => ({ ...prev, puertoOtro: e.target.value })); }} />
            </div>
          )}
          <div>
            <label className="block font-semibold mb-2 text-[var(--azul-legal)] text-lg md:text-xl">¿Tiene hijos nacidos en EE.UU.?</label>
            <div className="flex gap-10 mt-2 ml-2">
              <label className="flex items-center gap-3 text-base md:text-lg">
                <input type="radio" name="hijosEEUU" value="si" className="accent-[var(--azul-legal)]" checked={hijosEEUU === 'si'} onChange={() => { setHijosEEUU('si'); setRespuestasUsuario(prev => ({ ...prev, hijosEEUU: 'si' })); }} /> Sí
              </label>
              <label className="flex items-center gap-3 text-base md:text-lg">
                <input type="radio" name="hijosEEUU" value="no" className="accent-[var(--azul-legal)]" checked={hijosEEUU === 'no'} onChange={() => { setHijosEEUU('no'); setRespuestasUsuario(prev => ({ ...prev, hijosEEUU: 'no' })); }} /> No
              </label>
            </div>
          </div>
          {hijosEEUU === 'si' && (
            <div>
              <label className="block font-semibold mb-2 text-[var(--azul-legal)] text-lg md:text-xl">¿Cuántos hijos?</label>
              <input type="number" min="1" className="w-full rounded-xl border border-blue-200 focus:border-[var(--dorado-elegante)] focus:ring-2 focus:ring-[var(--dorado-elegante)] bg-blue-50/60 px-6 py-4 text-lg md:text-xl transition-all duration-200 outline-none" value={cantidadHijos} onChange={e => { setCantidadHijos(e.target.value); setRespuestasUsuario(prev => ({ ...prev, cantidadHijos: e.target.value })); }} />
            </div>
          )}
        </div>
      );
    }
    if (fase === 3) {
      return (
        <div className="flex flex-col gap-8 w-full animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-[var(--azul-legal)] tracking-tight text-center w-full">
            <span className="border-b-4 border-[var(--dorado-elegante)] pb-1">Evaluación para Visa de Trabajo</span>
          </h1>
          <div>
            <label className="block font-semibold mb-3 text-[var(--azul-legal)] text-lg md:text-xl">Nivel académico</label>
            <div className="flex flex-col gap-4 mt-2">
              <label className="flex items-center gap-3 text-base md:text-lg">
                <input type="radio" name="nivel" value="tecnico" className="accent-[var(--azul-legal)]" checked={nivel === "tecnico"} onChange={() => { setNivel("tecnico"); setRespuestasUsuario(prev => ({ ...prev, nivel: "tecnico" })); }} /> Técnico / Tecnológico
              </label>
              <label className="flex items-center gap-3 text-base md:text-lg">
                <input type="radio" name="nivel" value="universitario" className="accent-[var(--azul-legal)]" checked={nivel === "universitario"} onChange={() => { setNivel("universitario"); setRespuestasUsuario(prev => ({ ...prev, nivel: "universitario" })); }} /> Universitario
              </label>
              <label className="flex items-center gap-3 text-base md:text-lg">
                <input type="radio" name="nivel" value="postgrado" className="accent-[var(--azul-legal)]" checked={nivel === "postgrado"} onChange={() => { setNivel("postgrado"); setRespuestasUsuario(prev => ({ ...prev, nivel: "postgrado" })); }} /> Postgrado (Maestría / Doctorado)
              </label>
            </div>
          </div>
          <div>
            <label className="font-semibold text-[var(--azul-legal)] text-lg md:text-xl mb-3 block">¿Tiene una oferta laboral de una empresa en EE.UU.?</label>
            <div className="flex gap-10 mt-2 ml-2">
              <label className="flex items-center gap-3 text-base md:text-lg">
                <input type="radio" name="oferta" value="si" className="accent-[var(--azul-legal)]" onChange={() => { setOferta(0); setRespuestasUsuario(prev => ({ ...prev, oferta: 0 })); }} checked={oferta === 0} /> Sí
              </label>
              <label className="flex items-center gap-3 text-base md:text-lg">
                <input type="radio" name="oferta" value="no" className="accent-[var(--azul-legal)]" onChange={() => { setOferta(1); setRespuestasUsuario(prev => ({ ...prev, oferta: 1 })); }} checked={oferta === 1} /> No
              </label>
            </div>
          </div>
          <div>
            <label className="font-semibold text-[var(--azul-legal)] text-lg md:text-xl mb-3 block">¿Su trabajo requiere título universitario?</label>
            <div className="flex gap-10 mt-2 ml-2">
              <label className="flex items-center gap-3 text-base md:text-lg">
                <input type="radio" name="titulo" value="si" className="accent-[var(--azul-legal)]" onChange={() => { setTitulo(0); setRespuestasUsuario(prev => ({ ...prev, titulo: 0 })); }} checked={titulo === 0} /> Sí
              </label>
              <label className="flex items-center gap-3 text-base md:text-lg">
                <input type="radio" name="titulo" value="no" className="accent-[var(--azul-legal)]" onChange={() => { setTitulo(1); setRespuestasUsuario(prev => ({ ...prev, titulo: 1 })); }} checked={titulo === 1} /> No
              </label>
            </div>
          </div>
          <div>
            <label className="font-semibold text-[var(--azul-legal)] text-lg md:text-xl mb-3 block">¿Posee experiencia laboral de al menos dos años en su campo?</label>
            <div className="flex gap-10 mt-2 ml-2">
              <label className="flex items-center gap-3 text-base md:text-lg">
                <input type="radio" name="experiencia" value="si" className="accent-[var(--azul-legal)]" onChange={() => { setExperiencia(0); setRespuestasUsuario(prev => ({ ...prev, experiencia: 0 })); }} checked={experiencia === 0} /> Sí
              </label>
              <label className="flex items-center gap-3 text-base md:text-lg">
                <input type="radio" name="experiencia" value="no" className="accent-[var(--azul-legal)]" onChange={() => { setExperiencia(1); setRespuestasUsuario(prev => ({ ...prev, experiencia: 1 })); }} checked={experiencia === 1} /> No
              </label>
            </div>
          </div>
          <div>
            <label className="font-semibold text-[var(--azul-legal)] text-lg md:text-xl mb-3 block">¿Puede demostrar que su trabajo tiene un impacto significativo en EE.UU.?</label>
            <div className="flex gap-10 mt-2 ml-2">
              <label className="flex items-center gap-3 text-base md:text-lg">
                <input type="radio" name="impacto" value="si" className="accent-[var(--azul-legal)]" onChange={() => { setImpacto(0); setRespuestasUsuario(prev => ({ ...prev, impacto: 0 })); }} checked={impacto === 0} /> Sí
              </label>
              <label className="flex items-center gap-3 text-base md:text-lg">
                <input type="radio" name="impacto" value="no" className="accent-[var(--azul-legal)]" onChange={() => { setImpacto(1); setRespuestasUsuario(prev => ({ ...prev, impacto: 1 })); }} checked={impacto === 1} /> No
              </label>
            </div>
          </div>
          <div>
            <label className="font-semibold text-[var(--azul-legal)] text-lg md:text-xl mb-3 block">¿Cuál es su lugar de residencia?</label>
            <div className="flex gap-10 mt-2 ml-2">
              <label className="flex items-center gap-3 text-base md:text-lg">
                <input type="radio" name="residencia" value="estados_unidos" className="accent-[var(--azul-legal)]" onChange={() => { setResidencia(0); setRespuestasUsuario(prev => ({ ...prev, residencia: 0 })); }} checked={residencia === 0} /> Estados Unidos
              </label>
              <label className="flex items-center gap-3 text-base md:text-lg">
                <input type="radio" name="residencia" value="colombia" className="accent-[var(--azul-legal)]" onChange={() => { setResidencia(1); setRespuestasUsuario(prev => ({ ...prev, residencia: 1 })); }} checked={residencia === 1} /> Colombia
              </label>
            </div>
          </div>
        </div>
      );
    }
    if (fase === 4) {
      return (
        <div className="flex flex-col gap-8 w-full animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-[var(--azul-legal)] tracking-tight text-center w-full">
            <span className="border-b-4 border-[var(--dorado-elegante)] pb-1">4. Situación Laboral y Económica</span>
          </h1>
          <div>
            <label className="block font-semibold mb-2 text-[var(--azul-legal)] text-lg md:text-xl">¿A qué se dedica?</label>
            <select className="w-full rounded-xl border border-blue-200 focus:border-[var(--dorado-elegante)] focus:ring-2 focus:ring-[var(--dorado-elegante)] bg-blue-50/60 px-6 py-4 text-lg md:text-xl transition-all duration-200 outline-none" value={ocupacion} onChange={e => { setOcupacion(e.target.value); setRespuestasUsuario(prev => ({ ...prev, ocupacion: e.target.value })); }}>
              <option value="">Seleccione</option>
              <option value="Empleado">Empleado</option>
              <option value="Independiente">Independiente</option>
              <option value="No trabaja">No trabaja</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
          {ocupacion === 'Otro' && (
            <div>
              <label className="block font-semibold mb-2 text-[var(--azul-legal)] text-lg md:text-xl">Especifique su ocupación</label>
              <input type="text" className="w-full rounded-xl border border-blue-200 focus:border-[var(--dorado-elegante)] focus:ring-2 focus:ring-[var(--dorado-elegante)] bg-blue-50/60 px-6 py-4 text-lg md:text-xl transition-all duration-200 outline-none" value={ocupacionOtro} onChange={e => { setOcupacionOtro(e.target.value); setRespuestasUsuario(prev => ({ ...prev, ocupacionOtro: e.target.value })); }} />
            </div>
          )}
          <div>
            <label className="block font-semibold mb-2 text-[var(--azul-legal)] text-lg md:text-xl">Promedio de ingresos semanales (USD)</label>
            <input type="number" min="0" className="w-full rounded-xl border border-blue-200 focus:border-[var(--dorado-elegante)] focus:ring-2 focus:ring-[var(--dorado-elegante)] bg-blue-50/60 px-6 py-4 text-lg md:text-xl transition-all duration-200 outline-none" value={ingresos} onChange={e => { setIngresos(e.target.value); setRespuestasUsuario(prev => ({ ...prev, ingresos: e.target.value })); }} />
          </div>
        </div>
      );
    }
    return null;
  };

  // Navegación entre fases
  const handleNext = () => {
    if (fase < totalFases && validarFase()) setFase(fase + 1);
  };
  const handlePrev = () => {
    if (fase > 1) setFase(fase - 1);
  };

  // Función para limpiar todos los campos y el objeto de respuestas
  const limpiarFormulario = () => {
    setNombre("");
    setFechaNacimiento("");
    setNacionalidad("");
    setCorreo("");
    setTelefono("");
    setFechaIngreso("");
    setAsilo("");
    setTiempoAsilo("");
    setPuertoEntrada("");
    setPuertoOtro("");
    setHijosEEUU("");
    setCantidadHijos("");
    setNivel("");
    setOferta(null);
    setTitulo(null);
    setExperiencia(null);
    setImpacto(null);
    setResidencia(null);
    setOcupacion("");
    setOcupacionOtro("");
    setIngresos("");
    setRespuestasUsuario({});
    setFase(1);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-20 px-2 md:px-4">
      <div className="w-full max-w-xl flex flex-col items-center mx-auto">
        <div style={{ height: '5cm' }} />
        <div className="mt-16 md:mt-32" />
        <div className="flex justify-center w-full mb-10">
          <Link href="/">
            <button className="w-48 py-3 rounded-lg bg-[var(--azul-legal)] text-white text-lg font-semibold shadow-md hover:bg-blue-900 transition-all duration-300 uppercase tracking-wider focus:outline-none focus:ring-4 focus:ring-blue-200">
              Regresar
            </button>
          </Link>
        </div>
        <form className="w-full flex flex-col gap-12 items-center" onSubmit={handleSubmit}>
          {/* Barra de progreso */}
          <div className="w-full mb-8">
            <div className="w-full h-2 bg-blue-100 rounded-full relative overflow-hidden">
              <div className="h-2 rounded-full transition-all duration-500" style={{ width: `${progreso}%`, background: 'linear-gradient(90deg, #b8860b 0%, #1a365d 100%)' }}></div>
            </div>
            <div className="text-center text-[var(--azul-legal)] font-semibold mt-2 text-lg">Paso {fase} de {totalFases}</div>
          </div>
          {/* Renderizado de la fase actual */}
          {renderFase()}
          {/* Navegación */}
          <div className="flex justify-between w-full mt-8 gap-4">
            {fase > 1 && (
              <button type="button" onClick={handlePrev} className="w-1/2 py-4 rounded-lg bg-white border-2 border-[var(--azul-legal)] text-[var(--azul-legal)] text-lg font-bold shadow hover:bg-blue-50 transition-all duration-300 uppercase tracking-wider focus:outline-none focus:ring-4 focus:ring-blue-200">Anterior</button>
            )}
            {fase < totalFases && (
              <button type="button" onClick={handleNext} disabled={!validarFase()} className={`w-1/2 py-4 rounded-lg bg-[var(--azul-legal)] text-white text-lg font-bold shadow hover:bg-blue-900 transition-all duration-300 uppercase tracking-wider focus:outline-none focus:ring-4 focus:ring-blue-200 ${!validarFase() ? 'opacity-50 cursor-not-allowed' : ''}`}>Siguiente</button>
            )}
            {fase === totalFases && (
              <button type="submit" disabled={!validarFase()} className={`w-full py-4 rounded-lg bg-[var(--dorado-elegante)] text-white text-lg font-bold shadow hover:bg-[var(--azul-legal)] hover:text-[var(--dorado-elegante)] transition-all duration-300 uppercase tracking-wider focus:outline-none focus:ring-4 focus:ring-[var(--dorado-elegante)] ${!validarFase() ? 'opacity-50 cursor-not-allowed' : ''}`}>Enviar</button>
            )}
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
            <button onClick={() => { setMostrarModal(false); limpiarFormulario(); }} className="w-full py-3 rounded-lg bg-[var(--azul-legal)] text-white text-lg font-semibold shadow-md hover:bg-blue-900 transition-all duration-300 uppercase tracking-wider focus:outline-none focus:ring-4 focus:ring-blue-200">Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
} 