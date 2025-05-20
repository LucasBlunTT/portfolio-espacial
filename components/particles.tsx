import React from 'react';

export default function Particles() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Pequenas estrelas (muitas) */}
      {Array.from({ length: 150 }).map((_, i) => (
        <div
          key={`small-${i}`}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            width: Math.random() * 2 + 1 + 'px',
            height: Math.random() * 2 + 1 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            opacity: Math.random() * 0.5 + 0.1,
            animationDuration: Math.random() * 8 + 2 + 's',
          }}
        />
      ))}

      {/* Estrelas médias */}
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={`medium-${i}`}
          className="absolute rounded-full bg-white/40 animate-pulse"
          style={{
            width: Math.random() * 3 + 2 + 'px',
            height: Math.random() * 3 + 2 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            opacity: Math.random() * 0.6 + 0.2,
            animationDuration: Math.random() * 6 + 3 + 's',
          }}
        />
      ))}

      {/* Estrelas grandes (poucas) */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={`large-${i}`}
          className="absolute rounded-full bg-white/60 animate-pulse"
          style={{
            width: Math.random() * 4 + 3 + 'px',
            height: Math.random() * 4 + 3 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            opacity: Math.random() * 0.7 + 0.3,
            animationDuration: Math.random() * 5 + 4 + 's',
          }}
        />
      ))}

      {/* Estrelas brilhantes com efeito de brilho */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={`bright-${i}`}
          className="absolute rounded-full bg-purple-300"
          style={{
            width: Math.random() * 3 + 2 + 'px',
            height: Math.random() * 3 + 2 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            boxShadow: '0 0 10px 2px rgba(168, 85, 247, 0.4)',
            opacity: Math.random() * 0.8 + 0.2,
            animation: `pulse ${Math.random() * 4 + 3}s infinite ease-in-out`,
          }}
        />
      ))}
    </div>
  );
}
