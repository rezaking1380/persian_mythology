"use client"
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import MythCard from '@/components/MythCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { allMyths } from '@/data/myths';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

function Page() {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'hero' | 'god' | 'creature'>('all');

  const filteredMyths = allMyths.filter((myth) => {
    const matchesSearch = 
      myth.name[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      myth.shortDescription[language].toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || myth.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {t('myths')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('welcomeText')}
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12 space-y-6">
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder={t('search')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg border-border/50 focus:border-accent bg-card/50 backdrop-blur-sm"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => setSelectedCategory('all')}
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                className={selectedCategory === 'all' ? 'bg-accent hover:bg-accent/90' : ''}
              >
                {t('filterAll')}
              </Button>
              <Button
                onClick={() => setSelectedCategory('hero')}
                variant={selectedCategory === 'hero' ? 'default' : 'outline'}
                className={selectedCategory === 'hero' ? 'bg-persian-burgundy hover:bg-persian-burgundy/90' : ''}
              >
                {t('heroes')}
              </Button>
              <Button
                onClick={() => setSelectedCategory('god')}
                variant={selectedCategory === 'god' ? 'default' : 'outline'}
                className={selectedCategory === 'god' ? 'bg-accent hover:bg-accent/90' : ''}
              >
                {t('gods')}
              </Button>
              <Button
                onClick={() => setSelectedCategory('creature')}
                variant={selectedCategory === 'creature' ? 'default' : 'outline'}
                className={selectedCategory === 'creature' ? 'bg-persian-turquoise hover:bg-persian-turquoise/90 text-foreground' : ''}
              >
                {t('creatures')}
              </Button>
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMyths.map((myth) => (
              <MythCard key={myth.id} myth={myth} />
            ))}
          </div>

          {filteredMyths.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-muted-foreground">No myths found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
