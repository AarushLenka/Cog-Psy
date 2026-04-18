import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function Hero() {
  return (
    <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center justify-center min-h-screen">
      <div className="space-y-4">
        <h2 className="text-sm md:text-base font-light tracking-[0.3em] uppercase text-white/70">
          NPTEL 2025-26
        </h2>
        <h1 className="text-white drop-shadow-sm flex flex-col font-medium">
          <span className="text-[0.6em] font-normal leading-tight opacity-90 tracking-wide uppercase">Introduction to</span>
          <span className="italic font-light text-white/90">Cognitive Psychology</span>
        </h1>
      </div>

      <div className="mt-16 relative">
        <a 
          href="/quiz.html" 
          className="group relative inline-flex items-center justify-center px-8 py-4 font-normal text-black bg-white rounded-full overflow-hidden transition duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
          style={{ cursor: 'none' }}
        >
          <span className="relative z-10 tracking-widest uppercase text-sm">Begin the Quiz</span>
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-gray-100 to-white/90 opacity-0 group-hover:opacity-100 transition duration-500"></div>
        </a>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-3 text-white/50 text-xs md:text-sm font-light tracking-wide px-4">
        <p>If you find inaccuracies in the MCQs, please raise an issue in the <a href="https://github.com/AarushLenka/Cog-Psy" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors" style={{ cursor: 'none' }}>GitHub repo</a>.</p>
        <p className="flex items-center gap-1.5 justify-center">Made with <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg> by Aarush</p>
      </div>
    </div>
  );
}
