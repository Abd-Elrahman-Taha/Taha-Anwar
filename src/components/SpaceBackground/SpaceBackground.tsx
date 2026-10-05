import React, { useEffect, useRef } from 'react';

export const SpaceBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Generate subtle stars: few small distant stars, very low opacity
    const starCount = Math.floor((width * height) / 10000);
    const stars: Array<{
      x: number;
      y: number;
      radius: number;
      alpha: number;
      baseAlpha: number;
      twinkleSpeed: number;
      twinkleOffset: number;
    }> = [];

    for (let i = 0; i < starCount; i++) {
      const baseAlpha = Math.random() * 0.5 + 0.15;
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.2 + 0.4,
        alpha: baseAlpha,
        baseAlpha,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleOffset: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      time += 0.03;

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        if (!prefersReducedMotion) {
          star.alpha = star.baseAlpha + Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.15;
        }

        ctx.fillStyle = `rgba(221, 214, 254, ${Math.max(0.05, Math.min(1, star.alpha))})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Deep black foundation */}
      <div className="absolute inset-0 bg-[#030305]" />

      {/* Subtle Purple Nebulas */}
      <div
        className="absolute -top-[15%] left-[10%] w-[700px] h-[700px] rounded-full opacity-35 blur-[140px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #1A0D2E 0%, #120A20 50%, transparent 75%)',
        }}
      />
      <div
        className="absolute top-[40%] -right-[15%] w-[800px] h-[800px] rounded-full opacity-25 blur-[160px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #25103E 0%, #120A20 60%, transparent 80%)',
        }}
      />
      <div
        className="absolute bottom-[10%] left-[25%] w-[600px] h-[600px] rounded-full opacity-20 blur-[130px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #1F0D3D 0%, #08070D 70%, transparent 85%)',
        }}
      />

      {/* Subtle coordinate grid lines overlay */}
      <div className="absolute inset-0 cosmic-grid-pattern opacity-40" />

      {/* Subtle Starfield Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};
