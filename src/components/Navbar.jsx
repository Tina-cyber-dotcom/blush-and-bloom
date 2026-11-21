import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hairOpen, setHairOpen] = useState(false)
  const { pathname } = useLocation()

  const closeMenu = () => setMenuOpen(false)

  // Lock page scroll while the panel is open, and close it with Escape
  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)

    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.classList.remove('menu-open')
    }
  }, [menuOpen])

  return (
    <>
      {/* Dark navbar */}
      <header className="navbar">
        <Link to="/" className="brand">
          <span className="brand-name">
            <span className="blush">Blush</span> <em>&amp;</em> <b>Bloom</b>
          </span>
          <span className="brand-by">by Tina Johnson</span>
        </Link>

        <button
          className="explore-btn"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          Explore <span className="dot" />
        </button>
      </header>

      {/* Dark overlay behind the panel */}
      <div
        className={`menu-overlay ${menuOpen ? 'open' : ''}`}
        onClick={closeMenu}
      />

      {/* Explore panel */}
      <aside className={`menu-panel ${menuOpen ? 'open' : ''}`} inert={!menuOpen}>
        <div className="menu-top">
          <div className="menu-social">
            <a
              href="https://www.instagram.com/its.tina.aura/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram" />
            </a>
            <a
              href="https://www.tiktok.com/@i_am_imlah"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <i className="fa-brands fa-tiktok" />
            </a>
          </div>
          <button className="menu-close" onClick={closeMenu} aria-label="Close menu">
            &times;
          </button>
        </div>

        <div className="menu-brand">
          <span className="brand-name">
            <span className="blush">Blush</span> <em>&amp;</em> <b>Bloom</b>
          </span>
          <span className="brand-by">by Tina Johnson</span>
        </div>

        <nav className="menu-links">
          <Link to="/" onClick={closeMenu} className={pathname === '/' ? 'current' : ''}>
            Home
          </Link>
          <Link to="/#about" onClick={closeMenu}>About</Link>

          <div className={`has-sub ${hairOpen ? 'open' : ''}`}>
            <div className="link-row">
              <Link
                to="/hair"
                onClick={closeMenu}
                className={pathname === '/hair' ? 'current' : ''}
              >
                Hair
              </Link>
              <button
                className="sub-toggle"
                onClick={() => setHairOpen(!hairOpen)}
                aria-label="Show hair pages"
              >
                <i className="fa-solid fa-chevron-down" />
              </button>
            </div>
            <div className="sub-links">
              <Link to="/hair#hair-oils" onClick={closeMenu}>Hair Oils</Link>
              <Link to="/hair#braiding" onClick={closeMenu}>Braiding</Link>
            </div>
          </div>

          <Link to="/#gallery" onClick={closeMenu}>Gallery</Link>
          <Link to="/#contact" onClick={closeMenu}>Contact</Link>
        </nav>

        <Link to="/#contact" onClick={closeMenu} className="menu-book">
          Book Now
        </Link>
      </aside>
    </>
  )
}

export default Navbar