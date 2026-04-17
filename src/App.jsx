import React from 'react';
import Cursor from './components/Cursor';
import BlobBackground from './components/BlobBackground';
import Hero from './components/Hero';

const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

function App() {
  return (
    <>
      <div 
        className="fixed inset-0 pointer-events-none z-50 mix-blend-overlay opacity-[0.08]" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      ></div>
      <Cursor />
      <div className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center items-center">
        <BlobBackground />
        <Hero />
      </div>
    </>
  );
}
export default App;
