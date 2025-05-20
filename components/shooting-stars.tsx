'use client';

import { useEffect, useState } from 'react';

interface ShootingStar {
  id: number;
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
}

const ShootingStars = () => {
  const [stars, setStars] = useState<ShootingStar[]>([]);

  useEffect(() => {
    // Inicializa algumas estrelas cadentes
    const initialStars = Array.from({ length: 5 }).map((_, index) => ({
      id: index,
      top: Math.random() * 50,
      left: Math.random() * 30,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 15,
    }));

    setStars(initialStars);

    // Adiciona novas estrelas cadentes periodicamente
    const interval = setInterval(() => {
      setStars((prevStars) => {
        // Remove estrelas antigas e adiciona novas
        const newStars = [...prevStars];

        // Adiciona uma nova estrela
        if (newStars.length < 8) {
          newStars.push({
            id: Date.now(),
            top: Math.random() * 50,
            left: Math.random() * 30,
            size: Math.random() * 2 + 1,
            duration: Math.random() * 3 + 2,
            delay: 0,
          });
        }

        // Remove estrelas antigas (mais de 5 segundos)
        return newStars.filter((star) => {
          const age = (Date.now() - star.id) / 1000;
          return age < 5 + star.duration + star.delay;
        });
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size * 30}px`,
            height: `${star.size}px`,
            opacity: 0,
            boxShadow: `0 0 ${star.size * 4}px ${
              star.size
            }px rgba(255, 255, 255, 0.7)`,
            transform: 'rotate(45deg)',
            animation: `shooting-star ${star.duration}s linear ${star.delay}s forwards`,
          }}
        />
      ))}
    </div>
  );
};

export default ShootingStars;
