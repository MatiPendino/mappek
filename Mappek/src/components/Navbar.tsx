import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import logoBlanco from '../assets/logo_medio_blanco.png';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const location = useLocation();
  const isHome: boolean = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  const scrollToSection = (id: string) => {
    if (!isHome) return;

    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const navLinks = [
    { label: t('nav.services'), id: 'services' },
    { label: t('nav.portfolio'), id: 'portfolio' },
    { label: t('nav.about'), id: 'about' },
    { label: t('nav.contact'), id: 'contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#050505]/90 backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 flex items-center justify-between h-20">
          <Link to="/" className="relative z-10">
            <img
              src={logoBlanco} alt="Mappek" className="h-20 md:h-30 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) =>
              isHome ? (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-[13px] tracking-[0.2em] uppercase text-[#8a8a85] hover:text-[#f5f5f0] transition-colors duration-300 font-light cursor-pointer"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.id}
                  to={`/#${link.id}`}
                  className="text-[13px] tracking-[0.2em] uppercase text-[#8a8a85] hover:text-[#f5f5f0] transition-colors duration-300 font-light"
                >
                  {link.label}
                </Link>
              )
            )}
            
            <button
              onClick={toggleLang}
              className="text-[13px] tracking-[0.2em] uppercase text-[#c9a84c] hover:text-[#dfc06a] transition-colors duration-300 font-light cursor-pointer border border-[#c9a84c]/30 px-5 py-2 rounded-sm hover:border-[#c9a84c]/60"
            >
              {i18n.language === 'es' ? 'EN' : 'ES'}
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-10 w-8 h-8 flex flex-col justify-center items-center gap-1.5 cursor-pointer"
            aria-label="Toggle menu"
            title="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[1.5px] bg-[#f5f5f0] origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-[1.5px] bg-[#f5f5f0]"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[1.5px] bg-[#f5f5f0] origin-center"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[#050505]/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-10"
          >
            {navLinks.map((link, i) =>
              isHome ? (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  onClick={() => scrollToSection(link.id)}
                  className="text-2xl tracking-[0.25em] uppercase text-[#f5f5f0] font-light cursor-pointer"
                >
                  {link.label}
                </motion.button>
              ) : (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <Link
                    to={`/#${link.id}`}
                    className="text-2xl tracking-[0.25em] uppercase text-[#f5f5f0] font-light"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              )
            )}
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              onClick={toggleLang}
              title="Switch language"
              className="text-lg tracking-[0.25em] uppercase text-[#c9a84c] font-light cursor-pointer border border-[#c9a84c]/30 px-5 py-2 rounded-sm"
            >
              {i18n.language === 'es' ? 'EN' : 'ES'}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
