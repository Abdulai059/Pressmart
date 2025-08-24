import SOCIAL_LINKS from "./social";

import navLink from "./footerData";

// Reusable components
function SocialLink({ Icon, href, label }) {
  return (
    <a href={href} className="social-link" aria-label={label}>
      <Icon size={20} key={Icon} />
    </a>
  );
}

function NavSection({ title, links }) {
  return (
    <div className="nav-section">
      <h3 className="nav-title">{title}</h3>
      <ul className="nav-list">
        {links.map((link) => (
          <li key={link} className="nav-item">
            <a href="#" className="nav-link">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FunelFooter() {
  return (
    <footer className="footer">
      <span className="footer-wrapper">
        <div className="footer-container">
          {/* Header with Logo and Social Links */}
          <div className="footer-header">
            {/* Logo */}
            <div className="logo-container">
              <div className="logo-icon"></div>
              <span className="logo-text">Pressmart.</span>
            </div>

            {/* Social Links */}
            <div className="social-container">
              <p className="social-text">Follow us on</p>
              <span className="icons">
                {SOCIAL_LINKS.map((socialIcons) => (
                  <SocialLink
                    key={socialIcons.label}
                    Icon={socialIcons.Icon}
                    href={socialIcons.href}
                    label={socialIcons.label}
                  />
                ))}
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="footer-nav">
            {navLink.map(({ title, links }) => (
              <NavSection key={title} title={title} links={links} />
            ))}
          </div>
        </div>
      </span>
    </footer>
  );
}
