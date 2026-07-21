import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, FileText, BarChart3, Cloud, Users, Building2 } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

export const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  // World map dot grid
  const dots: { x: number; y: number }[] = [];
  for (let y = 0; y < 18; y++) {
    for (let x = 0; x < 36; x++) {
      // pseudo "continents" mask via sine
      const v = Math.sin(x * 0.4) * Math.cos(y * 0.5) + Math.sin((x + y) * 0.3);
      if (v > 0.2 && Math.random() > 0.35) dots.push({ x: x * 12 + 8, y: y * 12 + 8 });
    }
  }

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
      style={{
        background:
          "linear-gradient(120deg, #001133 0%, #0A1A3A 45%, #0a1f4d 75%, #001a4d 100%)",
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 75% 50%, rgba(47,91,255,0.25) 0%, transparent 55%), radial-gradient(ellipse at 10% 50%, rgba(30,58,138,0.35) 0%, transparent 60%)",
        }}
      />

      {/* Subtle circuit grid */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(47,91,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(47,91,255,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      <motion.div style={{ opacity }} className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-center">
          {/* LEFT — Shield 365 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: -30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-3 flex justify-center md:justify-start"
          >
            <div className="relative">
              <svg
                viewBox="0 0 220 260"
                className="w-40 md:w-48 lg:w-56 drop-shadow-[0_0_40px_rgba(47,91,255,0.55)]"
                aria-label="Escudo 365"
              >
                <defs>
                  <linearGradient id="shieldStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#cfe0ff" />
                  </linearGradient>
                  <linearGradient id="shieldFill" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0a1f4d" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="#001133" stopOpacity="0.85" />
                  </linearGradient>
                </defs>
                <path
                  d="M110 12 L200 44 L200 138 C200 192 158 230 110 246 C62 230 20 192 20 138 L20 44 Z"
                  fill="url(#shieldFill)"
                  stroke="url(#shieldStroke)"
                  strokeWidth="6"
                  strokeLinejoin="round"
                />
                {/* inner outline */}
                <path
                  d="M110 28 L186 54 L186 136 C186 182 152 215 110 230 C68 215 34 182 34 136 L34 54 Z"
                  fill="none"
                  stroke="#ffffff"
                  strokeOpacity="0.25"
                  strokeWidth="2"
                />
                <text
                  x="110"
                  y="150"
                  textAnchor="middle"
                  fontFamily="Inter, system-ui, sans-serif"
                  fontWeight="900"
                  fontSize="68"
                  fill="#ffffff"
                  letterSpacing="-3"
                >
                  365
                </text>
                {/* green check */}
                <g transform="translate(70 175) rotate(-8)">
                  <path
                    d="M0 18 L20 38 L60 -6"
                    fill="none"
                    stroke="#39FF14"
                    strokeWidth="14"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ filter: "drop-shadow(0 0 8px rgba(57,255,20,0.7))" }}
                  />
                </g>
              </svg>
            </div>
          </motion.div>

          {/* CENTER — Wordmark + tagline */}
          <div className="md:col-span-5 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-extrabold tracking-tighter leading-none text-white text-7xl md:text-8xl lg:text-[9rem] whitespace-nowrap"
              style={{ textShadow: "0 0 40px rgba(47,91,255,0.35)", letterSpacing: "-0.04em" }}
            >
              365<span style={{ color: "#39FF14", textShadow: "0 0 25px rgba(57,255,20,0.6)", marginLeft: "-0.02em" }}>s</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="mt-4 text-lg md:text-xl text-white/85 max-w-xl"
            >
              Mais que segurança:<br />
              governança, risco e conformidade{" "}
              <span style={{ color: "#39FF14" }} className="font-semibold">365 dias</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mt-7"
            >
              <Button
                size="lg"
                onClick={openWhatsApp}
                className="text-white font-semibold border-0"
                style={{
                  background: "linear-gradient(135deg, #2F5BFF 0%, #1E3A8A 100%)",
                  boxShadow: "0 8px 30px rgba(47,91,255,0.45)",
                }}
              >
                Solicitar Diagnóstico
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo("servicos")}
                className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                Conhecer Serviços
              </Button>
            </motion.div>
          </div>

          {/* RIGHT — Cyber visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="md:col-span-4"
          >
            <div className="relative aspect-[4/3] w-full">
              {/* World map dots */}
              <svg
                viewBox="0 0 440 230"
                className="absolute inset-0 w-full h-full opacity-60"
                preserveAspectRatio="xMidYMid slice"
              >
                {dots.map((d, i) => (
                  <circle key={i} cx={d.x} cy={d.y} r={1.2} fill="#2F5BFF" />
                ))}
              </svg>

              {/* HUD rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[85%] h-[85%] rounded-full border border-[#2F5BFF]/30"
                  style={{ borderStyle: "dashed" }}
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[65%] h-[65%] rounded-full border border-[#2F5BFF]/40"
                />
                <div
                  className="absolute w-[55%] h-[55%] rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(47,91,255,0.35) 0%, transparent 70%)",
                  }}
                />
              </div>

              {/* Connecting lines + icons */}
              {[
                { Icon: FileText, top: "5%", left: "5%" },
                { Icon: BarChart3, bottom: "10%", left: "8%" },
                { Icon: Cloud, top: "15%", right: "20%" },
                { Icon: Users, top: "8%", right: "5%" },
                { Icon: Building2, bottom: "8%", right: "8%" },
              ].map(({ Icon, ...pos }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                  className="absolute w-9 h-9 rounded-lg flex items-center justify-center backdrop-blur-md"
                  style={{
                    ...pos,
                    background: "rgba(47,91,255,0.15)",
                    border: "1px solid rgba(47,91,255,0.5)",
                    boxShadow: "0 0 15px rgba(47,91,255,0.4)",
                  }}
                >
                  <Icon className="w-4 h-4 text-[#7aa6ff]" />
                </motion.div>
              ))}

              {/* 3D Shield center */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <svg
                  viewBox="0 0 200 240"
                  className="w-[55%] drop-shadow-[0_0_50px_rgba(47,91,255,0.85)]"
                >
                  <defs>
                    <linearGradient id="shield3d" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#5b8cff" stopOpacity="0.9" />
                      <stop offset="50%" stopColor="#2F5BFF" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#0a1f4d" stopOpacity="0.95" />
                    </linearGradient>
                    <linearGradient id="shield3dShine" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M100 8 L185 38 L185 130 C185 180 145 215 100 232 C55 215 15 180 15 130 L15 38 Z"
                    fill="url(#shield3d)"
                    stroke="#7aa6ff"
                    strokeWidth="2"
                  />
                  <path
                    d="M100 18 L100 222 C55 207 25 175 25 130 L25 44 Z"
                    fill="url(#shield3dShine)"
                    opacity="0.35"
                  />
                  <path
                    d="M55 120 L88 155 L150 88"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="14"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ filter: "drop-shadow(0 0 10px rgba(255,255,255,0.8))" }}
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Values strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-12 text-center text-[11px] md:text-xs uppercase tracking-[0.3em] text-white/60"
        >
          Estratégia <span style={{ color: "#39FF14" }} className="mx-2">·</span> Inovação
          <span style={{ color: "#39FF14" }} className="mx-2">·</span> Confiança
          <span style={{ color: "#39FF14" }} className="mx-2">·</span> Continuidade
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
