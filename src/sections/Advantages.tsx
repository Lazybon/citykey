import { Check, Zap, Award, Headphones, Truck, Lock } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const advantages = [
  {
    icon: Zap,
    title: 'Быстро',
    description: 'Изготовление ключей за 5-15 минут. Срочный выезд мастера за 30 минут.',
    stat: '15 мин',
    statLabel: 'среднее время',
  },
  {
    icon: Award,
    title: 'Качественно',
    description: 'Профессиональное оборудование и опытные мастера с гарантией результата.',
    stat: '10+',
    statLabel: 'лет опыта',
  },
  {
    icon: Headphones,
    title: 'Поддержка 24/7',
    description: 'Консультация и запись на удобное время. Работаем без выходных.',
    stat: '24/7',
    statLabel: 'всегда на связи',
  },
  {
    icon: Truck,
    title: 'Выезд к клиенту',
    description: 'Приедем к вам домой, на работу или к автомобилю в любую точку города.',
    stat: '30 мин',
    statLabel: 'время приезда',
  },
  {
    icon: Lock,
    title: 'Гарантия',
    description: 'Предоставляем гарантию на все виды работ и изготовленные ключи.',
    stat: '100%',
    statLabel: 'гарантия',
  },
  {
    icon: Check,
    title: 'Честные цены',
    description: 'Прозрачное ценообразование без скрытых платежей и переплат.',
    stat: '0 ₽',
    statLabel: 'скрытых платежей',
  },
];

function AdvantageCard({ advantage, index }: { advantage: typeof advantages[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 80);
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
      className={`group relative bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-soft-lg hover:border-red-100 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Icon */}
      <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-red-200 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
        <advantage.icon className="w-7 h-7 text-white" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {advantage.title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        {advantage.description}
      </p>

      {/* Stat */}
      <div className="pt-4 border-t border-gray-100">
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold gradient-text">{advantage.stat}</span>
          <span className="text-sm text-gray-500">{advantage.statLabel}</span>
        </div>
      </div>
    </div>
  );
}

export function Advantages() {
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
    <section id="advantages" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-red-50 text-red-600 text-sm font-medium rounded-full mb-4">
            Почему мы
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Преимущества
            <span className="gradient-text"> работы с нами</span>
          </h2>
          <p className="text-lg text-gray-600">
            Мы ценим ваше время и доверие, поэтому предлагаем только качественные услуги
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <AdvantageCard key={index} advantage={advantage} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
