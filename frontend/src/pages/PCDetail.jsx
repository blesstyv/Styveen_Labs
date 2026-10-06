import {
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  ShoppingCart,
} from 'lucide-react'

import {
  Link,
  useNavigate,
  useParams,
} from 'react-router-dom'

import ProductImage from '../components/ProductImage.jsx'

import {
  useCart,
} from '../context/CartContext.jsx'

import {
  pcs,
} from '../data/pcs.js'

function PCDetail() {
  const { slug } = useParams()

  const navigate = useNavigate()

  const {
    addToCart,
  } = useCart()

  const pc = pcs.find(
    (item) => item.slug === slug,
  )

  if (!pc) {
    return (
      <section className="not-found">

        <h1>
          PC no encontrado
        </h1>

        <Link to="/pcs">
          Volver al catálogo
        </Link>

      </section>
    )
  }


  function addProduct() {
    addToCart(pc)
  }


  function buyNow() {
    addToCart(pc)

    navigate('/cart')
  }


  return (
    <>

      <section className="product-detail-page">

        <div className="container">

          <Link
            to="/pcs"
            className="back-link"
          >
            <ArrowLeft size={17} />
            Volver a PCs disponibles
          </Link>


          <div className="product-main">

            <div className="product-gallery">

              <ProductImage
                pc={pc}
                className="product-detail-image"
              />

            </div>


            <div className="product-information">

              <span className="product-code">
                {pc.code}
              </span>


              <span className="product-category">
                {pc.category}
              </span>


              <h1>
                {pc.name}
              </h1>


              <div className="product-status">

                <span className="status-dot" />

                {pc.status}

              </div>


              <p>
                {pc.description}
              </p>


              <div className="product-price">

                <span>
                  Precio
                </span>

                <strong>
                  ${pc.price.toLocaleString('es-CL')}
                </strong>

              </div>


              <div className="product-actions">

                <button
                  type="button"
                  className="primary-button"
                  onClick={buyNow}
                >
                  <ShoppingCart size={19} />

                  COMPRAR PC
                </button>


                <button
                  type="button"
                  className="secondary-button"
                  onClick={addProduct}
                >
                  AGREGAR AL CARRITO
                </button>

              </div>


              <div className="purchase-security">

                <ShieldCheck size={20} />

                <span>
                  Equipo probado y validado
                  antes de su entrega.
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      <section className="specifications-section">

        <div className="container">

          <div className="section-title">

            <span className="eyebrow">
              CONFIGURACIÓN
            </span>

            <h2>
              COMPONENTES
            </h2>

          </div>


          <div className="specification-grid">

            {pc.specs.map((spec) => (

              <article
                className="specification-item"
                key={spec.label}
              >

                <span>
                  {spec.label}
                </span>

                <strong>
                  {spec.value}
                </strong>

                {spec.detail && (
                  <small>
                    {spec.detail}
                  </small>
                )}

              </article>

            ))}

          </div>

        </div>

      </section>


      <section className="upgrade-section">

        <div className="container">

          <div className="upgrade-box">

            <ShieldCheck size={29} />

            <div>

              <span className="eyebrow">
                PREPARADO PARA MEJORAS
              </span>

              <h2>
                AGREGA UNA GPU EN EL FUTURO
              </h2>

              <p>
                {pc.upgrade}
              </p>

            </div>

          </div>

        </div>

      </section>


      <section className="validation-section">

        <div className="container">

          <div className="section-title">

            <span className="eyebrow">
              STYVEEN LABS
            </span>

            <h2>
              VALIDACIÓN DEL EQUIPO
            </h2>

          </div>


          <div className="validation-grid">

            {pc.validation.map((item) => (

              <div
                className="validation-item"
                key={item}
              >
                <CheckCircle2 size={18} />

                <span>
                  {item}
                </span>
              </div>

            ))}

          </div>

        </div>

      </section>

    </>
  )
}

export default PCDetail