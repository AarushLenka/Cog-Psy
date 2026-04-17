import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Cursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
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
        duration: 0.6,
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
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/50 mix-blend-difference pointer-events-none z-[100] transform -translate-x-1/2 -translate-y-1/2 will-change-transform"
      ></div>
      <div 
        ref={dotRef} 
        className="fixed top-0 left-0 w-[4px] h-[4px] bg-white rounded-full mix-blend-difference pointer-events-none z-[100] transform -translate-x-1/2 -translate-y-1/2 will-change-transform"
      ></div>
    </>
  );
}
