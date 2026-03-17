import { useTranslation } from 'react-i18next';
import ScrollReveal from '../components/ScrollReveal';

const serviceIcons = [
  // Browser window
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
    <rect x="4" y="8" width="40" height="32" rx="2" />
    <line x1="4" y1="16" x2="44" y2="16" />
    <circle cx="10" cy="12" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="16" cy="12" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="22" cy="12" r="1.5" fill="currentColor" stroke="none" />
    <line x1="12" y1="24" x2="36" y2="24" />
    <line x1="12" y1="30" x2="28" y2="30" />
  </svg>,
  // Shopping bag
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
    <path d="M12 16L8 44h32l-4-28H12z" />
    <path d="M16 16V12a8 8 0 1116 0v4" />
    <circle cx="20" cy="30" r="2" fill="currentColor" stroke="none" />
    <circle cx="28" cy="30" r="2" fill="currentColor" stroke="none" />
  </svg>,
  // Code brackets
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
    <polyline points="16,12 6,24 16,36" />
    <polyline points="32,12 42,24 32,36" />
    <line x1="28" y1="8" x2="20" y2="40" />
  </svg>,
  // Shield
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
    <path d="M24 4L6 12v12c0 11.1 7.7 21.5 18 24 10.3-2.5 18-12.9 18-24V12L24 4z" />
    <polyline points="16,24 22,30 32,18" strokeWidth="2" />
  </svg>
];

export default function Services() {
  const { t } = useTranslation();

  const services = [
    { key: 'landing', icon: serviceIcons[0] },
    { key: 'ecommerce', icon: serviceIcons[1] },
    { key: 'custom', icon: serviceIcons[2] },
    { key: 'support', icon: serviceIcons[3] },
  ];

  return (
    <section id="services" className="relative py-32 md:py-40 bg-[#050505]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-transparent via-[#c9a84c]/20 to-transparent" />

      <div className="w-full max-w-[1200px] mx-auto px-8 md:px-16 lg:px-20">
        <div className="text-center mb-20">
          <ScrollReveal>
            <p className="text-[#c9a84c] text-[13px] tracking-[0.3em] uppercase font-light mb-4">
              {t('services.title')}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-[#f5f5f0] tracking-tight mb-6 max-w-[600px] mx-auto">
              {t('services.subtitle')}
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <ScrollReveal key={service.key} delay={i * .1}>
              <div className="group relative p-10 md:p-12 border border-white/[0.06] rounded-lg bg-[#0a0a0a] hover:border-[#c9a84c]/20 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#c9a84c]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="text-[#c9a84c] mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-display font-medium text-[#f5f5f0] mb-3">
                    {t(`services.${service.key}.title`)}
                  </h3>
                  <p className="text-[#8a8a85] text-sm font-light leading-relaxed">
                    {t(`services.${service.key}.description`)}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-[1px] h-8 bg-[#c9a84c]/40" />
                  <div className="absolute top-0 right-0 w-8 h-[1px] bg-[#c9a84c]/40" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
