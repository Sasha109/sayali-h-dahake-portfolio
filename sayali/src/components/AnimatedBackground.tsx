import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    const waves: Array<{
      x: number;
      y: number;
      radius: number;
      speed: number;
      opacity: number;
      maxRadius: number;
    }> = [];

    const geometricShapes: Array<{
      x: number;
      y: number;
      size: number;
      rotation: number;
      rotationSpeed: number;
      type: "triangle" | "square" | "hexagon";
      opacity: number;
      vx: number;
      vy: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / 12000);
      particles.length = 0;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.4 + 0.1,
          color: Math.random() > 0.5 ? "blue" : "indigo",
        });
      }
    };

    const createWaves = () => {
      waves.length = 0;
      for (let i = 0; i < 3; i++) {
        waves.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: 0,
          speed: Math.random() * 0.5 + 0.2,
          opacity: Math.random() * 0.1 + 0.05,
          maxRadius: Math.random() * 200 + 100,
        });
      }
    };

    const createGeometricShapes = () => {
      geometricShapes.length = 0;
      const shapeTypes: ("triangle" | "square" | "hexagon")[] = [
        "triangle",
        "square",
        "hexagon",
      ];

      for (let i = 0; i < 8; i++) {
        geometricShapes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 30 + 10,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
          type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
          opacity: Math.random() * 0.1 + 0.05,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
        });
      }
    };

    const drawTriangle = (
      x: number,
      y: number,
      size: number,
      rotation: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.lineTo(-size * 0.866, size * 0.5);
      ctx.lineTo(size * 0.866, size * 0.5);
      ctx.closePath();
      ctx.restore();
    };

    const drawSquare = (
      x: number,
      y: number,
      size: number,
      rotation: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.beginPath();
      ctx.rect(-size / 2, -size / 2, size, size);
      ctx.restore();
    };

    const drawHexagon = (
      x: number,
      y: number,
      size: number,
      rotation: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        const px = size * Math.cos(angle);
        const py = size * Math.sin(angle);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Check if dark mode is active
      const isDark = document.documentElement.classList.contains("dark");

      // Animate expanding waves
      waves.forEach((wave, index) => {
        wave.radius += wave.speed;
        if (wave.radius > wave.maxRadius) {
          wave.radius = 0;
          wave.x = Math.random() * canvas.width;
          wave.y = Math.random() * canvas.height;
        }

        // Draw wave
        ctx.beginPath();
        ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2);
        ctx.strokeStyle = isDark
          ? `rgba(59, 130, 246, ${
              wave.opacity * (1 - wave.radius / wave.maxRadius)
            })`
          : `rgba(99, 102, 241, ${
              wave.opacity * (1 - wave.radius / wave.maxRadius)
            })`;
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      // Animate geometric shapes
      geometricShapes.forEach((shape) => {
        // Update position
        shape.x += shape.vx;
        shape.y += shape.vy;
        shape.rotation += shape.rotationSpeed;

        // Bounce off edges
        if (shape.x < 0 || shape.x > canvas.width) shape.vx *= -1;
        if (shape.y < 0 || shape.y > canvas.height) shape.vy *= -1;

        // Keep shapes in bounds
        shape.x = Math.max(0, Math.min(canvas.width, shape.x));
        shape.y = Math.max(0, Math.min(canvas.height, shape.y));

        // Draw shape
        ctx.strokeStyle = isDark
          ? `rgba(59, 130, 246, ${shape.opacity})`
          : `rgba(99, 102, 241, ${shape.opacity})`;
        ctx.lineWidth = 1.5;

        switch (shape.type) {
          case "triangle":
            drawTriangle(shape.x, shape.y, shape.size, shape.rotation);
            break;
          case "square":
            drawSquare(shape.x, shape.y, shape.size, shape.rotation);
            break;
          case "hexagon":
            drawHexagon(shape.x, shape.y, shape.size, shape.rotation);
            break;
        }
        ctx.stroke();
      });

      // Animate particles with enhanced effects
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        // Draw particle with glow effect
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 2
        );

        const baseColor =
          particle.color === "blue" ? "59, 130, 246" : "99, 102, 241";
        gradient.addColorStop(0, `rgba(${baseColor}, ${particle.opacity})`);
        gradient.addColorStop(1, `rgba(${baseColor}, 0)`);

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw connections with enhanced styling
        particles.slice(index + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = (1 - distance / 120) * 0.15;
            const gradient = ctx.createLinearGradient(
              particle.x,
              particle.y,
              otherParticle.x,
              otherParticle.y
            );

            const color1 =
              particle.color === "blue" ? "59, 130, 246" : "99, 102, 241";
            const color2 =
              otherParticle.color === "blue" ? "59, 130, 246" : "99, 102, 241";

            gradient.addColorStop(0, `rgba(${color1}, ${opacity})`);
            gradient.addColorStop(1, `rgba(${color2}, ${opacity})`);

            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      // Add floating energy orbs
      const time = Date.now() * 0.001;
      for (let i = 0; i < 5; i++) {
        const x = canvas.width * 0.2 + Math.sin(time + i) * 100;
        const y = canvas.height * 0.3 + Math.cos(time + i * 0.7) * 80;
        const size = 3 + Math.sin(time * 2 + i) * 2;
        const opacity = 0.1 + Math.sin(time * 3 + i) * 0.05;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 3);
        gradient.addColorStop(
          0,
          isDark
            ? `rgba(59, 130, 246, ${opacity})`
            : `rgba(99, 102, 241, ${opacity})`
        );
        gradient.addColorStop(1, "rgba(59, 130, 246, 0)");

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    createWaves();
    createGeometricShapes();
    animate();

    const handleResize = () => {
      resizeCanvas();
      createParticles();
      createWaves();
      createGeometricShapes();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: "transparent" }}
      aria-hidden="true"
    />
  );
};

export default AnimatedBackground;
