import Navbar from '@/components/Navbar';

export default function H2BPage() {
  return (
    <main>
      <Navbar />
      <div className="container">
        <section className="section">
          <h1 className="section-title">Visa H2B</h1>
          <div className="visa-card">
            <h3>Visa H2B para Trabajadores Temporales</h3>
            <p>
              La visa H2B está diseñada para trabajadores temporales no agrícolas que vienen a
              Estados Unidos para realizar trabajos temporales o estacionales.
            </p>
            <ul className="list-disc pl-6">
              <li>Duración máxima de 1 año, renovable hasta 3 años</li>
              <li>Ideal para trabajos estacionales o picos de demanda</li>
              <li>Requiere certificación laboral del Departamento de Trabajo</li>
              <li>Límite anual de visas disponibles</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
} 