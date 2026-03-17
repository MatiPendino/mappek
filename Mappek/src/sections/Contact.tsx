import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import ScrollReveal from '../components/ScrollReveal';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="relative py-32 md:py-40 bg-[#0a0a0a]">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#c9a84c]/[0.02] blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-8 md:px-16 lg:px-20 text-center">
        <ScrollReveal>
          <p className="text-[#c9a84c] text-[13px] tracking-[0.3em] uppercase font-light mb-4">
            {t('nav.contact')}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold text-[#f5f5f0] tracking-tight mb-6">
            {t('contact.title')}
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-[#8a8a85] text-lg font-light mb-16 max-w-[500px] mx-auto">
            {t('contact.subtitle')}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="inline-flex flex-col items-center">
            <p className="text-[#8a8a85] text-sm font-light mb-4 tracking-wide">
              {t('contact.email')}
            </p>
            <motion.a
              href="mailto:mappek@mappek.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-3 px-10 py-4 bg-[#c9a84c] text-[#050505] text-base font-medium tracking-[0.05em] rounded-sm hover:bg-[#dfc06a] transition-colors duration-300 overflow-hidden"
            >
              <span className="relative z-10">mappek@mappek.com</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <div className="mt-20 flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i} className="h-[1px] bg-[#c9a84c]/20" style={{ width: `${40 - i * 6}px` }}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
