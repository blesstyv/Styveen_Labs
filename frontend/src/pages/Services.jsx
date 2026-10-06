import {
  Cpu,
  Gauge,
  ShieldCheck,
  Wrench,
} from 'lucide-react'

function Services() {
  return (
    <section className="info-page">

      <div className="container">

        <div className="info-header">

          <span className="eyebrow">
            STYVEEN LABS // SERVICIOS
          </span>

          <h1>
            MÁS QUE
            <span> ARMAR UN PC.</span>
          </h1>

          <p>
            Cada equipo recibe una preparación
            técnica antes de su entrega.
          </p>

        </div>


        <div className="service-grid">

          <Service
            icon={<Cpu />}
            title="Ensamblaje"
            text="Montaje ordenado y revisión física de cada componente."
          />

          <Service
            icon={<Gauge />}
            title="Optimización"
            text="Configuración orientada a estabilidad y buen rendimiento."
          />

          <Service
            icon={<ShieldCheck />}
            title="Validación"
            text="Pruebas antes de considerar el equipo listo para entrega."
          />

          <Service
            icon={<Wrench />}
            title="Preparados para mejoras"
            text="Revisión de posibilidades de actualización futura."
          />

        </div>

      </div>

    </section>
  )
}


function Service({
  icon,
  title,
  text,
}) {
  return (
    <article className="service-card">

      {icon}

      <h2>
        {title}
      </h2>

      <p>
        {text}
      </p>

    </article>
  )
}

export default Services