import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import ScrollReveal from '../components/ScrollReveal';
import bespokeBg from '../assets/bespoke-background.png';
import cmaccesoriosBg from '../assets/cmaccesorios-background.png';
import prodeappBg from '../assets/prodeapp-background.png';

const projects = [
  { key: 'bespoke', image: bespokeBg },
  { key: 'cmaccesorios', image: cmaccesoriosBg },
  { key: 'prodeapp', image: prodeappBg },
];

export default function Portfolio() {
  const { t } = useTranslation();

  return (
    <section id="portfolio" className="relative py-32 md:py-40 bg-[#0a0a0a]">
      <div className="w-full max-w-[1200px] mx-auto px-8 md:px-16 lg:px-20">
        <div className="text-center mb-20">
          <ScrollReveal>
            <p className="text-[#c9a84c] text-[13px] tracking-[0.3em] uppercase font-light mb-4">
              {t('portfolio.title')}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-[#f5f5f0] tracking-tight mb-6 max-w-[700px] mx-auto">
              {t('portfolio.subtitle')}
            </h2>
          </ScrollReveal>
        </div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <ScrollReveal key={project.key} delay={i * 0.08}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group relative overflow-hidden rounded-sm border border-white/[0.06] hover:border-[#c9a84c]/20 transition-colors duration-500"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] min-h-[320px] md:min-h-[400px]">
                  {/* Info panel */}
                  <div className="relative z-10 p-8 md:p-12 flex flex-col justify-center bg-[#0f0f0f] order-2 lg:order-1">
                    <span className="text-[#c9a84c] text-[11px] tracking-[0.3em] uppercase font-light mb-4 block">
                      {t(`portfolio.projects.${project.key}.category`)}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-display font-medium text-[#f5f5f0] mb-4 tracking-tight">
                      {t(`portfolio.projects.${project.key}.name`)}
                    </h3>
                    <p className="text-[#8a8a85] text-sm font-light leading-relaxed max-w-[400px]">
                      {t(`portfolio.projects.${project.key}.description`)}
                    </p>

                    <div className="mt-8 w-12 h-[1px] bg-[#c9a84c]/30 group-hover:w-24 transition-all duration-700" />
                  </div>

                  {/* Image panel */}
                  <div className="relative overflow-hidden min-h-[240px] lg:min-h-0 order-1 lg:order-2">
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <img
                        src={project.image}
                        alt={t(`portfolio.projects.${project.key}.name`)}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f]/60 via-transparent to-transparent lg:block hidden" />
                      <div className="absolute inset-0 bg-[#050505]/20 group-hover:bg-transparent transition-colors duration-500" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
