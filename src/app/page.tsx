import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="container">
        <section className="section">
          <h1 className="section-title">Servicios de Inmigración</h1>
          <p className="text-center mb-8">
            Expertos en visas de trabajo y residencia permanente en Estados Unidos
          </p>
        </section>

        <section id="h1b" className="section">
          <h2 className="section-title">Visa H1B</h2>
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

        <section id="h2b" className="section">
          <h2 className="section-title">Visa H2B</h2>
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

        <section id="eb2" className="section">
          <h2 className="section-title">Visa EB2</h2>
          <div className="visa-card">
            <h3>Residencia Permanente EB2</h3>
            <p>
              La categoría EB2 está diseñada para profesionales con títulos avanzados o personas con
              habilidades excepcionales en ciencias, artes o negocios.
            </p>
            <ul className="list-disc pl-6">
              <li>Requiere título de maestría o superior</li>
              <li>Oferta de trabajo permanente</li>
              <li>Certificación laboral requerida</li>
              <li>Camino hacia la residencia permanente</li>
            </ul>
          </div>
        </section>

        <section id="eb2-niw" className="section">
          <h2 className="section-title">EB2-NIW</h2>
          <div className="visa-card">
            <h3>Exención de Interés Nacional (NIW)</h3>
            <p>
              La exención de interés nacional permite a ciertos profesionales con habilidades
              excepcionales obtener una residencia permanente sin necesidad de una oferta de trabajo
              o certificación laboral.
            </p>
            <ul className="list-disc pl-6">
              <li>No requiere oferta de trabajo</li>
              <li>No requiere certificación laboral</li>
              <li>Ideal para investigadores y profesionales destacados</li>
              <li>Debe demostrar beneficio nacional</li>
            </ul>
          </div>
        </section>

        <section id="contacto" className="section">
          <h2 className="section-title">Contacto</h2>
          <div className="visa-card">
            <h3>¿Necesitas ayuda con tu caso?</h3>
            <p>
              Nuestro equipo de abogados especializados está listo para ayudarte con tu proceso de
              inmigración. Contáctanos para una consulta inicial.
            </p>
            <div className="mt-4">
              <p>Email: info@abogadosinmigracion.com</p>
              <p>Teléfono: (555) 123-4567</p>
              <p>Dirección: 123 Calle Principal, Ciudad, Estado</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
