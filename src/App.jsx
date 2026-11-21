import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Hair from './pages/Hair'
import Contact from './pages/Contact'
import './App.css'

// Scrolls to #sections when a link like /hair#braiding is clicked,
// and back to the top when you open a new page
function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash])

  return null
}

function App() {
  return (
    <>
      <Navbar />
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hair" element={<Hair />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App