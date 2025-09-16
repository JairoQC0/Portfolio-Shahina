import { useEffect, useRef } from "react";

export default function StarBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Inicializar estrellas
    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.2,
      alpha: Math.random(),
      speed: 0.002 + Math.random() * 0.015,
    }));

    function drawStars() {
      // Pinta fondo negro primero (asegura que el canvas sea fondo)
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, width, height);

      // Dibuja estrellas
      stars.forEach((star) => {
        ctx.globalAlpha = star.alpha;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();

        // Parpadeo
        star.alpha += star.speed * (Math.random() > 0.5 ? 1 : -1);
        if (star.alpha <= 0) star.alpha = Math.random();
        if (star.alpha > 1) star.alpha = 1;
      });

      requestAnimationFrame(drawStars);
    }

    drawStars();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // z-0 para estar detrás del contenido pero visible (no uses -z-10 aquí)
  return <canvas ref={canvasRef} className="fixed inset-0 z-0 block" />;
}
