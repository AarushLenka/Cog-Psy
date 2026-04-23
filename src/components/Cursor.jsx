import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Cursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches || ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    if (isTouch) {
      if (cursorRef.current) cursorRef.current.style.display = 'none';
      if (dotRef.current) dotRef.current.style.display = 'none';
      return;
    }

    document.documentElement.style.cursor = 'none';

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      gsap.to(dotRef.current, {
        x: mouseX,
        y: mouseY,
        duration: 0,
      });

      gsap.to(cursorRef.current, {
        x: mouseX,
        y: mouseY,
        duration: 0.05,
        ease: "power2.out"
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    gsap.set([cursorRef.current, dotRef.current], { x: mouseX, y: mouseY, xPercent: -50, yPercent: -50 });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.documentElement.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-slate-900/80 bg-white/10 backdrop-blur-[2px] pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 will-change-transform"
      ></div>
      <div 
        ref={dotRef} 
        className="fixed top-0 left-0 w-[6px] h-[6px] bg-[#111] shadow-[0_0_5px_rgba(255,255,255,0.8)] rounded-full pointer-events-none z-[10000] transform -translate-x-1/2 -translate-y-1/2 will-change-transform"
      ></div>
    </>
  );
}
