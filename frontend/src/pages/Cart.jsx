import {
  ArrowRight,
  ShoppingCart,
  Trash2,
} from 'lucide-react'

import {
  Link,
} from 'react-router-dom'

import ProductImage from '../components/ProductImage.jsx'

import {
  useCart,
} from '../context/CartContext.jsx'

function Cart() {
  const {
    items,
    removeFromCart,
    total,
  } = useCart()


  if (items.length === 0) {
    return (
      <section className="empty-cart">

        <ShoppingCart size={50} />

        <h1>
          Tu carrito está vacío
        </h1>

        <p>
          Explora nuestros PCs disponibles.
        </p>

        <Link
          to="/pcs"
          className="primary-button"
        >
          VER PCs
          <ArrowRight size={17} />
        </Link>

      </section>
    )
  }


  return (
    <section className="cart-page">

      <div className="container">

        <div className="cart-heading">

          <span className="eyebrow">
            TU COMPRA
          </span>

          <h1>
            CARRITO
          </h1>

        </div>


        <div className="cart-layout">

          <div className="cart-products">

            {items.map((pc) => (

              <article
                className="cart-product"
                key={pc.id}
              >

                <ProductImage
                  pc={pc}
                  className="cart-product-image"
                />


                <div className="cart-product-info">

                  <span>
                    {pc.code}
                  </span>

                  <strong>
                    {pc.name}
                  </strong>

                  <small>
                    {pc.category}
                  </small>

                </div>


                <div className="cart-product-price">

                  ${pc.price.toLocaleString('es-CL')}

                </div>


                <button
                  type="button"
                  className="remove-button"
                  onClick={() =>
                    removeFromCart(pc.id)
                  }
                >
                  <Trash2 size={18} />
                </button>

              </article>

            ))}

          </div>


          <aside className="cart-summary">

            <h2>
              Resumen
            </h2>


            <div>

              <span>
                Productos
              </span>

              <strong>
                {items.length}
              </strong>

            </div>


            <div>

              <span>
                Total
              </span>

              <strong className="cart-total">
                ${total.toLocaleString('es-CL')}
              </strong>

            </div>


            <Link
              to="/contact?checkout=1"
              className="primary-button cart-checkout"
            >
              CONTINUAR COMPRA
              <ArrowRight size={18} />
            </Link>

          </aside>

        </div>

      </div>

    </section>
  )
}

export default Cart