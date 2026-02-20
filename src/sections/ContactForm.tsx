import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send, Phone, User, MessageSquare, CheckCircle, Clock, MapPin, Mail } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsDialogOpen(true);
    
    setTimeout(() => {
      setFormData({ name: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    { icon: Phone, label: 'Телефон', value: '+7 (999) 999-99-99', href: 'tel:+79999999999' },
    { icon: Mail, label: 'Email', value: 'info@citykey.ru', href: 'mailto:info@citykey.ru' },
    { icon: MapPin, label: 'Адрес', value: 'г. Москва, ул. Примерная, д. 123', href: '#' },
    { icon: Clock, label: 'Режим работы', value: 'Пн-Вс: 9:00 - 21:00', href: '#' },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-red-50 text-red-600 text-sm font-medium rounded-full mb-4">
            Свяжитесь с нами
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Оставьте
            <span className="gradient-text"> заявку</span>
          </h2>
          <p className="text-lg text-gray-600">
            Заполните форму ниже, и мы свяжемся с вами в ближайшее время
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-soft">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Контактная информация</h3>
              
              <div className="space-y-5">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 transition-colors">
                      <item.icon className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-0.5">{item.label}</p>
                      <p className="font-medium text-gray-900 group-hover:text-red-600 transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Быстрый заказ</h3>
              <p className="text-red-100 mb-6">
                Нужна срочная помощь? Напишите нам в Telegram или позвоните
              </p>
              <div className="space-y-3">
                <a
                  href="https://t.me/citykey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-white text-red-600 py-3 rounded-xl font-semibold hover:bg-red-50 transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  Написать в Telegram
                </a>
                <a
                  href="tel:+79999999999"
                  className="flex items-center justify-center gap-2 w-full bg-red-800/50 text-white py-3 rounded-xl font-semibold hover:bg-red-800/70 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Позвонить
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-soft-lg">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                  <Send className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Форма заявки</h3>
                  <p className="text-sm text-gray-500">Мастер перезвонит через 5 минут</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700 font-medium flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-400" />
                      Ваше имя
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12 rounded-xl border-gray-200 focus:border-red-500 focus:ring-red-500/20 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700 font-medium flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-400" />
                      Телефон
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+7 (999) 999-99-99"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="h-12 rounded-xl border-gray-200 focus:border-red-500 focus:ring-red-500/20 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700 font-medium flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-gray-400" />
                    Что нужно сделать?
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Опишите вашу проблему или нужную услугу..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="rounded-xl border-gray-200 focus:border-red-500 focus:ring-red-500/20 resize-none transition-all"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-6 rounded-xl transition-all duration-300 shadow-lg shadow-red-200 hover:shadow-xl hover:shadow-red-200"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Отправить заявку
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md rounded-3xl">
          <DialogHeader className="text-center">
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <DialogTitle className="text-2xl font-bold text-gray-900">
              Заявка отправлена!
            </DialogTitle>
            <DialogDescription className="text-gray-600">
              Спасибо за обращение. Наш мастер свяжется с вами в ближайшее время.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6">
            <Button
              onClick={() => setIsDialogOpen(false)}
              className="w-full bg-red-600 hover:bg-red-700 rounded-xl py-6"
            >
              Отлично
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
