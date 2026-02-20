import { Key, Car, Settings, Shield, Clock, Wrench, ArrowUpRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const services = [
  {
    icon: Key,
    title: 'Изготовление ключей',
    description: 'Копирование всех типов ключей: дверных, сейфовых, почтовых, гаражных. Работаем с любой сложностью.',
    price: 'от 150 ₽',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50',
  },
  {
    icon: Car,
    title: 'Автоключи',
    description: 'Изготовление ключей для автомобилей любых марок. Чип-ключи, выкидные ключи, смарт-ключи.',
    price: 'от 800 ₽',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Settings,
    title: 'Ремонт брелоков',
    description: 'Профессиональный ремонт ключей и брелоков. Замена корпусов, кнопок, батареек.',
    price: 'от 300 ₽',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Shield,
    title: 'Автосигнализации',
    description: 'Установка, настройка и ремонт автосигнализаций. Диагностика и устранение неисправностей.',
    price: 'от 500 ₽',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
  },
  {
    icon: Wrench,
    title: 'Вскрытие замков',
    description: 'Аварийное вскрытие автомобилей, квартир, сейфов без повреждений. Быстро и аккуратно.',
    price: 'от 1000 ₽',
    color: 'from-red-500 to-rose-500',
    bgColor: 'bg-red-50',
  },
  {
    icon: Clock,
    title: 'Срочный выезд',
    description: 'Выезд мастера к клиенту в течение 30 минут. Работаем по всему городу и области.',
    price: 'от 500 ₽',
    color: 'from-indigo-500 to-violet-500',
    bgColor: 'bg-indigo-50',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`group relative bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 hover:border-transparent transition-all duration-500 hover:shadow-soft-lg ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Hover Gradient Background */}
      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
      
      {/* Icon */}
      <div className={`relative w-14 h-14 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <service.icon className={`w-7 h-7 bg-gradient-to-br ${service.color} bg-clip-text`} style={{ color: 'inherit' }} />
        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 rounded-2xl`} />
        <service.icon className="w-7 h-7 text-gray-700 relative z-10" />
      </div>

      {/* Content */}
      <div className="relative">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
            {service.title}
          </h3>
          <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {service.description}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-sm text-gray-500">Стоимость:</span>
          <span className="text-lg font-bold text-red-600">{service.price}</span>
        </div>
      </div>
    </div>
  );
}

export function Services() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-red-50 text-red-600 text-sm font-medium rounded-full mb-4">
            Наши услуги
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Профессиональные
            <span className="gradient-text"> услуги</span>
          </h2>
          <p className="text-lg text-gray-600">
            Работаем с любыми типами замков и автомобилей. 
            Гарантируем качество и оперативность.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
