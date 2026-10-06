import {
  ArrowRight,
  CheckCircle2,
  Gauge,
  ShieldCheck,
  Wrench,
} from 'lucide-react'

import {
  Link,
} from 'react-router-dom'

import PcCard from '../components/PcCard.jsx'

import {
  pcs,
} from '../data/pcs.js'


function Home() {
  const featuredPc = pcs[0]

  return (
    <>

      {/* HERO PRINCIPAL */}

      <section className="home-hero home-hero-centered">

        <div className="home-hero-glow" />

        <div className="container hero-centered-container">

          <div className="hero-centered-content">

            <span className="eyebrow">
              STYVEEN LABS // HARDWARE CON IDENTIDAD
            </span>


            <h1 className="hero-centered-title">

              TU PC.

              <span>
                TU NIVEL.
              </span>

            </h1>


            <p className="hero-centered-description">

              Computadores seleccionados, ensamblados y
              validados para distintos tipos de usuario,
              desde configuraciones equilibradas hasta
              futuros equipos de alto rendimiento.

            </p>


            <div className="home-hero-actions hero-centered-actions">

              <Link
                to="/pcs"
                className="primary-button"
              >
                VER PCs DISPONIBLES

                <ArrowRight size={18} />
              </Link>


              <Link
                to="/about"
                className="secondary-button"
              >
                CONOCER STYVEEN LABS
              </Link>

            </div>


            <div className="hero-benefits hero-benefits-centered">

              <div>

                <Gauge size={17} />

                <span>
                  Rendimiento real
                </span>

              </div>


              <div>

                <ShieldCheck size={17} />

                <span>
                  Probado y validado
                </span>

              </div>


              <div>

                <Wrench size={17} />

                <span>
                  Preparado para mejoras
                </span>

              </div>

            </div>

          </div>


          {/* PRINCIPIOS */}

          <div className="brand-principles-centered">

            <article className="principle-card">

              <div className="principle-icon">
                <CheckCircle2 size={20} />
              </div>

              <div>

                <strong>
                  Componentes seleccionados
                </strong>

                <p>
                  Configuraciones coherentes con el nivel,
                  objetivo y precio de cada computador.
                </p>

              </div>

            </article>


            <article className="principle-card">

              <div className="principle-icon">
                <ShieldCheck size={20} />
              </div>

              <div>

                <strong>
                  Validación antes de entregar
                </strong>

                <p>
                  Revisión de estabilidad, temperaturas
                  y funcionamiento general del equipo.
                </p>

              </div>

            </article>


            <article className="principle-card">

              <div className="principle-icon">
                <Wrench size={20} />
              </div>

              <div>

                <strong>
                  Pensados para evolucionar
                </strong>

                <p>
                  Consideramos futuras mejoras desde
                  la selección inicial de componentes.
                </p>

              </div>

            </article>

          </div>


          <Link
            to="/proceso-armado"
            className="hero-process-link"
          >
            CONOCER NUESTRO PROCESO DE ARMADO

            <ArrowRight size={16} />
          </Link>

        </div>

      </section>



      {/* PCs DISPONIBLES */}

      <section className="home-products">

        <div className="container home-products-centered">

          <header className="section-header-centered">

            <span className="eyebrow">
              DISPONIBLES AHORA
            </span>


            <h2>
              NUESTROS
              <span> PCs.</span>
            </h2>


            <p>
              Solo publicamos computadores que realmente
              están disponibles para la venta.
            </p>

          </header>


          <div className="home-product-grid home-product-grid-centered">

            <PcCard pc={featuredPc} />

          </div>


          <div className="section-action-centered">

            <Link
              to="/pcs"
              className="section-link"
            >
              VER CATÁLOGO COMPLETO

              <ArrowRight size={17} />
            </Link>

          </div>

        </div>

      </section>



      {/* PROCESO DE ARMADO */}

      <section className="home-lab-section">

        <div className="container home-lab-centered">

          <span className="eyebrow">
            STYVEEN LABS // PROCESO DE ARMADO
          </span>


          <h2>
            ARMA.
            <span> CONFIGURA. </span>
            PRUEBA.
          </h2>


          <p className="lab-centered-description">

            Cada PC pasa por un proceso de montaje,
            configuración y revisión antes de
            considerarse listo para su entrega.

          </p>


          <Link
            to="/proceso-armado"
            className="secondary-button"
          >
            VER PROCESO DE ARMADO

            <ArrowRight size={17} />
          </Link>

        </div>

      </section>

    </>
  )
}


export default Home