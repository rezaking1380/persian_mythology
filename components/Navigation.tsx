
"use client"
import { Globe, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll listener for navbar background
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 20);
    });
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-persian-gold to-accent rounded-lg flex items-center justify-center shadow-gold">
              <span className="text-2xl">✦</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-persian-gold to-accent bg-clip-text text-transparent">
              {t('appTitle')}
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <Link 
              href="/" 
              className="text-foreground/80 hover:text-accent transition-colors font-medium"
            >
              {t('home')}
            </Link>
            <Link 
              href="/myths" 
              className="text-foreground/80 hover:text-accent transition-colors font-medium"
            >
              {t('myths')}
            </Link>
            <Link 
              href="/about" 
              className="text-foreground/80 hover:text-accent transition-colors font-medium"
            >
              {t('about')}
            </Link>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="hover:bg-accent/10 hover:text-accent"
            >
              <Globe className="h-5 w-5" />
              <span className="ml-2 text-sm">{language === 'en' ? 'فا' : 'EN'}</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
