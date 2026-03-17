import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import iconoBlanco from '../assets/icono_medio_blanco.png';
import useIsMobile from '../hooks/useIsMobile';

function FloatingParticle(
  { delay, x, y, size }: { delay: number; x: string; y: string; size: number }
) {
  return (
    <motion.div
      className="absolute rounded-full bg-[#c9a84c]"
      style={{ left: x, top: y, width: size, height: size }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.4, 0.15, 0.4, 0],
        scale: [0, 1, 1.2, 1, 0],
        y: [0, -30, -60, -90, -120],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

function AnimatedLine({
  direction, delay, className
}: { direction: 'horizontal' | 'vertical'; delay: number; className: string }) {
  return (
    <motion.div
      className={`absolute bg-gradient-to-${direction === 'horizontal' ? 'r' : 'b'} from-[#c9a84c]/30 via-[#c9a84c]/10 to-transparent ${className}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    />
  );
}

export default function Hero() {
  const { t } = useTranslation();
  const isMobile: boolean = useIsMobile();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Grid background */}
      <div
        className="absolute inset-0"
        style={{ opacity: 0.04 }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Radial glow */}
      {isMobile ? (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#c9a84c]/[0.05] blur-[120px]" />
      ) : (
        <>
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[#c9a84c]/[0.04] blur-[150px]"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.04, 0.07, 0.04],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-[30%] left-[20%] w-[400px] h-[400px] rounded-full bg-[#c9a84c]/[0.02] blur-[100px]"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              opacity: [0.02, 0.05, 0.02],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-[20%] right-[15%] w-[350px] h-[350px] rounded-full bg-[#c9a84c]/[0.02] blur-[100px]"
            animate={{
              x: [0, -40, 0],
              y: [0, 20, 0],
              opacity: [0.02, 0.04, 0.02],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />

          {[
            { delay: 0, x: '15%', y: '70%', size: 3 },
            { delay: 1.5, x: '80%', y: '60%', size: 2 },
            { delay: 3, x: '25%', y: '40%', size: 4 },
            { delay: 4.5, x: '70%', y: '75%', size: 2 },
            { delay: 2, x: '50%', y: '80%', size: 3 },
            { delay: 5, x: '90%', y: '50%', size: 2 },
            { delay: 6, x: '10%', y: '55%', size: 3 },
            { delay: 3.5, x: '60%', y: '30%', size: 2 },
          ].map((p, i) => (
            <FloatingParticle key={i} {...p} />
          ))}

          <AnimatedLine direction="horizontal" delay={1.2} className="top-24 left-8 w-40 h-[1px] origin-left" />
          <AnimatedLine direction="vertical" delay={1.4} className="top-24 left-8 w-[1px] h-40 origin-top" />
          <AnimatedLine direction="horizontal" delay={1.2} className="bottom-24 right-8 w-40 h-[1px] origin-right" />
          <AnimatedLine direction="vertical" delay={1.4} className="bottom-24 right-8 w-[1px] h-40 origin-bottom" />

          <motion.div
            className="absolute top-0 right-[30%] w-[1px] h-32 bg-gradient-to-b from-[#c9a84c]/20 to-transparent origin-top rotate-[15deg]"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.8 }}
          />
          <motion.div
            className="absolute bottom-0 left-[25%] w-[1px] h-28 bg-gradient-to-t from-[#c9a84c]/15 to-transparent origin-bottom -rotate-[10deg]"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 2 }}
          />
        </>
      )}

      <div className="relative z-10 text-center px-8 md:px-16 max-w-[900px] mx-auto">
        {/* Logo */}
        {isMobile ? (
          <div className="mb-10 mt-24">
            <img
              src={iconoBlanco}
              alt="Mappek"
              className="h-20 w-auto mx-auto"
            />
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-10 mt-24"
          >
            <motion.img
              src={iconoBlanco}
              alt="Mappek"
              className="h-28 w-auto mx-auto"
              style={{ filter: 'drop-shadow(0 0 80px rgba(201,168,76,0.2))' }}
              animate={{
                filter: [
                  'drop-shadow(0 0 60px rgba(201,168,76,0.15))',
                  'drop-shadow(0 0 100px rgba(201,168,76,0.25))',
                  'drop-shadow(0 0 60px rgba(201,168,76,0.15))',
                ],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        )}

        {/* Tagline */}
        <div className="overflow-hidden mb-8">
          {isMobile ? (
            <h1 className="text-5xl font-display font-semibold text-[#f5f5f0] tracking-tight leading-[1.05]">
              {t('hero.tagline')}
            </h1>
          ) : (
            <motion.h1
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-7xl lg:text-8xl font-display font-semibold text-[#f5f5f0] tracking-tight leading-[1.05]"
            >
              {t('hero.tagline')}
            </motion.h1>
          )}
        </div>

        {/* Separator */}
        <div className="w-16 h-[1px] bg-[#c9a84c]/50 mx-auto mb-8" />

        {/* Subtitle */}
        <p className="text-[#8a8a85] text-lg md:text-xl font-light leading-relaxed max-w-[600px] mx-auto mb-14 text-center">
          {t('hero.subtitle')}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <button
            onClick={() => scrollTo('portfolio')}
            className="group px-10 py-4 bg-[#c9a84c] text-[#050505] text-sm font-medium tracking-[0.1em] uppercase rounded-sm hover:bg-[#dfc06a] transition-all duration-300 cursor-pointer relative overflow-hidden"
          >
            <span className="relative z-10">{t('hero.cta')}</span>
            <div className="absolute inset-0 bg-[#dfc06a] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
          
          <button
            onClick={() => scrollTo('contact')}
            className="px-10 py-4 border border-white/[0.15] text-[#f5f5f0] text-sm font-light tracking-[0.1em] uppercase rounded-sm hover:border-[#c9a84c]/50 hover:text-[#c9a84c] transition-all duration-300 cursor-pointer"
          >
            {t('hero.contact')}
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-[1px] h-14 bg-gradient-to-b from-[#c9a84c]/60 to-transparent"
        />
      </div>
    </section>
  );
}
