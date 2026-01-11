import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Preloader from './components/Preloader';
import './App.css';

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
    <div className="App">
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
    </div>
  );
}

export default App;
