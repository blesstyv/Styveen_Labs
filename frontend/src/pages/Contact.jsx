import {
  CheckCircle2,
} from 'lucide-react'

import {
  useState,
} from 'react'

import {
  useSearchParams,
} from 'react-router-dom'

import {
  useCart,
} from '../context/CartContext.jsx'

function Contact() {
  const [searchParams] = useSearchParams()

  const checkout =
    searchParams.get('checkout') === '1'

  const {
    items,
    total,
    clearCart,
  } = useCart()

  const [sent, setSent] =
    useState(false)

  const [form, setForm] =
    useState({
      name: '',
      email: '',
      phone: '',
      city: '',
      message: '',
    })


  function updateField(event) {
    const {
      name,
      value,
    } = event.target

    setForm((current) => ({
      ...current,
      [name]: value,
    }))
  }


  function submitForm(event) {
    event.preventDefault()

    const request = {
      ...form,

      products:
        items.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
        })),

      total,

      createdAt:
        new Date().toISOString(),
    }

    localStorage.setItem(
      'styveen-last-request',
      JSON.stringify(request),
    )

    if (checkout) {
      clearCart()
    }

    setSent(true)
  }


  if (sent) {
    return (
      <section className="request-success">

        <CheckCircle2 size={55} />

        <h1>
          Solicitud registrada
        </h1>

        <p>
          Tus datos y el resumen de compra
          quedaron preparados correctamente.
        </p>

        <small>
          En la siguiente etapa conectaremos
          este formulario con el canal comercial
          definitivo de STYVEEN LABS.
        </small>

      </section>
    )
  }


  return (
    <section className="contact-page">

      <div className="container contact-layout">

        <div className="contact-copy">

          <span className="eyebrow">
            STYVEEN LABS // CONTACTO
          </span>

          <h1>
            HABLEMOS DE
            <span> TU PC.</span>
          </h1>

          <p>
            Completa tus datos para consultar
            por un equipo o continuar con tu
            solicitud de compra.
          </p>

        </div>


        <form
          className="contact-form"
          onSubmit={submitForm}
        >

          <label>
            Nombre
            <input
              required
              name="name"
              value={form.name}
              onChange={updateField}
            />
          </label>


          <label>
            Correo electrónico
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={updateField}
            />
          </label>


          <label>
            Teléfono
            <input
              required
              name="phone"
              value={form.phone}
              onChange={updateField}
            />
          </label>


          <label>
            Ciudad / comuna
            <input
              required
              name="city"
              value={form.city}
              onChange={updateField}
            />
          </label>


          <label className="full-field">
            Mensaje

            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={updateField}
            />
          </label>


          {checkout &&
            items.length > 0 && (

              <div className="checkout-preview full-field">

                <span>
                  Solicitud de compra
                </span>

                {items.map((item) => (
                  <strong key={item.id}>
                    {item.name}
                  </strong>
                ))}

                <div>
                  Total:
                  {' '}
                  ${total.toLocaleString('es-CL')}
                </div>

              </div>

            )}


          <button
            type="submit"
            className="primary-button full-field"
          >
            {checkout
              ? 'REGISTRAR SOLICITUD DE COMPRA'
              : 'ENVIAR CONSULTA'}
          </button>

        </form>

      </div>

    </section>
  )
}

export default Contact