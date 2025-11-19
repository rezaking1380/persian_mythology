"use client"
import { createContext, useContext, useState } from 'react';

type Language = 'en' | 'fa';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    appTitle: 'Persian Mythology',
    tagline: 'Discover the Epic Tales of Ancient Persia',
    home: 'Home',
    myths: 'Myths & Legends',
    about: 'About',
    search: 'Search myths...',
    welcomeTitle: 'Journey Through Persian Mythology',
    welcomeText: 'Explore the rich tapestry of Persian mythology from the epic Shahnameh to legendary heroes, mystical creatures, and ancient gods. Immerse yourself in stories that have shaped Persian culture for millennia.',
    exploreMyths: 'Explore Myths',
    featuredMyths: 'Featured Myths & Legends',
    learnMore: 'Learn More',
    heroes: 'Heroes',
    gods: 'Gods & Deities',
    creatures: 'Mythical Creatures',
    filterAll: 'All',
    heroesDesc: 'Legendary warriors and champions',
    godsDesc: 'Divine beings and ancient deities',
    creaturesDesc: 'Mystical beasts and magical entities',
  },
  fa: {
    appTitle: 'اساطیر ایران',
    tagline: 'داستان‌های حماسی ایران باستان را کشف کنید',
    home: 'خانه',
    myths: 'اساطیر و افسانه‌ها',
    about: 'درباره',
    search: 'جستجوی اساطیر...',
    welcomeTitle: 'سفری در اساطیر ایرانی',
    welcomeText: 'منسوجات غنی اساطیر ایرانی را از شاهنامه حماسی گرفته تا قهرمانان افسانه‌ای، موجودات اسرارآمیز و خدایان باستانی کاوش کنید. در داستان‌هایی غوطه‌ور شوید که فرهنگ ایرانی را برای هزاران سال شکل داده‌اند.',
    exploreMyths: 'کاوش اساطیر',
    featuredMyths: 'اساطیر و افسانه‌های برگزیده',
    learnMore: 'بیشتر بدانید',
    heroes: 'قهرمانان',
    gods: 'خدایان',
    creatures: 'موجودات افسانه‌ای',
    filterAll: 'همه',
    heroesDesc: 'جنگجویان افسانه‌ای و قهرمانان',
    godsDesc: 'موجودات الهی و خدایان باستان',
    creaturesDesc: 'جانوران اسرارآمیز و موجودات جادویی',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'fa' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      <div dir={language === 'fa' ? 'rtl' : 'ltr'} className={language === 'fa' ? 'font-persian' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
