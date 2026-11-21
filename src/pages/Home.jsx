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
    </main>
  )
}

export default Home