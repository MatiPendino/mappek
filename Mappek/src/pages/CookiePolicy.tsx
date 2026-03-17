import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

const sectionKeys = [
  'what', 'types', 'necessary', 'analytics', 'marketing', 'manage', 'thirdParty', 
  'changes', 'contact',
] as const;

export default function CookiePolicy() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen bg-[#050505] pt-32 pb-20">
      <div className="max-w-[800px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-display font-semibold text-[#f5f5f0] tracking-tight mb-4">
            {t('cookiePolicy.title')}
          </h1>

          <p className="text-[#8a8a85] text-sm font-light mb-12">
            {t('cookiePolicy.lastUpdated')}
          </p>

          <p className="text-[#8a8a85] text-base font-light leading-relaxed mb-12 pb-8 border-b border-white/[0.06]">
            {t('cookiePolicy.intro')}
          </p>
        </motion.div>

        <div className="space-y-10">
          {sectionKeys.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.05 }}
            >
              <h2 className="text-xl font-display font-medium text-[#f5f5f0] mb-4">
                {t(`cookiePolicy.sections.${key}.title`)}
              </h2>
              
              <div className="text-[#8a8a85] text-sm font-light leading-relaxed whitespace-pre-line privacy-content">
                {t(`cookiePolicy.sections.${key}.content`)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
