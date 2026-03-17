import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import logoBlanco from '../assets/logo_medio_blanco.png';

export default function Footer() {
  const { t } = useTranslation();
  const year: number = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-[#050505]">
      <div className="w-full max-w-[1200px] mx-auto px-8 md:px-16 lg:px-20 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex flex-col gap-4">
            <img
              src={logoBlanco} alt="Mappek" className="h-30 w-auto self-start"
            />
            <p className="text-[#8a8a85] text-sm font-light">
              &copy; {year} Mappek. {t('footer.rights')}
            </p>
          </div>
          <div className="flex flex-wrap gap-8 text-sm">
            <Link
              to="/privacy"
              className="text-[#8a8a85] hover:text-[#f5f5f0] transition-colors duration-300 font-light"
            >
              {t('footer.privacy')}
            </Link>
            <Link
              to="/cookies"
              className="text-[#8a8a85] hover:text-[#f5f5f0] transition-colors duration-300 font-light"
            >
              {t('footer.cookies')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
