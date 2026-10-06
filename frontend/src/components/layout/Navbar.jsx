import {
  Menu,
  Search,
  ShoppingCart,
  X,
} from 'lucide-react'

import {
  useState,
} from 'react'

import {
  Link,
  NavLink,
  useNavigate,
} from 'react-router-dom'

import BrandLogo from '../BrandLogo.jsx'

import {
  useCart,
} from '../../context/CartContext.jsx'


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const [search, setSearch] = useState('')

  const navigate = useNavigate()

  const {
    cartCount,
  } = useCart()


  function submitSearch(event) {
    event.preventDefault()

    const value = search.trim()

    if (!value) {
      navigate('/pcs')
      return
    }

    navigate(
      `/pcs?q=${encodeURIComponent(value)}`,
    )
  }


  function closeMenu() {
    setMenuOpen(false)
  }


  return (
    <header className="navbar">

      <div className="container navbar-main">

        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <BrandLogo />
        </Link>


        <form
          className="navbar-search"
          onSubmit={submitSearch}
        >

          <input
            type="search"
            placeholder="Busca tu próximo PC..."
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
          />

          <button
            type="submit"
            aria-label="Buscar"
          >
            <Search size={19} />
          </button>

        </form>


        <Link
          to="/cart"
          className="navbar-cart"
        >
          <ShoppingCart size={23} />

          {cartCount > 0 && (
            <span>
              {cartCount}
            </span>
          )}
        </Link>


        <button
          type="button"
          className="mobile-menu-button"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          aria-label="Abrir menú"
        >
          {menuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

      </div>


      <nav
        className={`main-navigation ${
          menuOpen
            ? 'main-navigation--open'
            : ''
        }`}
      >

        <div className="container navigation-content">

          <NavLink
            to="/pcs"
            onClick={closeMenu}
          >
            PCs Disponibles
          </NavLink>

          <NavLink
            to="/services"
            onClick={closeMenu}
          >
            Servicios
          </NavLink>

          <NavLink
            to="/proceso-armado"
            onClick={closeMenu}
          >
            Proceso de armado
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenu}
          >
            Nosotros
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
          >
            Contacto
          </NavLink>

        </div>

      </nav>

    </header>
  )
}


export default Navbar