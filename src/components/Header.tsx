import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [activeSection, setActiveSection] = useState('main');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Icon name="Hammer" size={28} className="text-primary" />
            <span className="text-xl font-bold text-secondary">СтройМаркет</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('main')}
              className={`text-sm font-semibold transition-colors ${
                activeSection === 'main' ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection('catalog')}
              className={`text-sm font-semibold transition-colors ${
                activeSection === 'catalog' ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              Каталог
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`text-sm font-semibold transition-colors ${
                activeSection === 'about' ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              О компании
            </button>
            <button
              onClick={() => scrollToSection('contacts')}
              className={`text-sm font-semibold transition-colors ${
                activeSection === 'contacts' ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              Контакты
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <a href="tel:+74951234567" className="hidden lg:flex items-center gap-2 text-sm font-semibold text-foreground">
              <Icon name="Phone" size={18} />
              +7 (495) 123-45-67
            </a>
            <Button size="sm" className="hidden sm:flex">
              Заказать звонок
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
