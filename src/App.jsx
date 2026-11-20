import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import './App.css'

const images = [
  '/images/slide-1.jpg',
  '/images/slide-2.jpg',
  '/images/slide-3.jpg',
  '/images/slide-4.jpg'
]

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Automatically change images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((previousSlide) =>
        (previousSlide + 1) % images.length
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Navbar />

      <main>
        <section id="home" className="home-hero">

          {/* Automatic Slideshow */}
          <div className="slideshow">
            {images.map((image, index) => (
              <img
                key={image}
                src={image}
                alt="Blush & Bloom hair inspiration"
                className={`slide ${
                  currentSlide === index ? 'active' : ''
                }`}
              />
            ))}
          </div>

          {/* Welcome Text */}
          <div className="hero-content">
            <h1>Welcome to Blush & Bloom</h1>
            <p>Beauty, elegance and confidence.</p>
          </div>

        </section>
      </main>
    </>
  )
}

export default App