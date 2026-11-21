// WhatsApp username (same as Instagram)
const WHATSAPP_USERNAME = 'its.tina.aura'

// Photo for the About page (file is in public/images)
const ABOUT_PHOTO = '/images/black_woman.jpg'

function About() {
  const chatLink = `https://wa.me/${WHATSAPP_USERNAME}?text=${encodeURIComponent(
    'Hello Blush & Bloom, I would like to know more about your services.'
  )}`

  return (
    <main>
      {/* Big title */}
      <header className="about-title">
        <h1>About</h1>
      </header>

      {/* Half photo, half story */}
      <section className="about-split">
        <div className="about-photo">
          <img src={ABOUT_PHOTO} alt="Blush & Bloom by Tina Johnson" />
        </div>

        <div className="about-text">
          <h2>My Story</h2>
          <p className="about-lead">A Love for Beauty. A Vision for Growth.</p>

          <p>
            Blush &amp; Bloom was born out of my love for hair and beauty and
            my desire to turn that passion into something meaningful.
          </p>
          <p>
            What began as an appreciation for the creativity and confidence
            that beauty inspires gradually grew into an entrepreneurial
            vision. Seeing an opportunity within the beauty industry, I
            decided to transform my passion into a brand that brings together
            my love for hair, an appreciation for individual style and a
            commitment to quality.
          </p>
          <p>
            Through Blush &amp; Bloom, I hope to create more than just a
            beauty brand. I want to build a space where beauty, creativity
            and self-expression come together.
          </p>
        </div>
      </section>

      {/* Vision and philosophy */}
      <section className="about-values">
        <div className="about-cards">
          <article className="about-card">
            <span className="about-icon"><i className="fa-solid fa-seedling" /></span>
            <h3>My Vision</h3>
            <p>
              To grow Blush &amp; Bloom into a trusted beauty brand that
              inspires confidence, celebrates individuality and makes every
              beauty experience worthwhile.
            </p>
          </article>

          <article className="about-card">
            <span className="about-icon"><i className="fa-solid fa-heart" /></span>
            <h3>My Philosophy</h3>
            <p>
              I believe beauty is personal. Every style tells a story, every
              detail matters, and confidence is always in fashion.
            </p>
          </article>
        </div>

        <div className="about-sign">
          <p className="sign-name">Blush &amp; Bloom by Tina Johnson.</p>
          <p className="sign-tag">The Art of Beauty.</p>
          <a
            className="card-btn"
            href={chatLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat with us on WhatsApp
          </a>
        </div>
      </section>
    </main>
  )
}

export default About