import Slideshow from '../components/Slideshow'

// WhatsApp username (same as Instagram)
const WHATSAPP_USERNAME = 'its.tina.aura'

// Banner photos (swap for your braiding and oil photos)
const bannerImages = ['/images/slide-2.jpg', '/images/slide-3.jpg']

// HAIR OILS: leave this list empty to show "Coming soon".
// When you have your real products, add them like this:
// { id: 1, name: 'Product name', size: '100 ml', price: 'KSh 1,200', image: '/images/oil-1.jpg' },
const oils = []

// BRAIDING: add a line for each style.
const braids = [
  { id: 1, name: 'Cornrows', price: 'KSh 1,500', image: '/images/Cornrows_1.jpg' },
  { id: 2, name: 'Fulani Braids', price: 'KSh 1,500', image: '/images/Fulani_braids_1.jpg' },
  { id: 3, name: 'Boho Fulani Braids', price: 'KSh 2,000', image: '/images/Boho_fulani_braids_1.jpg' },
]

function Hair() {
  const whatsappLink = (message) =>
    `https://wa.me/${WHATSAPP_USERNAME}?text=${encodeURIComponent(message)}`

  const orderLink = (name) =>
    whatsappLink(`Hello Blush & Bloom, I would like to order the ${name}.`)

  const bookLink = (name) =>
    whatsappLink(`Hello Blush & Bloom, I would like to book the ${name}.`)

  return (
    <main>
      {/* Banner */}
      <section className="home-hero page-hero">
        <Slideshow images={bannerImages} alt="Blush & Bloom hair" />
        <div className="hero-content">
          <h1>Hair</h1>
          <p>Hair growth oils and braiding, made with care.</p>
        </div>
      </section>

      {/* Hair navbar */}
      <nav className="sub-navbar">
        <a href="#hair-oils">Hair Oils</a>
        <a href="#braiding">Braiding</a>
      </nav>

      {/* Hair oils */}
      <section id="hair-oils">
        <h2>Hair Growth Oils</h2>
        <p>Natural oils to nourish your scalp and help your hair grow strong and thick.</p>

        {oils.length === 0 ? (
          <div className="coming-soon">
            <span className="coming-soon-tag">Coming soon</span>
            <h3>Our hair growth oils are on the way</h3>
            <p>
              We are getting the full range ready. Message us to be the first
              to know when they are available.
            </p>
            <a
              className="card-btn"
              href={whatsappLink(
                'Hello Blush & Bloom, please let me know when the hair growth oils are available.'
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Notify me on WhatsApp
            </a>
          </div>
        ) : (
          <div className="card-grid">
            {oils.map((oil) => (
              <article className="card" key={oil.id}>
                <img src={oil.image} alt={oil.name} />
                <div className="card-body">
                  <h3>{oil.name}</h3>
                  <p className="card-meta">{oil.size}</p>
                  <span className="price">{oil.price}</span>
                  <a
                    className="card-btn"
                    href={orderLink(oil.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Order on WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Braiding */}
      <section id="braiding" className="alt-bg">
        <h2>Braiding</h2>
        <p>Neat, long-lasting braids done gently to protect your hair.</p>

        {braids.length === 0 ? (
          <div className="coming-soon">
            <span className="coming-soon-tag">Coming soon</span>
            <h3>Our braiding styles are on the way</h3>
            <p>Message us to book a braiding appointment in the meantime.</p>
            <a
              className="card-btn"
              href={whatsappLink('Hello Blush & Bloom, I would like to book a braiding appointment.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book on WhatsApp
            </a>
          </div>
        ) : (
          <div className="card-grid">
            {braids.map((style) => (
              <article className="card" key={style.id}>
                <img src={style.image} alt={style.name} />
                <div className="card-body">
                  <h3>{style.name}</h3>
                  <span className="price">{style.price}</span>
                  <a
                    className="card-btn"
                    href={bookLink(style.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book on WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

export default Hair