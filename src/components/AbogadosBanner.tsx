import Image from 'next/image';

export default function AbogadosBanner() {
  return (
    <section className="w-full flex justify-center items-center py-10 bg-white mb-20" style={{ marginTop: '80px' }}>
      <div className="hidden md:flex flex-1 h-[340px] justify-center items-center relative transition-all duration-300">
        <div className="w-full h-full bg-[var(--azul-legal)] flex items-center justify-center cursor-pointer transition-all duration-300 group">
          <div className="flex flex-col items-center">
            <span className="opacity-0 group-hover:opacity-100 text-white text-2xl font-extrabold tracking-wide px-6 text-center transition-opacity duration-300 select-none" style={{ fontFamily: 'Inter, Arial Black, Impact, sans-serif' }}>
              Confianza y ética profesional
            </span>
            <span className="block h-1 w-0 group-hover:w-32 bg-[var(--dorado-elegante)] rounded transition-all duration-500 mt-2"></span>
          </div>
        </div>
      </div>
      <div className="flex-shrink-0 flex justify-center items-center px-2">
        <Image
          src="/abogados.png"
          alt="Abogados de inmigración"
          width={340}
          height={340}
          className="shadow-lg object-contain"
          priority
        />
      </div>
      <div className="hidden md:flex flex-1 h-[340px] justify-center items-center relative transition-all duration-300">
        <div className="w-full h-full bg-[var(--azul-legal)] flex items-center justify-center cursor-pointer transition-all duration-300 group">
          <div className="flex flex-col items-center">
            <span className="opacity-0 group-hover:opacity-100 text-white text-2xl font-extrabold tracking-wide px-6 text-center transition-opacity duration-300 select-none" style={{ fontFamily: 'Inter, Arial Black, Impact, sans-serif' }}>
              Tu tranquilidad, nuestra prioridad
            </span>
            <span className="block h-1 w-0 group-hover:w-32 bg-[var(--dorado-elegante)] rounded transition-all duration-500 mt-2"></span>
          </div>
        </div>
      </div>
    </section>
  );
}