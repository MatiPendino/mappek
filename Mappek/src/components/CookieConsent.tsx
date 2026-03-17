import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const STORAGE_KEY = 'mappek_cookie_consent';

function getStoredConsent(): CookiePreferences | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

export default function CookieConsent() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, analytics: false, marketing: false
  });

  useEffect(() => {
    const stored = getStoredConsent();
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    setVisible(false);
  };

  const acceptAll = () => saveConsent({ necessary: true, analytics: true, marketing: true });
  const rejectAll = () => saveConsent({ necessary: true, analytics: false, marketing: false });
  const savePreferences = () => saveConsent(preferences);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-8 pb-6 md:pb-10 flex justify-center"
        >
          <div className="w-full max-w-[680px] bg-[#141414] border border-white/[0.08] rounded-lg p-8 md:p-10 shadow-2xl">
            <AnimatePresence mode="wait">
              {!showDetails ? (
                <motion.div
                  key="main"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-[#f5f5f0] text-lg font-medium mb-3 font-display">
                    {t('cookie.title')}
                  </h3>
                  <p className="text-[#8a8a85] text-sm font-light leading-relaxed mb-6">
                    {t('cookie.description')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 mt-2">
                    <button
                      onClick={acceptAll}
                      className="px-8 py-3.5 bg-[#c9a84c] text-[#050505] text-sm font-medium rounded-sm hover:bg-[#dfc06a] transition-colors duration-300 cursor-pointer"
                    >
                      {t('cookie.acceptAll')}
                    </button>

                    <button
                      onClick={rejectAll}
                      className="px-8 py-3.5 border border-white/[0.12] text-[#f5f5f0] text-sm font-light rounded-sm hover:border-white/[0.25] transition-colors duration-300 cursor-pointer"
                    >
                      {t('cookie.rejectAll')}
                    </button>

                    <button
                      onClick={() => setShowDetails(true)}
                      className="px-8 py-3.5 text-[#8a8a85] text-sm font-light hover:text-[#f5f5f0] transition-colors duration-300 cursor-pointer"
                    >
                      {t('cookie.manage')}
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="details"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-[#f5f5f0] text-lg font-medium mb-5 font-display">
                    {t('cookie.manage')}
                  </h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[#f5f5f0] text-sm font-medium">
                          {t('cookie.necessary')}
                        </p>
                        <p className="text-[#8a8a85] text-xs font-light mt-0.5">
                          {t('cookie.necessaryDesc')}
                        </p>
                      </div>

                      <div className="w-10 h-5 bg-[#c9a84c] rounded-full relative">
                        <div 
                          className="absolute right-0.5 top-0.5 w-4 h-4 bg-[#050505] rounded-full" 
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[#f5f5f0] text-sm font-medium">
                          {t('cookie.analytics')}
                        </p>
                        <p className="text-[#8a8a85] text-xs font-light mt-0.5">
                          {t('cookie.analyticsDesc')}
                        </p>
                      </div>

                      <button
                        onClick={() => setPreferences(preference => (
                          { ...preference, analytics: !preference.analytics }
                        ))}
                        title={t('cookie.analytics')}
                        className={`w-10 h-5 rounded-full relative transition-colors duration-300 cursor-pointer ${
                          preferences.analytics ? 'bg-[#c9a84c]' : 'bg-white/[0.12]'
                        }`}
                      >
                        <div
                          className={`absolute top-0.5 w-4 h-4 bg-[#050505] rounded-full transition-all duration-300 ${
                            preferences.analytics ? 'right-0.5' : 'left-0.5'
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[#f5f5f0] text-sm font-medium">
                          {t('cookie.marketing')}
                        </p>
                        <p className="text-[#8a8a85] text-xs font-light mt-0.5">
                          {t('cookie.marketingDesc')}
                        </p>
                      </div>

                      <button
                        onClick={() => setPreferences(preference => (
                          { ...preference, marketing: !preference.marketing }
                        ))}
                        title={t('cookie.marketing')}
                        className={`w-10 h-5 rounded-full relative transition-colors duration-300 cursor-pointer ${
                          preferences.marketing ? 'bg-[#c9a84c]' : 'bg-white/[0.12]'
                        }`}
                      >
                        <div
                          className={`absolute top-0.5 w-4 h-4 bg-[#050505] rounded-full transition-all duration-300 ${
                            preferences.marketing ? 'right-0.5' : 'left-0.5'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <button
                      onClick={savePreferences}
                      className="px-8 py-3.5 bg-[#c9a84c] text-[#050505] text-sm font-medium rounded-sm hover:bg-[#dfc06a] transition-colors duration-300 cursor-pointer"
                    >
                      {t('cookie.save')}
                    </button>
                    <button
                      onClick={() => setShowDetails(false)}
                      className="px-8 py-3.5 text-[#8a8a85] text-sm font-light hover:text-[#f5f5f0] transition-colors duration-300 cursor-pointer"
                    >
                      {t('cookie.back')}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
