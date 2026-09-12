import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  symbol: string;
  opacity: number;
}

const ROMANTIC_SYMBOLS = ['❤️', '💖', '✨', '🌹', '💕', '🌸', '🤍'];

export const FloatingHearts: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [interactiveHearts, setInteractiveHearts] = useState<
    Array<{ id: number; x: number; y: number; symbol: string }>
  >([]);

  useEffect(() => {
    // Generate gentle background floating particles
    const initialParticles: Particle[] = Array.from({ length: 22 }).map((_, i) => ({
      id: i,
      left: Math.random() * 96 + 2, // 2% to 98%
      size: Math.random() * 14 + 14, // 14px to 28px
      duration: Math.random() * 10 + 12, // 12s to 22s
      delay: Math.random() * 15,
      symbol: ROMANTIC_SYMBOLS[Math.floor(Math.random() * ROMANTIC_SYMBOLS.length)],
      opacity: Math.random() * 0.35 + 0.15
    }));
    setParticles(initialParticles);
  }, []);

  // Allow clicking anywhere to pop a heart
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      // Don't trigger if clicked on an input or button
      const target = e.target as HTMLElement;
      if (target.closest('button') || target.closest('input') || target.closest('textarea')) {
        return;
      }

      const newHeart = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        symbol: ROMANTIC_SYMBOLS[Math.floor(Math.random() * ROMANTIC_SYMBOLS.length)]
      };

      setInteractiveHearts(prev => [...prev.slice(-15), newHeart]);

      setTimeout(() => {
        setInteractiveHearts(prev => prev.filter(h => h.id !== newHeart.id));
      }, 1600);
    };

    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {particles.map(p => (
        <div
          key={p.id}
          className="floating-heart-particle select-none"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity
          }}
        >
          {p.symbol}
        </div>
      ))}

      {interactiveHearts.map(h => (
        <div
          key={h.id}
          className="absolute select-none transition-all duration-1000 ease-out"
          style={{
            left: `${h.x - 14}px`,
            top: `${h.y - 14}px`,
            fontSize: '24px',
            animation: 'float-up-fade 1.5s forwards'
          }}
        >
          {h.symbol}
        </div>
      ))}

      <style>{`
        @keyframes float-up-fade {
          0% {
            transform: translateY(0) scale(0.6);
            opacity: 1;
          }
          50% {
            transform: translateY(-40px) scale(1.3);
            opacity: 0.9;
          }
          100% {
            transform: translateY(-90px) scale(1.6);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
