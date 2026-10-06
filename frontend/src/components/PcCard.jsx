import {
  ArrowRight,
  Cpu,
  HardDrive,
  MemoryStick,
} from 'lucide-react'

import {
  Link,
} from 'react-router-dom'

import ProductImage from './ProductImage.jsx'

function PcCard({ pc }) {
  return (
    <article className="pc-card">

      <Link
        to={`/pcs/${pc.slug}`}
        className="pc-card-image-link"
      >
        <span className="pc-card-code">
          {pc.code}
        </span>

        <ProductImage
          pc={pc}
          className="pc-card-image"
        />
      </Link>


      <div className="pc-card-body">

        <div className="pc-card-availability">

          <span className="status-dot" />

          {pc.status}

        </div>


        <span className="pc-card-category">
          {pc.category}
        </span>


        <Link
          to={`/pcs/${pc.slug}`}
        >
          <h2>
            {pc.name}
          </h2>
        </Link>


        <p>
          {pc.shortDescription}
        </p>


        <div className="quick-specs">

          <div>
            <Cpu size={16} />
            <span>{pc.quickSpecs[0]}</span>
          </div>

          <div>
            <MemoryStick size={16} />
            <span>{pc.quickSpecs[1]}</span>
          </div>

          <div>
            <HardDrive size={16} />
            <span>{pc.quickSpecs[2]}</span>
          </div>

        </div>


        <div className="pc-card-footer">

          <div className="card-price">

            <span>
              Precio
            </span>

            <strong>
              ${pc.price.toLocaleString('es-CL')}
            </strong>

          </div>


          <Link
            to={`/pcs/${pc.slug}`}
            className="card-button"
          >
            VER PC
            <ArrowRight size={16} />
          </Link>

        </div>

      </div>

    </article>
  )
}

export default PcCard