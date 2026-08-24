import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLenis } from 'lenis/react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const lenis = useLenis();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: 'About', href: '/about' },
    { label: 'Work', href: '/work' },
    { label: 'Blog', href: '/blog' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();

    if (href === '#') return;

    // Route-based links (e.g. /about) navigate to a different page
    if (href.startsWith('/')) {
      if (location.pathname === href) {
        if (lenis) {
          lenis.scrollTo(0);
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else {
        navigate(href);
      }
      return;
    }

    // Anchor links only make sense on the homepage
    if (location.pathname !== '/') {
      navigate('/');
      return;
    }

    // Extract target ID
    const targetId = href.replace('#', '');

    if (lenis) {
      lenis.scrollTo(href);
    } else {
      // Fallback
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (href === '#home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const isItemActive = (item) => {
    if (item.href.startsWith('/')) {
      return location.pathname === item.href;
    }
    return location.pathname === '/' && activeSection === item.href.substring(1);
  };

  // Scroll detection for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ['home', 'vision', 'work', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="pill-nav-container">
        <div className="pill-nav">
          <a
            href="/"
            className="pill-logo"
            aria-label="Home"
            onClick={(e) => handleNavClick(e, '/')}
          >
            <span className="logo-text">@shubhampathneja</span>
          </a>

          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`nav-link${isItemActive(item) ? ' is-active' : ''}`}
                  aria-label={item.label}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
