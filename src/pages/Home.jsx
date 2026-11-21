import Slideshow from '../components/Slideshow'

const images = [
  '/images/slide-1.jpg',
  '/images/slide-2.jpg',
  '/images/slide-3.jpg',
  '/images/slide-4.jpg',
]

function Home() {
  return (
    <main>
      <section id="home" className="home-hero">
        <Slideshow images={images} alt="Blush & Bloom hair inspiration" />

        <div className="hero-content">
          <h1>Welcome to Blush &amp; Bloom</h1>
          <p>Beauty, elegance and confidence.</p>
        </div>
      </section>

      <section id="about">
        <h2>About</h2>
        <p>Add your story here.</p>
      </section>

      <section id="gallery" className="alt-bg">
        <h2>Gallery</h2>
        <p>Your best work will go here.</p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Add your phone, location and opening hours here.</p>
      </section>
    </main>
  )
}

export default Home