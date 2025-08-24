import { Github, Instagram, Youtube, Facebook } from "lucide-react";

export default function FunelFooter() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Header with Logo and Social Links */}
        <div className="footer-header">
          {/* Logo */}
          <div className="logo-container">
            <div className="logo-icon"></div>
            <span className="logo-text">Funel</span>
          </div>

          {/* Social Links */}
          <div className="social-container">
            <span className="social-text">Follow us on</span>
            <a href="#" className="social-link">
              <Github size={20} />
            </a>
            <a href="#" className="social-link">
              <Instagram size={20} />
            </a>
            <a href="#" className="social-link">
              <Youtube size={20} />
            </a>
            <a href="#" className="social-link">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="footer-nav">
          <div className="nav-section">
            <h3 className="nav-title">Company</h3>
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="nav-section">
            <h3 className="nav-title">Products</h3>
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Help Center
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="nav-section">
            <h3 className="nav-title">Resources</h3>
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  FAQ's
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Testimonial
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Relevant */}
          <div className="nav-section">
            <h3 className="nav-title">Relevant</h3>
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Why
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Customers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
