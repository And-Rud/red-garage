import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <div className="header__title">RED GARAGE</div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`menu__container ${menuOpen ? "menu__container--open" : ""}`}>
        <Link className="menu__text" to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link className="menu__text" to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link className="menu__text" to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link className="menu__text" to="/moto" onClick={() => setMenuOpen(false)}>Moto</Link>
        <Link className="menu__text" to="/scooters" onClick={() => setMenuOpen(false)}>Scooters</Link>
      </div>
    </div>
  );
};

export default Header;
