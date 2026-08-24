import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Work from './components/Work';
import Contact from './components/Contact';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import ProjectPage from './components/ProjectPage';
import AboutPage from './components/AboutPage';
import WorkPage from './components/WorkPage';
import BlogPage from './components/BlogPage';
import './App.css';

import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';

function PortfolioHome() {
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
      <Navbar />
      <Hero />
      <Vision />
      <Work />
      <Contact />
    </ReactLenis>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      <div className="App-content">
        {loading ? (
          <Preloader finishLoading={() => setLoading(false)} />
        ) : (
          <Routes>
            <Route path="/" element={<PortfolioHome />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/project/:id" element={<ProjectPage />} />
          </Routes>
        )}
        <CustomCursor />
      </div>
    </BrowserRouter>
  );
}

export default App;
