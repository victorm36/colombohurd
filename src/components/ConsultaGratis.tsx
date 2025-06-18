import Link from 'next/link';

export default function ConsultaGratis() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-28 bg-white mt-32 mb-32 animate-fade-in-up">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--azul-legal)] mb-[189px] text-center animate-fade-in-up">
        Colombohurd te ayuda con una consulta de inmigración
      </h2>
      <Link href="/consulta">
        <button
          className="mt-2 px-16 py-7 rounded-full bg-[var(--dorado-elegante)] text-white text-3xl font-extrabold shadow-2xl hover:bg-[var(--azul-legal)] hover:text-[var(--dorado-elegante)] transition-all duration-300 uppercase tracking-wider animate-fade-in-up transform hover:scale-110 hover:shadow-yellow-400/50 border-4 border-transparent hover:border-[var(--dorado-elegante)] focus:outline-none focus:ring-4 focus:ring-[var(--dorado-elegante)]"
          style={{ animationDelay: '0.3s', letterSpacing: '0.12em' }}
        >
          Verificamos tu perfil GRATIS
        </button>
      </Link>
      {/* Diagrama visual de pasos */}
      <div className="mt-20 w-full flex justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <svg width="600" height="120" viewBox="0 0 600 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-w-full">
          {/* Línea principal */}
          <rect x="60" y="38" width="480" height="4" rx="2" fill="#b8860b" />
          {/* Paso 1 */}
          <circle cx="60" cy="40" r="28" fill="#1a365d" />
          <text x="60" y="45" textAnchor="middle" fill="#fff" fontSize="22" fontWeight="bold">1</text>
          <text x="60" y="100" textAnchor="middle" fill="#1a365d" fontSize="16">Consulta</text>
          {/* Paso 2 */}
          <circle cx="300" cy="40" r="28" fill="#1a365d" />
          <text x="300" y="45" textAnchor="middle" fill="#fff" fontSize="22" fontWeight="bold">2</text>
          <text x="300" y="100" textAnchor="middle" fill="#1a365d" fontSize="16">Análisis</text>
          {/* Paso 3 */}
          <circle cx="540" cy="40" r="28" fill="#1a365d" />
          <text x="540" y="45" textAnchor="middle" fill="#fff" fontSize="22" fontWeight="bold">3</text>
          <text x="540" y="100" textAnchor="middle" fill="#1a365d" fontSize="16">Respuesta</text>
        </svg>
      </div>
    </section>
  );
} 