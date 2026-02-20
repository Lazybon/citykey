import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'Услуги', href: '#services' },
  { label: 'Преимущества', href: '#advantages' },
  { label: 'Отзывы', href: '#testimonials' },
  { label: 'Контакты', href: '#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-soft py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="City Key"
                className={`h-10 w-auto transition-all duration-300 ${
                  isScrolled ? '' : 'brightness-0'
                }`}
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-sm font-medium transition-colors hover:text-red-600 ${
                    isScrolled ? 'text-gray-700' : 'text-gray-800'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a href="tel:+79999999999">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`font-medium ${
                    isScrolled ? 'text-gray-700' : 'text-gray-800'
                  }`}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +7 (999) 999-99-99
                </Button>
              </a>
              <Button
                onClick={() => scrollToSection('#contact')}
                size="sm"
                className="bg-red-600 hover:bg-red-700 text-white rounded-full px-6"
              >
                Заказать
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="pt-24 px-6">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-lg font-medium text-gray-800 py-3 border-b border-gray-100 text-left"
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="mt-8 space-y-3">
            <a href="tel:+79999999999" className="block">
              <Button variant="outline" className="w-full justify-center">
                <Phone className="w-4 h-4 mr-2" />
                Позвонить
              </Button>
            </a>
            <Button
              onClick={() => scrollToSection('#contact')}
              className="w-full bg-red-600 hover:bg-red-700"
            >
              Оставить заявку
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
