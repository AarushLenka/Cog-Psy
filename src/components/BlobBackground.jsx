import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function BlobBackground() {
  const containerRef = useRef(null);
  
  const blobsData = [
    { size: 'w-[45vw] h-[45vw]', color: 'bg-black', depth: 0.08, initialPos: {x: -20, y: -20}, delay: 0 },
    { size: 'w-[35vw] h-[35vw]', color: 'bg-[#1a1a1a]', depth: -0.05, initialPos: {x: 40, y: 10}, delay: 0.1 },
    { size: 'w-[40vw] h-[50vw]', color: 'bg-black/90', depth: 0.04, initialPos: {x: 10, y: 30}, delay: 0.2 },
    { size: 'w-[50vw] h-[40vw]', color: 'bg-black/80', depth: 0.02, initialPos: {x: 50, y: 60}, delay: 0.15 },
    { size: 'w-[60vw] h-[60vw]', color: 'bg-black', depth: 0.1, initialPos: {x: -10, y: 50}, delay: 0.05 },
  ];

  const blobRefs = useRef([]);

  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', onMouseMove);

    gsap.ticker.add(() => {
      blobRefs.current.forEach((blob, index) => {
        if (!blob) return;
        
        const data = blobsData[index];
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        
        const dx = mouseX - cx;
        const dy = mouseY - cy;
        
        const targetX = dx * data.depth;
        const targetY = dy * data.depth;

        gsap.to(blob, {
          x: targetX,
          y: targetY,
          duration: 2.5 + data.delay,
          ease: "power2.out",
          overwrite: "auto"
        });
      });
    });

    blobRefs.current.forEach((blob, i) => {
      if(!blob) return;
      gsap.to(blob, {
        rotation: 360,
        scaleX: i % 2 === 0 ? 1.1 : 0.9,
        scaleY: i % 2 === 0 ? 0.9 : 1.1,
        duration: 15 + i * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      gsap.ticker.remove();
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden bg-[#d8a7a7]">
      <div className="absolute inset-0 pointer-events-none" style={{ filter: 'blur(80px)' }}>
        {blobsData.map((blob, i) => (
          <div 
            key={i}
            ref={(el) => (blobRefs.current[i] = el)}
            className={`absolute rounded-full mix-blend-multiply opacity-80 will-change-transform ${blob.color} ${blob.size}`}
            style={{ 
              top: `${blob.initialPos.y}%`, 
              left: `${blob.initialPos.x}%`,
              borderRadius: i % 2 === 0 ? '60% 40% 30% 70% / 60% 30% 70% 40%' : '40% 60% 70% 30% / 40% 50% 60% 50%' 
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
