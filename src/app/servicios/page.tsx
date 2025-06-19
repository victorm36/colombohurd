"use client";

import React from 'react';

export default function ServiciosPage() {
  const servicios = [
    {
      id: 1,
      titulo: "Visas de Trabajo",
      descripcion: "H1B, L1, O1, TN y otras visas de trabajo para profesionales calificados.",
      icono: "💼",
      color: "from-blue-600 to-blue-800",
      detalles: [
        "Visa H1B para profesionales",
        "Visa L1 para transferencias",
        "Visa O1 para talentos extraordinarios",
        "Visa TN para profesionales NAFTA"
      ]
    },
    {
      id: 2,
      titulo: "Residencia Permanente",
      descripcion: "Green Card a través de trabajo, familia o inversión.",
      icono: "🟢",
      color: "from-green-600 to-green-800",
      detalles: [
        "EB-1 para trabajadores extraordinarios",
        "EB-2 NIW para profesionales",
        "EB-3 para trabajadores calificados",
        "EB-5 para inversores"
      ]
    },
    {
      id: 3,
      titulo: "Ciudadanía",
      descripcion: "Proceso de naturalización para obtener la ciudadanía estadounidense.",
      icono: "🇺🇸",
      color: "from-red-600 to-red-800",
      detalles: [
        "Naturalización por residencia",
        "Ciudadanía para cónyuges",
        "Ciudadanía para hijos",
        "Renovación de certificados"
      ]
    },
    {
      id: 4,
      titulo: "Reunificación Familiar",
      descripcion: "Reunir familias a través de visas familiares y ajuste de estatus.",
      icono: "👨‍👩‍👧‍👦",
      color: "from-purple-600 to-purple-800",
      detalles: [
        "Visas para cónyuges",
        "Visas para hijos",
        "Visas para padres",
        "Ajuste de estatus familiar"
      ]
    },
    {
      id: 5,
      titulo: "Asilo y Refugio",
      descripcion: "Protección legal para personas que temen persecución en su país.",
      icono: "🛡️",
      color: "from-orange-600 to-orange-800",
      detalles: [
        "Asilo político",
        "Refugio humanitario",
        "Protección temporal",
        "Cancelación de deportación"
      ]
    },
    {
      id: 6,
      titulo: "Permisos y Documentos",
      descripcion: "Renovación y gestión de documentos migratorios.",
      icono: "📋",
      color: "from-teal-600 to-teal-800",
      detalles: [
        "Renovación de Green Card",
        "Permisos de trabajo",
        "Permisos de viaje",
        "Documentos de identidad"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#15396a] via-[#1e2a47] to-[#15396a] font-sans">
      <div className="container mx-auto px-4 pt-10">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center min-h-[20vh] mb-12">
          <section className="relative bg-gradient-to-br from-[#15396a] via-[#1e2a47] to-white/80 px-12 rounded-3xl shadow-2xl border-4 border-[#C8102E] flex flex-col items-center max-w-4xl mx-auto mb-8 overflow-hidden" style={{ paddingTop: '1.5cm', paddingBottom: '1.5cm' }}>
            <div className="absolute inset-0 bg-white/10 pointer-events-none rounded-3xl" />
            <div className="relative z-10 flex flex-col items-center w-full">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center font-['Poppins'] tracking-wide mb-8 drop-shadow-lg underline decoration-[#FFD700] decoration-4 underline-offset-[0.5cm]">
                Nuestros Servicios Legales
              </h1>
              <p className="text-base md:text-lg text-white max-w-3xl text-center leading-relaxed font-['Inter'] mb-8 px-4 py-2 rounded-xl bg-[#112244]/60 shadow-md backdrop-blur-sm border border-[#FFD700]/30">
                Ofrecemos servicios legales integrales en inmigración con más de 15 años de experiencia. Nuestro equipo de abogados especializados te guiará en cada paso de tu proceso migratorio.
              </p>
            </div>
          </section>
        </div>

        {/* Servicios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {servicios.map((servicio) => (
            <div
              key={servicio.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 overflow-hidden"
            >
              {/* Header del servicio */}
              <div className={`bg-gradient-to-r ${servicio.color} p-6 text-white`}>
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{servicio.icono}</span>
                  <div>
                    <h3 className="text-xl font-bold font-['Poppins']">{servicio.titulo}</h3>
                    <p className="text-sm opacity-90 mt-1">{servicio.descripcion}</p>
                  </div>
                </div>
              </div>
              
              {/* Detalles del servicio */}
              <div className="p-6">
                <h4 className="text-lg font-semibold text-[#C8102E] mb-4 font-['Poppins']">
                  Incluye:
                </h4>
                <ul className="space-y-2">
                  {servicio.detalles.map((detalle, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <svg className="w-4 h-4 text-[#C8102E] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-['Inter']">{detalle}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Botón de contacto */}
                <div className="mt-6">
                  <button className="w-full bg-[#C8102E] text-white font-bold py-3 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300 font-['Poppins']">
                    Consultar Servicio
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sección de contacto */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#C8102E] mb-4 font-['Poppins']">
              ¿Necesitas Asesoría Personalizada?
            </h2>
            <p className="text-gray-700 mb-6 font-['Inter']">
              Nuestros abogados especializados están listos para ayudarte con tu caso específico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#FFD700] text-[#C8102E] font-bold py-3 px-8 rounded-lg hover:bg-yellow-400 transition-colors duration-300 font-['Poppins']">
                Consulta Gratuita
              </button>
              <button className="bg-[#C8102E] text-white font-bold py-3 px-8 rounded-lg hover:bg-red-700 transition-colors duration-300 font-['Poppins']">
                Contactar Abogado
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 