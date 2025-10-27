import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const categories = [
    { name: 'Цемент и смеси', icon: 'Package', count: 150 },
    { name: 'Кирпич и блоки', icon: 'Square', count: 89 },
    { name: 'Инструменты', icon: 'Wrench', count: 230 },
    { name: 'Крепеж', icon: 'Hexagon', count: 450 },
    { name: 'Пиломатериалы', icon: 'Database', count: 120 },
    { name: 'Электрика', icon: 'Zap', count: 340 },
  ];

  const products = [
    {
      id: 1,
      name: 'Цемент М500',
      price: '450',
      unit: 'мешок 50кг',
      category: 'Цемент',
      inStock: true,
    },
    {
      id: 2,
      name: 'Кирпич керамический',
      price: '18',
      unit: 'шт',
      category: 'Кирпич',
      inStock: true,
    },
    {
      id: 3,
      name: 'Дрель ударная',
      price: '3200',
      unit: 'шт',
      category: 'Инструменты',
      inStock: true,
    },
    {
      id: 4,
      name: 'Саморезы 3.5х35',
      price: '120',
      unit: 'уп. 200шт',
      category: 'Крепеж',
      inStock: false,
    },
    {
      id: 5,
      name: 'Брус 100х100',
      price: '8500',
      unit: 'м³',
      category: 'Пиломатериалы',
      inStock: true,
    },
    {
      id: 6,
      name: 'Кабель ВВГ 3х2.5',
      price: '85',
      unit: 'м',
      category: 'Электрика',
      inStock: true,
    },
  ];

  const advantages = [
    {
      icon: 'Truck',
      title: 'Быстрая доставка',
      description: 'Доставим заказ в течение 24 часов по Москве и области',
    },
    {
      icon: 'BadgeCheck',
      title: 'Гарантия качества',
      description: 'Работаем только с проверенными производителями',
    },
    {
      icon: 'Wallet',
      title: 'Выгодные цены',
      description: 'Оптовые и розничные цены. Скидки постоянным клиентам',
    },
    {
      icon: 'Headphones',
      title: 'Консультации',
      description: 'Опытные специалисты помогут подобрать материалы',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section id="main" className="relative bg-secondary text-white py-24">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/bf47581d-3014-4366-a981-2b59429099b1/files/707682ff-c552-44f0-b282-61f23e652846.jpg')`,
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Строительные материалы для профессионалов
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Полный ассортимент качественных материалов, инструментов и оборудования для строительства и ремонта
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Смотреть каталог
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Card key={category.name} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-3">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon name={category.icon as any} size={28} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{category.name}</h3>
                  <p className="text-xs text-muted-foreground">{category.count} товаров</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-4xl font-bold mb-2">Каталог товаров</h2>
              <p className="text-muted-foreground">Популярные позиции в наличии</p>
            </div>
            <Button variant="outline">
              Все товары
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant={product.inStock ? 'default' : 'secondary'}>
                      {product.inStock ? 'В наличии' : 'Под заказ'}
                    </Badge>
                    <Badge variant="outline">{product.category}</Badge>
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-3xl font-bold text-primary">{product.price} ₽</p>
                      <p className="text-sm text-muted-foreground">{product.unit}</p>
                    </div>
                    <Button size="sm">
                      <Icon name="ShoppingCart" size={16} className="mr-1" />
                      Купить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">О компании</h2>
            <p className="text-lg text-muted-foreground">
              СтройМаркет — надежный поставщик строительных материалов с 2005 года. Мы предлагаем качественную продукцию
              по конкурентным ценам для профессиональных строителей и частных клиентов.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage) => (
              <div key={advantage.title} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={advantage.icon as any} size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-muted/50 rounded-lg p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-5xl font-bold text-primary mb-2">5000+</p>
                <p className="text-muted-foreground font-semibold">Довольных клиентов</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-primary mb-2">1200+</p>
                <p className="text-muted-foreground font-semibold">Наименований товаров</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-primary mb-2">18</p>
                <p className="text-muted-foreground font-semibold">Лет на рынке</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Свяжитесь с нами</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Адрес</p>
                    <p className="text-muted-foreground">г. Москва, ул. Строительная, д. 15</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Телефон</p>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <p className="text-muted-foreground">info@stroymarket.ru</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Режим работы</p>
                    <p className="text-muted-foreground">Пн-Пт: 8:00 - 20:00</p>
                    <p className="text-muted-foreground">Сб-Вс: 9:00 - 18:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Отправить сообщение</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Телефон" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <Textarea placeholder="Ваше сообщение" rows={4} />
                  </div>
                  <Button className="w-full" size="lg">
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Hammer" size={24} />
                <span className="text-xl font-bold">СтройМаркет</span>
              </div>
              <p className="text-white/70 text-sm">
                Надежный поставщик строительных материалов с 2005 года
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Цемент и смеси</li>
                <li>Кирпич и блоки</li>
                <li>Инструменты</li>
                <li>Пиломатериалы</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>О нас</li>
                <li>Доставка</li>
                <li>Оплата</li>
                <li>Гарантии</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>+7 (495) 123-45-67</li>
                <li>info@stroymarket.ru</li>
                <li>г. Москва, ул. Строительная, 15</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
            <p>© 2024 СтройМаркет. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
