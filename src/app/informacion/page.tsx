import React from 'react';
import Navbar from '@/components/Navbar';
import FooterContacto from '@/components/FooterContacto';

export default function H1BPage() {
  return (
    <main>
      <Navbar />
      <div style={{ height: '80px' }} />
      <section className="section" style={{ padding: 0, marginBottom: 0 }}>
        <div className="flex flex-col md:flex-row gap-0 shadow-lg overflow-hidden min-h-[400px] w-full">
          {/* Columna izquierda: Información H1B */}
          <div className="flex-1 bg-[var(--azul-legal)] text-white p-10 md:p-20 flex flex-col justify-center min-h-[400px]">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">¿Qué es la Visa H1B?</h2>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed text-white">
              La <span className="text-[var(--dorado-elegante)]">visa H1B</span> permite a profesionales extranjeros trabajar en Estados Unidos en ocupaciones especializadas. Es una de las visas más solicitadas por empresas estadounidenses para atraer talento internacional.
            </p>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--dorado-elegante)] text-center">Características principales</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl mx-auto justify-items-center">
              <div className="bg-white/20 rounded-2xl px-8 py-4 text-lg md:text-xl text-white text-center shadow border border-white/30 min-w-[170px] max-w-[220px] font-medium">
                3-6 años
              </div>
              <div className="bg-white/20 rounded-2xl px-8 py-4 text-lg md:text-xl text-white text-center shadow border border-white/30 min-w-[170px] max-w-[220px] font-medium">
                Lotería anual
              </div>
              <div className="bg-white/20 rounded-2xl px-8 py-4 text-lg md:text-xl text-white text-center shadow border border-white/30 min-w-[170px] max-w-[220px] font-medium">
                Título universitario
              </div>
              <div className="bg-white/20 rounded-2xl px-8 py-4 text-lg md:text-xl text-white text-center shadow border border-white/30 min-w-[170px] max-w-[220px] font-medium">
                Empleador sponsor
              </div>
            </div>
          </div>
          {/* Columna derecha: Espacio para video */}
          <div className="flex-1 bg-white flex items-center justify-center p-8 md:p-20 min-h-[400px]">
            {/* Aquí irá el video */}
          </div>
        </div>

        {/* Segunda fila: Visa H2B, información a la derecha */}
        <div className="flex flex-col md:flex-row gap-0 shadow-lg overflow-hidden min-h-[400px] w-full mt-16">
          {/* Columna izquierda: Espacio en blanco */}
          <div className="flex-1 bg-white flex items-center justify-center p-8 md:p-20 min-h-[400px]">
            {/* Espacio en blanco */}
          </div>
          {/* Columna derecha: Información H2B */}
          <div className="flex-1 bg-[var(--azul-legal)] text-white p-10 md:p-20 flex flex-col justify-center min-h-[400px]">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">¿Qué es la Visa H2B?</h2>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed text-white">
              La <span className="text-[var(--dorado-elegante)]">visa H2B</span> está dirigida a trabajadores temporales no agrícolas que desean laborar en Estados Unidos en empleos estacionales o de corta duración.
            </p>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--dorado-elegante)] text-center">Características principales</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl mx-auto justify-items-center">
              <div className="bg-white/20 rounded-2xl px-8 py-4 text-lg md:text-xl text-white text-center shadow border border-white/30 min-w-[170px] max-w-[220px] font-medium">
                1-3 años
              </div>
              <div className="bg-white/20 rounded-2xl px-8 py-4 text-lg md:text-xl text-white text-center shadow border border-white/30 min-w-[170px] max-w-[220px] font-medium">
                Trabajo temporal
              </div>
              <div className="bg-white/20 rounded-2xl px-8 py-4 text-lg md:text-xl text-white text-center shadow border border-white/30 min-w-[170px] max-w-[220px] font-medium">
                Certificación laboral
              </div>
              <div className="bg-white/20 rounded-2xl px-8 py-4 text-lg md:text-xl text-white text-center shadow border border-white/30 min-w-[170px] max-w-[220px] font-medium">
                Límite anual
              </div>
            </div>
          </div>
        </div>

        {/* Tercera fila: Visa EB2, información a la izquierda */}
        <div className="flex flex-col md:flex-row gap-0 shadow-lg overflow-hidden min-h-[400px] w-full mt-16">
          {/* Columna izquierda: Información EB2 */}
          <div className="flex-1 bg-[var(--azul-legal)] text-white p-10 md:p-20 flex flex-col justify-center min-h-[400px]">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">¿Qué es la Visa EB2?</h2>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed text-white">
              La <span className="text-[var(--dorado-elegante)]">visa EB2</span> está dirigida a profesionales con títulos avanzados o habilidades excepcionales que buscan residencia permanente en Estados Unidos.
            </p>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--dorado-elegante)] text-center">Características principales</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl mx-auto justify-items-center">
              <div className="bg-white/20 rounded-2xl px-8 py-4 text-lg md:text-xl text-white text-center shadow border border-white/30 min-w-[170px] max-w-[220px] font-medium">
                Residencia
              </div>
              <div className="bg-white/20 rounded-2xl px-8 py-4 text-lg md:text-xl text-white text-center shadow border border-white/30 min-w-[170px] max-w-[220px] font-medium">
                Título avanzado
              </div>
              <div className="bg-white/20 rounded-2xl px-8 py-4 text-lg md:text-xl text-white text-center shadow border border-white/30 min-w-[170px] max-w-[220px] font-medium">
                Habilidad excepcional
              </div>
              <div className="bg-white/20 rounded-2xl px-8 py-4 text-lg md:text-xl text-white text-center shadow border border-white/30 min-w-[170px] max-w-[220px] font-medium">
                Patrocinio o NIW
              </div>
            </div>
          </div>
          {/* Columna derecha: Espacio en blanco */}
          <div className="flex-1 bg-white flex items-center justify-center p-8 md:p-20 min-h-[400px]">
            {/* Espacio en blanco */}
          </div>
        </div>

        {/* Cuarta fila: Visa EB2-NIW, información a la derecha */}
        <div className="flex flex-col md:flex-row gap-0 shadow-lg overflow-hidden min-h-[400px] w-full mt-16">
          {/* Columna izquierda: Espacio en blanco */}
          <div className="flex-1 bg-white flex items-center justify-center p-8 md:p-20 min-h-[400px]">
            {/* Espacio en blanco */}
          </div>
          {/* Columna derecha: Información EB2-NIW */}
          <div className="flex-1 bg-[var(--azul-legal)] text-white p-10 md:p-20 flex flex-col justify-center min-h-[400px]">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">¿Qué es la Visa EB2-NIW?</h2>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed text-white">
              La <span className="text-[var(--dorado-elegante)]">visa EB2-NIW</span> permite a profesionales con habilidades excepcionales o títulos avanzados solicitar la residencia permanente en EE.UU. sin necesidad de una oferta laboral, si demuestran que su trabajo beneficia al interés nacional.
            </p>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--dorado-elegante)] text-center">Características principales</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl mx-auto justify-items-center">
              <div className="bg-white/20 rounded-2xl px-8 py-4 text-lg md:text-xl text-white text-center shadow border border-white/30 min-w-[170px] max-w-[220px] font-medium">
                Sin oferta laboral
              </div>
              <div className="bg-white/20 rounded-2xl px-8 py-4 text-lg md:text-xl text-white text-center shadow border border-white/30 min-w-[170px] max-w-[220px] font-medium">
                Interés nacional
              </div>
              <div className="bg-white/20 rounded-2xl px-8 py-4 text-lg md:text-xl text-white text-center shadow border border-white/30 min-w-[170px] max-w-[220px] font-medium">
                Residencia directa
              </div>
              <div className="bg-white/20 rounded-2xl px-8 py-4 text-lg md:text-xl text-white text-center shadow border border-white/30 min-w-[170px] max-w-[220px] font-medium">
                Título avanzado
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Espacio extra antes del footer */}
      <div style={{ marginTop: '80px' }} />
      {/* Línea dorada animada de separación */}
      <div className="w-full flex justify-center">
        <div className="h-1 bg-[var(--dorado-elegante)] rounded animate-grow-line" style={{ width: '220px' }} />
      </div>
      <FooterContacto />
    </main>
  );
} 