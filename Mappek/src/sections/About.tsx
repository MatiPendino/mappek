import { useTranslation } from 'react-i18next';
import ScrollReveal from '../components/ScrollReveal';
import iconoBlanco from '../assets/icono_medio_blanco.png';

export default function About() {
  const { t } = useTranslation();

  const values = ['quality', 'modern', 'communication'] as const;

  const valueIcons = {
    quality: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M16 2l4 8 9 1.3-6.5 6.3L24 27l-8-4.2L8 27l1.5-9.4L3 11.3l9-1.3L16 2z" />
      </svg>
    ),
    modern: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <rect x="3" y="3" width="26" height="26" rx="3" />
        <path d="M3 12h26" />
        <path d="M12 12v17" />
        <circle cx="8" cy="7.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
    communication: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M4 6h24v16H12l-6 4v-4H4V6z" />
        <line x1="10" y1="12" x2="22" y2="12" />
        <line x1="10" y1="16" x2="18" y2="16" />
      </svg>
    ),
  };

  return (
    <section id="about" className="relative py-32 md:py-40 bg-[#050505]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-transparent via-[#c9a84c]/20 to-transparent" />

      <div className="w-full max-w-[1200px] mx-auto px-8 md:px-16 lg:px-20">
        <div className="text-center mb-20">
          <ScrollReveal>
            <p className="text-[#c9a84c] text-[13px] tracking-[0.3em] uppercase font-light mb-4">
              {t('about.title')}
            </p>
          </ScrollReveal>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24">
          <div>
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-display font-semibold text-[#f5f5f0] tracking-tight mb-8">
                {t('about.subtitle')}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-[#8a8a85] text-base font-light leading-relaxed">
                {t('about.description')}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-12 flex items-center gap-4">
                <div className="w-16 h-[1px] bg-[#c9a84c]/30" />
                <img
                  src={iconoBlanco}
                  alt="White Logo"
                  className="h-8 w-auto opacity-20"
                />
                <div className="w-16 h-[1px] bg-[#c9a84c]/30" />
              </div>
            </ScrollReveal>
          </div>

          <div className="space-y-6">
            {values.map((value, i) => (
              <ScrollReveal key={value} delay={i * 0.12} direction="right">
                <div className="group p-8 md:p-10 border border-white/[0.06] rounded-lg bg-[#0a0a0a] hover:border-[#c9a84c]/20 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#c9a84c]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 flex items-start gap-5">
                    <div className="text-[#c9a84c] mt-0.5 shrink-0">
                      {valueIcons[value]}
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-medium text-[#f5f5f0] mb-2">
                        {t(`about.values.${value}.title`)}
                      </h3>
                      <p className="text-[#8a8a85] text-sm font-light leading-relaxed">
                        {t(`about.values.${value}.description`)}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
