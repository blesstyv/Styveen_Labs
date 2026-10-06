import {
  useMemo,
} from 'react'

import {
  useSearchParams,
} from 'react-router-dom'

import PcCard from '../components/PcCard.jsx'

import {
  pcs,
} from '../data/pcs.js'

function PCs() {
  const [
    searchParams,
    setSearchParams,
  ] = useSearchParams()

  const query =
    searchParams.get('q') || ''

  const category =
    searchParams.get('category') || 'Todas'

  const sort =
    searchParams.get('sort') || 'default'


  const categories = [
    'Todas',
    ...new Set(
      pcs.map((pc) => pc.category),
    ),
  ]


  const filtered = useMemo(() => {
    const normalizedQuery =
      query.toLowerCase().trim()

    let result = pcs.filter((pc) => {
      const matchesSearch =
        !normalizedQuery ||
        pc.name
          .toLowerCase()
          .includes(normalizedQuery) ||
        pc.shortDescription
          .toLowerCase()
          .includes(normalizedQuery) ||
        pc.quickSpecs
          .join(' ')
          .toLowerCase()
          .includes(normalizedQuery)

      const matchesCategory =
        category === 'Todas' ||
        pc.category === category

      return (
        matchesSearch &&
        matchesCategory
      )
    })

    if (sort === 'price-asc') {
      result = [...result].sort(
        (a, b) => a.price - b.price,
      )
    }

    if (sort === 'price-desc') {
      result = [...result].sort(
        (a, b) => b.price - a.price,
      )
    }

    return result
  }, [
    query,
    category,
    sort,
  ])


  function updateParam(
    key,
    value,
  ) {
    const next =
      new URLSearchParams(searchParams)

    if (
      !value ||
      value === 'Todas' ||
      value === 'default'
    ) {
      next.delete(key)
    } else {
      next.set(key, value)
    }

    setSearchParams(next)
  }


  return (
    <section className="catalog-page">

      <div className="container">

        <div className="catalog-heading">

          <span className="eyebrow">
            STYVEEN LABS
          </span>

          <h1>
            PCs <span>DISPONIBLES.</span>
          </h1>

          <p>
            Revisa nuestros equipos disponibles,
            compara sus componentes y selecciona
            el que mejor se adapte a tu uso.
          </p>

        </div>


        <div className="catalog-toolbar">

          <div className="catalog-result-count">

            <strong>
              {filtered.length}
            </strong>

            {filtered.length === 1
              ? ' PC disponible'
              : ' PCs disponibles'}

          </div>


          <div className="catalog-controls">

            <select
              value={category}
              onChange={(event) =>
                updateParam(
                  'category',
                  event.target.value,
                )
              }
            >
              {categories.map((item) => (
                <option
                  value={item}
                  key={item}
                >
                  {item}
                </option>
              ))}
            </select>


            <select
              value={sort}
              onChange={(event) =>
                updateParam(
                  'sort',
                  event.target.value,
                )
              }
            >
              <option value="default">
                Ordenar
              </option>

              <option value="price-asc">
                Menor precio
              </option>

              <option value="price-desc">
                Mayor precio
              </option>
            </select>

          </div>

        </div>


        {query && (
          <div className="search-message">

            Resultados para:

            <strong>
              “{query}”
            </strong>

          </div>
        )}


        {filtered.length > 0 ? (

          <div className="catalog-grid">

            {filtered.map((pc) => (
              <PcCard
                pc={pc}
                key={pc.id}
              />
            ))}

          </div>

        ) : (

          <div className="empty-results">

            <h2>
              No encontramos PCs
            </h2>

            <p>
              Prueba con otra búsqueda
              o categoría.
            </p>

          </div>

        )}

      </div>

    </section>
  )
}

export default PCs