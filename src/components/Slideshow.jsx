import { useState, useEffect } from 'react'

function Slideshow({ images, alt, interval = 5000 }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((previous) => (previous + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval])

  return (
    <div className="slideshow">
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={alt}
          className={`slide ${currentSlide === index ? 'active' : ''}`}
        />
      ))}
    </div>
  )
}

export default Slideshow