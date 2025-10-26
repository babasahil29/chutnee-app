import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import '../styles/header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <div className="logo-icon">🌶️</div>
          <h1 className="logo-text">ChutNee</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="header-nav-desktop">
          <a href="#recipes" className="nav-link">Recipes</a>
          <a href="#categories" className="nav-link">Categories</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="header-nav-mobile">
          <a href="#recipes" className="nav-link-mobile" onClick={() => setIsMenuOpen(false)}>Recipes</a>
          <a href="#categories" className="nav-link-mobile" onClick={() => setIsMenuOpen(false)}>Categories</a>
          <a href="#about" className="nav-link-mobile" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#contact" className="nav-link-mobile" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </nav>
      )}
    </header>
  );
}

