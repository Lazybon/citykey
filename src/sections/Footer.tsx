import { Phone, MapPin, Clock, MessageCircle, Mail, Instagram, ChevronRight } from 'lucide-react';

const quickLinks = [
  { label: 'Услуги', href: '#services' },
  { label: 'Преимущества', href: '#advantages' },
  { label: 'Отзывы', href: '#testimonials' },
  { label: 'Контакты', href: '#contact' },
];

const services = [
  'Изготовление ключей',
  'Автоключи',
  'Ремонт брелоков',
  'Автосигнализации',
  'Вскрытие замков',
  'Срочный выезд',
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <img
              src="/logo.png"
              alt="City Key"
              className="w-40 h-auto mb-6 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Профессиональные услуги по изготовлению и ремонту ключей. 
              Работаем с автомобилями любых марок. Быстро, качественно, с гарантией.
            </p>
            <div className="flex gap-3">
              <a
                href="https://t.me/citykey"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-[#0088cc] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Навигация</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="flex items-center text-gray-400 hover:text-white transition-colors group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-red-500 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Услуги</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection('#services')}
                    className="flex items-center text-gray-400 hover:text-white transition-colors group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-red-500 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    <span>{service}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Контакты</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+79999999999"
                  className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>+7 (999) 999-99-99</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@citykey.ru"
                  className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>info@citykey.ru</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span>г. Москва, ул. Примерная, д. 123</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Clock className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p>Пн-Пт: 9:00 - 21:00</p>
                  <p>Сб-Вс: 10:00 - 20:00</p>
                  <p className="text-green-400 text-sm mt-1">Выезд 24/7</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} City Key. Все права защищены.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Пользовательское соглашение
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
