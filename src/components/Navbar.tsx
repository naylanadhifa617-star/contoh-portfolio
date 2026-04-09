import { useState, useEffect, useCallback } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = useCallback((href: string) => {
    const el = document.querySelector(href);
    if (el) {
      window.scrollTo({
        top: (el as HTMLElement).offsetTop - 80,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-md border-b border-blue-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">

        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          nayelll
        </h1>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="cursor-pointer text-blue-800 hover:text-blue-500 text-sm transition"
            >
              {item.label}
            </a>
          ))}

          <Button className="bg-blue-100 text-blue-700" onClick={toggleTheme}>
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
        </div>

        <div className="md:hidden flex gap-2">
          <Button className="bg-blue-100 text-blue-700" onClick={toggleTheme}>
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </Button>

          <Button
            className="bg-blue-100 text-blue-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div className="md:hidden bg-white border-t border-blue-100">
            <div className="flex flex-col p-4 gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-blue-800 hover:text-blue-500"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}