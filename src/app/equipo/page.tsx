"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    id: 1,
    name: "Dr. Juan Pérez",
    position: "Socio Principal",
    experience: "20 años de experiencia en derecho corporativo",
    education: "Doctorado en Derecho - Universidad Nacional",
    specialties: ["Derecho Corporativo", "Fusiones y Adquisiciones", "Derecho Internacional"],
    description: "Especialista en derecho corporativo con amplia experiencia en negociaciones internacionales y fusiones empresariales. Ha liderado numerosos casos exitosos en el ámbito internacional.",
    image: "/equipo/abogadoJuan.png"
  },
  {
    id: 2,
    name: "Dra. María Rodríguez",
    position: "Socia Senior",
    experience: "15 años de experiencia en derecho laboral",
    education: "Maestría en Derecho Laboral - Universidad de los Andes",
    specialties: ["Derecho Laboral", "Relaciones Industriales", "Compliance"],
    description: "Experta en derecho laboral y compliance, con un historial exitoso en la resolución de conflictos laborales complejos y la implementación de programas de cumplimiento normativo.",
    image: "/equipo/abogadaMaria.png"
  },
  {
    id: 3,
    name: "Dr. Carlos Martínez",
    position: "Socio Senior",
    experience: "18 años de experiencia en derecho migratorio",
    education: "Maestría en Derecho Internacional - Universidad de Harvard",
    specialties: ["Derecho Migratorio", "Visas de Trabajo", "Residencia Permanente"],
    description: "Especialista en derecho migratorio con amplia experiencia en visas de trabajo y procesos de residencia permanente. Ha ayudado a cientos de profesionales a establecerse en Estados Unidos.",
    image: "/equipo/abogadoCarlos.png"
  },
  {
    id: 4,
    name: "Dra. Ana García",
    position: "Abogada Senior",
    experience: "12 años de experiencia en derecho corporativo",
    education: "Maestría en Derecho Empresarial - Universidad de Columbia",
    specialties: ["Derecho Empresarial", "Contratos Internacionales", "Propiedad Intelectual"],
    description: "Experta en derecho empresarial y contratos internacionales. Su experiencia incluye la asesoría a empresas multinacionales en sus operaciones en Estados Unidos.",
    image: "/equipo/abogadaAna.png"
  },
  {
    id: 5,
    name: "Dr. Luis Hernández",
    position: "Abogado Senior",
    experience: "14 años de experiencia en derecho migratorio",
    education: "Maestría en Derecho Internacional - Universidad de Georgetown",
    specialties: ["Derecho Migratorio", "Asilo Político", "Naturalización"],
    description: "Especialista en casos de asilo político y naturalización. Ha representado exitosamente a numerosos clientes en procesos complejos de inmigración.",
    image: "/equipo/abogadoLuis.png"
  }
];

export default function EquipoPage() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#15396a] via-[#1e2a47] to-[#15396a] font-sans animate-fade-in-up">
      {/* <Navbar /> */}
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 py-12">
        <h1 className="text-4xl font-extrabold text-white mb-2 text-center tracking-tight font-sans">Nuestro equipo</h1>
        <p className="text-base md:text-lg text-[#e0e7ef] text-center mb-10 max-w-2xl mx-auto font-sans font-normal">
          Somos un equipo de abogados especializados, comprometidos con brindar asesoría legal experta y personalizada en diversas áreas del derecho.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-4" style={{ marginTop: '4cm', marginLeft: '0.5cm' }}>
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out flex flex-col items-center min-w-[224px] max-w-[224px] font-playfair overflow-hidden group w-full border border-gray-700 transform hover:scale-105"
            >
              <div className="w-full flex justify-center items-center p-0">
                <div
                  className="w-56 h-80 relative flex items-center justify-center bg-[#f8fafc] border-b border-[#e0e7ef] group"
                  onMouseEnter={() => setHovered(member.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <Image src={member.image} alt={member.name} width={224} height={320} className="object-cover w-full h-full" style={{ borderTopLeftRadius: '0.75rem', borderTopRightRadius: '0.75rem' }} />
                  {hovered === member.id && (
                    <div className="absolute top-0 left-0 w-56 h-80 bg-[#e0e7ef] rounded-t-xl shadow-2xl border border-[#8a8d91] px-3 py-3 flex flex-col gap-2 justify-center items-center animate-fadeIn z-20 transition-all duration-500 ease-in-out overflow-y-auto font-sans text-[11px] md:text-sm leading-tight">
                      <div className="w-full text-center space-y-2 text-[#232946] font-sans">
                        <div>
                          <span className="block font-bold mb-0.5 text-[#C8102E] font-sans">Experiencia</span>
                          <span className="block text-black font-normal font-sans">{member.experience}</span>
                        </div>
                        <div>
                          <span className="block font-bold mb-0.5 text-[#C8102E] font-sans">Educación</span>
                          <span className="block text-black font-normal font-sans">{member.education}</span>
                        </div>
                        <div>
                          <span className="block font-bold mb-0.5 text-[#C8102E] font-sans">Descripción</span>
                          <span className="block italic text-black font-normal font-sans">{member.description}</span>
                        </div>
                        <div>
                          <span className="block font-bold mb-0.5 text-[#C8102E] font-sans">Especialidades</span>
                          <div className="flex flex-wrap gap-1 mt-1 justify-center">
                            {member.specialties.map((spec, idx) => (
                              <span key={idx} className="bg-white font-semibold text-[10px] md:text-xs px-2 py-0.5 rounded-full border border-[#FFD700] shadow transition-all duration-200 text-black font-sans">
                                {spec}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full bg-transparent rounded-b-xl shadow-none px-2 py-2 flex flex-col items-center z-10">
                <h2
                  className="text-base md:text-lg font-extrabold mb-0 text-center leading-tight font-sans transition-colors duration-300 text-black"
                >
                  {member.name}
                </h2>
                <p className="font-medium text-xs md:text-sm text-[#b1a16c] text-center font-sans">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.7s cubic-bezier(0.4,0,0.2,1) both;
        }
        .group:hover .z-20::-webkit-scrollbar {
          width: 4px;
        }
        .group:hover .z-20::-webkit-scrollbar-thumb {
          background: #bdbdbd;
          border-radius: 4px;
        }
        .group:hover .z-20::-webkit-scrollbar-track {
          background: transparent;
        }
        .group:hover .z-20 {
          scrollbar-width: thin;
          scrollbar-color: #bdbdbd transparent;
        }
      `}</style>
    </main>
  );
} 