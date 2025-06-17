import Navbar from '@/components/Navbar';

export default function H1BPage() {
  return (
    <main>
      <Navbar />
      <div className="container">
        <section className="section">
          <h1 className="section-title">Visa H1B</h1>
          <div className="visa-card">
            <h3>Visa H1B para Profesionales</h3>
            <p>
              La visa H1B está diseñada para profesionales con títulos universitarios que buscan trabajar
              en Estados Unidos en ocupaciones especializadas. Esta visa permite a los empleadores
              contratar trabajadores extranjeros para ocupar puestos que requieren conocimientos
              especializados.
            </p>
            <ul className="list-disc pl-6">
              <li>Duración inicial de 3 años, renovable hasta 6 años</li>
              <li>Permite trabajar para un empleador específico</li>
              <li>Requiere un título universitario o equivalente</li>
              <li>Proceso de lotería anual</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
} 