import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import ProjectPage from './components/ProjectPage';
import './App.css';

import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';

function PortfolioHome({ theme, toggleTheme }) {
  return (
    <ReactLenis root options={{
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    }}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Vision />
      <Skills />
      <Work />
      <Contact />
      <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
      </footer>
    </ReactLenis>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <BrowserRouter>
      <div className="App-content">
        {loading ? (
          <Preloader finishLoading={() => setLoading(false)} />
        ) : (
          <Routes>
            <Route path="/" element={<PortfolioHome theme={theme} toggleTheme={toggleTheme} />} />
            <Route path="/project/:id" element={<ProjectPage />} />
          </Routes>
        )}
        <CustomCursor />
      </div>
    </BrowserRouter>
  );
}

export default App;
