function Navbar() {
  return (
    <nav className="navbar">

      {/* Brand Logo */}
      <div className="logo">
        <h2>Blush <span>&</span> Bloom</h2>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#hair">Hair</a></li>
        <li><a href="#nails">Nails</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Explore Button */}
      <a href="#services" className="explore-btn">
        Explore
      </a>

    </nav>
  )
}

export default Navbar
