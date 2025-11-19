"use client";
import Navigation from '@/components/Navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { allMyths } from '@/data/myths';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Sparkles, BookOpen } from 'lucide-react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const Page = () => {
  const { id } = useParams();
  const { language, t } = useLanguage();
  const myth = allMyths.find((m) => m.id === id);
  console.log(id,myth,allMyths)
  
  if (!myth) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Navigation />
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Myth Not Found</h1>
          <Link href="/myths">
            <Button>Return to Myths</Button>
          </Link>
        </div>
      </div>
    );
  }

  const categoryColors = {
    hero: 'bg-persian-burgundy/20 text-persian-burgundy border-persian-burgundy/30',
    god: 'bg-persian-gold/20 text-accent-foreground border-persian-gold/30',
    creature: 'bg-persian-turquoise/20 text-persian-turquoise border-persian-turquoise/30',
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-20">
        {/* Hero Image Section */}
        <div className="relative h-[90vh] overflow-hidden mb-12">
          <Image
            src={myth.image}
            alt={myth.name[language]}
            className="w-full h-full object-cover"
            width={1440}
            height={800}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <Link href="/myths" className="inline-block mb-4">
                <Button variant="ghost" className="text-primary-foreground hover:text-accent">
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  {t('myths')}
                </Button>
              </Link>
              <div className="flex items-center gap-4 mb-4">
                <Badge className={`${categoryColors[myth.category]} text-lg px-4 py-2`} variant="outline">
                  {t(myth.category === 'hero' ? 'heroes' : myth.category === 'god' ? 'gods' : 'creatures')}
                </Badge>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-4">
                {myth.name[language]}
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-3xl">
                {myth.shortDescription[language]}
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Story */}
            <div className="lg:col-span-2">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-6">
                    <BookOpen className="w-6 h-6 text-accent" />
                    <h2 className="text-3xl font-bold text-foreground">The Story</h2>
                  </div>
                  <div className="prose prose-lg max-w-none">
                    {myth.fullStory[language].split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-foreground/90 mb-4 leading-relaxed text-lg">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Key Facts Sidebar */}
            <div className="lg:col-span-1">
              <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 sticky top-24">
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-6">
                    <Sparkles className="w-6 h-6 text-accent" />
                    <h2 className="text-2xl font-bold text-foreground">Key Facts</h2>
                  </div>
                  <ul className="space-y-4">
                    {myth.keyFacts[language].map((fact, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-accent text-xl mt-1">✦</span>
                        <span className="text-foreground/90 leading-relaxed">{fact}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Related Myths */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Explore More Myths</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {allMyths
                .filter((m) => m.id !== myth.id)
                .slice(0, 2)
                .map((relatedMyth) => (
                  <Link key={relatedMyth.id} href={`/myths/${relatedMyth.id}`}>
                    <Card className="overflow-hidden hover:shadow-persian transition-all duration-300 group h-full px-6">
                      <div className="flex h-full">
                        <div className="w-1/3 relative overflow-hidden rounded-lg">
                          <Image
                            src={relatedMyth.image}
                            alt={relatedMyth.name[language]}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            width={400}
                            height={300}
                          />
                        </div>
                        <CardContent className="w-2/3 p-6 flex flex-col justify-center">
                          <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                            {relatedMyth.name[language]}
                          </h3>
                          <p className="text-muted-foreground line-clamp-2">
                            {relatedMyth.shortDescription[language]}
                          </p>
                        </CardContent>
                      </div>
                    </Card>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
