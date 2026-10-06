import {
  Link,
} from 'react-router-dom'

import BrandLogo from '../BrandLogo.jsx'


function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        <div className="footer-brand">

          <BrandLogo />

          <p>
            PCs ensamblados, configurados y
            validados antes de su entrega.
          </p>

        </div>


        <div className="footer-column">

          <strong>
            PCs
          </strong>

          <Link to="/pcs">
            PCs Disponibles
          </Link>

          <Link to="/proceso-armado">
            Proceso de armado
          </Link>

        </div>


        <div className="footer-column">

          <strong>
            STYVEEN LABS
          </strong>

          <Link to="/about">
            Nosotros
          </Link>

          <Link to="/services">
            Servicios
          </Link>

          <Link to="/contact">
            Contacto
          </Link>

        </div>

      </div>


      <div className="container footer-bottom">

        <span>
          © 2026 STYVEEN LABS
        </span>

        <span>
          ARMADO // CONFIGURADO // VALIDADO
        </span>

      </div>

    </footer>
  )
}


export default Footer