import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, ArrowRight, Clock, Shield, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToForm = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    { icon: Clock, text: 'Работаем ежедневно' },
    { icon: Shield, text: 'Гарантия на все работы' },
    { icon: MapPin, text: 'Выезд к клиенту' },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-red-50/30">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-red-100/50 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gray-100/80 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div 
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full border border-red-100">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-red-700">Выезд мастера за 30 минут</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1]">
                Изготовление
                <span className="block gradient-text">и ремонт ключей</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Автоключи, брелоки, автосигнализации. 
                Быстро, качественно, с гарантией.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToForm}
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-base font-semibold rounded-2xl shadow-glow hover:shadow-lg transition-all duration-300 group"
              >
                <Phone className="mr-2 h-5 w-5" />
                Оставить заявку
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a
                href="https://t.me/citykey"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-200 px-8 py-4 text-base font-semibold rounded-2xl transition-all duration-300 hover:border-gray-300"
              >
                <MessageCircle className="mr-2 h-5 w-5 text-[#0088cc]" />
                Написать в Telegram
              </a>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6 pt-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-red-600" />
                  </div>
                  {feature.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Logo Display */}
          <div 
            className={`relative flex items-center justify-center transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Decorative Ring */}
            <div className="absolute w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] border-2 border-dashed border-red-200 rounded-full animate-[spin_60s_linear_infinite]" />
            <div className="absolute w-[320px] h-[320px] lg:w-[400px] lg:h-[400px] border border-red-100 rounded-full" />
            
            {/* Logo Container */}
            <div className="relative bg-white rounded-3xl shadow-soft-lg p-8 lg:p-12">
              <img
                src="/logo.png"
                alt="City Key"
                className="w-full max-w-sm h-auto"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-xl shadow-lg">
                <span className="text-sm font-semibold">от 150 ₽</span>
              </div>
            </div>

            {/* Key Icons Decoration */}
            <div className="absolute top-10 left-10 w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center animate-float">
              <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </div>
            <div className="absolute bottom-20 right-0 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToServices}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-red-600 transition-colors group"
        >
          <span className="text-xs font-medium">Листайте вниз</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2 group-hover:border-red-600">
            <div className="w-1.5 h-3 bg-current rounded-full animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
}
