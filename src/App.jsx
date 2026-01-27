import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import './App.css';

import Lenis from 'lenis';
import { ReactLenis, useLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const lenisOptions = {
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
  };

  return (
    <ReactLenis root options={lenisOptions} className="App">
      <div className="App-content">
        {loading ? (
          <Preloader finishLoading={() => setLoading(false)} />
        ) : (
          <>
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <Hero />
            <Vision />
            <Skills />
            <Work />
            <Contact />
            <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
            </footer>
          </>
        )}
        <CustomCursor />
      </div>
    </ReactLenis>
  );
}

export default App;
