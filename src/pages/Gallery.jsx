import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// GALLERY PHOTOS: leave this list empty to show "Coming soon".
// When you have your own photos, put them in public/images/ and add
// one line per photo, like this:
// { id: 1, src: '/images/my-photo.jpg', title: 'Knotless Braids', category: 'Braiding' },
// category must be 'Braiding' or 'Hair Oils'
const photos = []

const categories = ['All', 'Braiding', 'Hair Oils']

function Gallery() {
  const [filter, setFilter] = useState('All')
  const [openIndex, setOpenIndex] = useState(null)

  const visible =
    filter === 'All' ? photos : photos.filter((p) => p.category === filter)

  const close = () => setOpenIndex(null)
  const next = () => setOpenIndex((i) => (i + 1) % visible.length)
  const prev = () => setOpenIndex((i) => (i - 1 + visible.length) % visible.length)

  // Keyboard controls and scroll lock while a photo is open
  useEffect(() => {
    if (openIndex === null) return

    const onKey = (e) => {
      if (e.key === 'Escape') setOpenIndex(null)
      if (e.key === 'ArrowRight') setOpenIndex((i) => (i + 1) % visible.length)
      if (e.key === 'ArrowLeft') setOpenIndex((i) => (i - 1 + visible.length) % visible.length)
    }

    document.addEventListener('keydown', onKey)
    document.body.classList.add('lightbox-open')

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.classList.remove('lightbox-open')
    }
  }, [openIndex, visible.length])

  const current = openIndex !== null ? visible[openIndex] : null

  return (
    <main>
      {/* Big title */}
      <header className="about-title">
        <h1>Gallery</h1>
      </header>

      <section className="gallery-section">
        {photos.length === 0 ? (
          <div className="coming-soon">
            <span className="coming-soon-tag">Coming soon</span>
            <h3>My gallery is on the way</h3>
            <p>
              I am putting together photos of my work. In the meantime, follow
              along on Instagram and TikTok.
            </p>
            <div className="coming-soon-actions">
              <a
                className="card-btn"
                href="https://www.instagram.com/its.tina.aura/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                className="card-btn"
                href="https://www.tiktok.com/@i_am_imlah"
                target="_blank"
                rel="noopener noreferrer"
              >
                TikTok
              </a>
            </div>
          </div>
        ) : (
          <>
            <div className="gallery-filters">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`filter-btn ${filter === cat ? 'active' : ''}`}
                  onClick={() => setFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="gallery-grid">
              {visible.map((photo, index) => (
                <button
                  key={photo.id}
                  type="button"
                  className="gallery-item"
                  onClick={() => setOpenIndex(index)}
                >
                  <img src={photo.src} alt={photo.title} loading="lazy" />
                  <span className="gallery-caption">{photo.title}</span>
                </button>
              ))}
            </div>
          </>
        )}
      </section>

      {/* Enlarged photo */}
      {current && (
        <div className="lightbox" onClick={close}>
          <button className="lightbox-close" onClick={close} aria-label="Close">
            &times;
          </button>

          <button
            className="lightbox-nav prev"
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label="Previous photo"
          >
            <i className="fa-solid fa-chevron-left" />
          </button>

          <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <img src={current.src} alt={current.title} />
            <figcaption>{current.title}</figcaption>
          </figure>

          <button
            className="lightbox-nav next"
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="Next photo"
          >
            <i className="fa-solid fa-chevron-right" />
          </button>
        </div>
      )}

      {/* Closing */}
      <section className="about-values">
        <div className="about-sign" style={{ marginTop: 0 }}>
          <p className="sign-name">Like what you see?</p>
          <p className="sign-tag">Book an appointment</p>
          <Link className="card-btn" to="/contact">Book Now</Link>
        </div>
      </section>
    </main>
  )
}

export default Gallery