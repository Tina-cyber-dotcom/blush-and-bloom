import { useState } from 'react'

// WhatsApp username (same as Instagram)
const WHATSAPP_USERNAME = 'its.tina.aura'

function Contact() {
  const [form, setForm] = useState({
    name: '',
    service: 'Braiding',
    date: '',
    message: '',
  })

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()

    const lines = [
      `Hello Blush & Bloom, my name is ${form.name}.`,
      `Service: ${form.service}`,
      `Preferred date: ${form.date || 'Not decided yet'}`,
    ]
    if (form.message.trim()) lines.push(`Message: ${form.message.trim()}`)

    const url = `https://wa.me/${WHATSAPP_USERNAME}?text=${encodeURIComponent(
      lines.join('\n')
    )}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const chatLink = `https://wa.me/${WHATSAPP_USERNAME}?text=${encodeURIComponent(
    'Hello Blush & Bloom, I would like to book an appointment.'
  )}`

  return (
    <main>
      {/* Big title */}
      <header className="about-title">
        <h1>Contact</h1>
      </header>

      {/* Details and form */}
      <section className="contact-split">
        <div className="contact-info">
          <h2>Let&rsquo;s Talk</h2>
          <p className="about-lead">Book an appointment or ask a question.</p>
          <p className="contact-intro">
            I work by appointment only. Send me a message and we will plan the
            rest.
          </p>

          <ul className="contact-list">
            <li>
              <a
                className="contact-item"
                href={chatLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-icon"><i className="fa-brands fa-whatsapp" /></span>
                <span>
                  <small>WhatsApp</small>
                  <strong>Chat with us</strong>
                </span>
              </a>
            </li>
            <li>
              <a
                className="contact-item"
                href="https://www.instagram.com/its.tina.aura/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-icon"><i className="fa-brands fa-instagram" /></span>
                <span>
                  <small>Instagram</small>
                  <strong>@its.tina.aura</strong>
                </span>
              </a>
            </li>
            <li>
              <a
                className="contact-item"
                href="https://www.tiktok.com/@i_am_imlah"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-icon"><i className="fa-brands fa-tiktok" /></span>
                <span>
                  <small>TikTok</small>
                  <strong>@i_am_imlah</strong>
                </span>
              </a>
            </li>
            <li>
              <a className="contact-item" href="mailto:tinajohnson.ke@gmail.com">
                <span className="contact-icon"><i className="fa-solid fa-envelope" /></span>
                <span>
                  <small>Email</small>
                  <strong>tinajohnson.ke@gmail.com</strong>
                </span>
              </a>
            </li>
            <li>
              <div className="contact-item">
                <span className="contact-icon"><i className="fa-solid fa-location-dot" /></span>
                <span>
                  <small>Location</small>
                  <strong>Meru Town, Meru County</strong>
                </span>
              </div>
            </li>
            <li>
              <div className="contact-item">
                <span className="contact-icon"><i className="fa-solid fa-clock" /></span>
                <span>
                  <small>Hours</small>
                  <strong>Weekends and public holidays</strong>
                  <em>By appointment only</em>
                </span>
              </div>
            </li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Book an appointment</h3>

          <label htmlFor="name">Your name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="service">Service</label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
          >
            <option>Braiding</option>
            <option>Hair Growth Oils</option>
          </select>

          <label htmlFor="date">Preferred date</label>
          <input
            id="date"
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
          />

          <label htmlFor="message">Message (optional)</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Tell me the style you would like"
            value={form.message}
            onChange={handleChange}
          />

          <button type="submit" className="form-submit">
            Send on WhatsApp
          </button>
        </form>
      </section>

      {/* Closing */}
      <section className="about-values">
        <div className="about-sign" style={{ marginTop: 0 }}>
          <p className="sign-name">Blush &amp; Bloom by Tina Johnson.</p>
          <p className="sign-tag" style={{ marginBottom: 0 }}>The Art of Beauty.</p>
        </div>
      </section>
    </main>
  )
}

export default Contact