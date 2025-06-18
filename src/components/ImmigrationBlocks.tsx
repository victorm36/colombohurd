import { BriefcaseIcon, CurrencyDollarIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const blocks = [
  {
    title: 'Profesionales en Inmigración',
    description: 'Nuestro equipo de abogados expertos diseña estrategias migratorias personalizadas para profesionales destacados, maximizando las posibilidades de éxito en procesos EB1 y EB2 NIW.',
    icon: <BriefcaseIcon className="h-12 w-12 text-[var(--azul-legal)] group-hover:text-[var(--dorado-elegante)] transition-colors duration-300" />,
    border: 'border-[var(--azul-legal)]',
  },
  {
    title: 'Inmigración para Inversionistas',
    description: 'Asesoramos a inversionistas en la estructuración y gestión de oportunidades migratorias seguras y rentables, especializándonos en visas E-2 y EB-5 para el crecimiento de su patrimonio en EE.UU.',
    icon: <CurrencyDollarIcon className="h-12 w-12 text-[var(--dorado-elegante)] group-hover:text-[var(--azul-legal)] transition-colors duration-300" />,
    border: 'border-[var(--dorado-elegante)]',
  },
  {
    title: 'Expertos en Peticiones Autopatrocinadas',
    description: 'Brindamos acompañamiento integral a innovadores y talentos independientes en la preparación de peticiones EB1 y EB2 NIW, destacando logros y aportes excepcionales.',
    icon: <LightBulbIcon className="h-12 w-12 text-[var(--azul-legal)] group-hover:text-[var(--dorado-elegante)] transition-colors duration-300" />,
    border: 'border-[var(--gris-profesional)]',
  },
];

export default function ImmigrationBlocks() {
  return (
    <section className="w-full py-16 px-4 flex justify-center bg-[var(--azul-legal)]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {blocks.map((block, idx) => (
          <div
            key={block.title}
            className={`group relative rounded-2xl border ${block.border} bg-white shadow-md hover:shadow-lg transition-shadow duration-300 p-10 min-h-[320px] flex flex-col items-center text-center cursor-pointer hover:scale-105 animate-fade-in-up`}
            style={{ animationDelay: `${idx * 0.2 + 0.2}s` }}
          >
            <div className="flex items-center justify-center mb-6">
              {block.icon}
            </div>
            <h3 className="text-2xl font-bold text-[var(--azul-legal)] mb-4 group-hover:text-[var(--dorado-elegante)] transition-colors duration-300 animate-fade-in-up" style={{ animationDelay: `${idx * 0.2 + 0.4}s` }}>
              {block.title}
            </h3>
            <p className="text-[var(--gris-profesional)] font-medium mb-2 text-base leading-relaxed animate-fade-in-up" style={{ animationDelay: `${idx * 0.2 + 0.6}s` }}>
              {block.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
} 