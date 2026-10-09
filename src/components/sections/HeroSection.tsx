"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;
    
    const ctx = canvas.getContext('2d', { alpha: false }); // Optimización: alpha false para fondo opaco más rápido
    if (!ctx) return;
    
    let width: number, height: number;
    let animationFrameId: number;
    let isVisible = true;
    
    let mouse = { x: null as number | null, y: null as number | null, radius: 180 };

    const handleMouseMove = (event: MouseEvent) => {
      if (!isVisible) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };
    
    const handleTouchMove = (event: TouchEvent) => {
      if (!isVisible) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.touches[0].clientX - rect.left;
      mouse.y = event.touches[0].clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchend', handleMouseLeave);

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      // Optimización: Limitar DPR máximo a 2 para no destrozar el rendimiento en celulares modernos Retina
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };
    
    window.addEventListener('resize', resize, { passive: true });
    resize();

    class Particle {
      x!: number;
      y!: number;
      vx!: number;
      radius!: number;
      angle!: number;
      angleSpeed!: number;
      baseAngleSpeed!: number;
      amplitude!: number;
      baseY!: number;
      color!: string;

      constructor() {
        this.reset(true);
      }

      reset(randomizeX = false) {
        this.x = randomizeX ? Math.random() * width : -10;
        const flowCenterY = height / 2;
        const spread = height * 0.4;
        this.y = flowCenterY + (Math.random() - 0.5) * spread;
        this.baseY = this.y;
        this.vx = Math.random() * 1.5 + 0.5;
        this.radius = Math.random() * 1.5 + 0.5;
        this.angle = Math.random() * Math.PI * 2;
        this.angleSpeed = Math.random() * 0.02 + 0.01;
        this.baseAngleSpeed = this.angleSpeed;
        this.amplitude = Math.random() * 30 + 10;
        
        const rand = Math.random();
        if (rand > 0.9) {
          this.color = '#6e56cf'; // Primary violet
          this.radius *= 1.5;
        } else if (rand > 0.6) {
          this.color = 'rgba(167, 139, 250, 0.6)'; // Faint violet
        } else {
          this.color = 'rgba(255, 255, 255, 0.4)'; // White
        }
      }

      update() {
        let dx_flow = this.vx;
        let targetY = this.baseY + Math.sin(this.angle + this.x * 0.005) * this.amplitude;
        let dx_repel = 0;
        let dy_repel = 0;

        if (mouse.x !== null && mouse.y !== null) {
          let dx = this.x - mouse.x;
          let dy = this.y - mouse.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            let force = (mouse.radius - distance) / mouse.radius;
            force = Math.pow(force, 1.5); 
            let angle = Math.atan2(dy, dx);
            dx_repel = Math.cos(angle) * force * 15;
            dy_repel = Math.sin(angle) * force * 15;
            this.angleSpeed += 0.005;
          }
        }

        if (this.angleSpeed > this.baseAngleSpeed) {
          this.angleSpeed -= 0.001;
        }

        this.angle += this.angleSpeed;
        this.baseY += Math.sin(this.angle * 0.5) * 0.3;

        this.x += dx_flow + dx_repel;
        this.y += (targetY - this.y) * 0.1 + dy_repel;

        if (this.x > width + 50) {
          this.reset();
        } else if (this.x < -50) {
          this.x = -10;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.shadowBlur = 0; 
      }
    }

    const particles: Particle[] = [];
    // Optimización: Reducir cantidad de partículas en móvil
    const particleCount = window.innerWidth < 768 ? 100 : 350;
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      if (!isVisible) return; // Optimización vital: No computar si no se ve
      
      if (!ctx) return;
      ctx.fillStyle = 'rgba(14, 13, 21, 0.18)';
      ctx.fillRect(0, 0, width, height);

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Optimización: IntersectionObserver para apagar la animación si hacemos scroll hacia abajo
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          animate();
        } else {
          cancelAnimationFrame(animationFrameId);
        }
      });
    }, { threshold: 0 });

    observer.observe(section);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchend', handleMouseLeave);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section ref={sectionRef} id="inicio" className="relative min-h-screen flex items-center justify-center pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-[#0e0d15]">
      
      {/* Background Interactive Particles */}
      <div className="absolute inset-0 z-0">
        <canvas 
          ref={canvasRef} 
          className="w-full h-full"
        />
      </div>

      <div className="container-play relative z-10 flex flex-col items-center text-center pointer-events-none">
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-8 max-w-4xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70"
        >
          Páginas Web, Aplicaciones Web y Plataformas SaaS.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-12 max-w-2xl font-light"
        >
          Diseñamos y desarrollamos productos digitales modernos para empresas, emprendimientos y nuevas ideas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 pointer-events-auto"
        >
          <Button size="lg" href="#contacto">
            Crear mi proyecto
          </Button>
          <Button variant="outline" size="lg" href="#servicios">
            Ver servicios
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
