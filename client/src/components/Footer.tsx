import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-section">
            <div className="footer-logo">
              <span className="footer-logo-icon">🌶️</span>
              <h3 className="footer-logo-text">ChutNee</h3>
            </div>
            <p className="footer-description">
              Bringing authentic chutney recipes and culinary traditions to your kitchen.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#recipes">Recipes</a></li>
              <li><a href="#categories">Categories</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-title">Contact</h4>
            <div className="footer-contact">
              <a href="mailto:hello@chutnee.com" className="contact-link">
                <Mail size={18} />
                hello@chutnee.com
              </a>
              <a href="tel:+1234567890" className="contact-link">
                <Phone size={18} />
                +1 (234) 567-890
              </a>
              <div className="contact-link">
                <MapPin size={18} />
                123 Spice Street, Flavor City
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="footer-section">
            <h4 className="footer-title">Follow Us</h4>
            <div className="footer-social">
              <a href="#" aria-label="Facebook" className="social-link">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="social-link">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="social-link">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; 2024 ChutNee. All rights reserved.</p>
          <div className="footer-links-bottom">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

