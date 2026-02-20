import { Star, Quote } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    name: 'Александр М.',
    role: 'Владелец BMW X5',
    content: 'Срочно нужен был дубликат ключа для BMW. Мастер приехал за 20 минут, сделал всё на месте. Ключ работает идеально, цена адекватная. Рекомендую!',
    rating: 5,
    date: '2 дня назад',
  },
  {
    name: 'Елена К.',
    role: 'Клиент',
    content: 'Потеряла ключи от квартиры вечером. Ребята откликнулись сразу, приехали быстро, вскрыли дверь без повреждений. Спасибо за помощь!',
    rating: 5,
    date: 'неделю назад',
  },
  {
    name: 'Дмитрий В.',
    role: 'Владелец Toyota Camry',
    content: 'Программирование чип-ключа для Тойоты. Всё сделали профессионально, объяснили как пользоваться. Теперь только к вам!',
    rating: 5,
    date: '2 недели назад',
  },
  {
    name: 'Марина С.',
    role: 'Клиент',
    content: 'Ремонт брелка сигнализации. Заменили корпус и кнопки, как новый стал. Цена приятно удивила, в других местах дороже.',
    rating: 5,
    date: 'месяц назад',
  },
];

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
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
      className={`group relative bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-soft-lg transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center">
        <Quote className="w-5 h-5 text-red-400" />
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
        ))}
      </div>

      {/* Content */}
      <p className="text-gray-700 leading-relaxed mb-6">
        "{testimonial.content}"
      </p>

      {/* Author */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div>
          <p className="font-semibold text-gray-900">{testimonial.name}</p>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
        <span className="text-xs text-gray-400">{testimonial.date}</span>
      </div>
    </div>
  );
}

export function Testimonials() {
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
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-red-50 text-red-600 text-sm font-medium rounded-full mb-4">
            Отзывы клиентов
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Что говорят
            <span className="gradient-text"> наши клиенты</span>
          </h2>
          <p className="text-lg text-gray-600">
            Более 5000 довольных клиентов доверяют нам свои ключи
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { value: '5000+', label: 'Довольных клиентов' },
            { value: '10+', label: 'Лет опыта' },
            { value: '4.9', label: 'Рейтинг на Яндекс' },
            { value: '30 мин', label: 'Среднее время приезда' },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
