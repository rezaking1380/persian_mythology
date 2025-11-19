import { Myth } from '@/data/myths';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';

interface MythCardProps {
  myth: Myth;
}

const MythCard = ({ myth }: MythCardProps) => {
  const { language, t } = useLanguage();

  const categoryColors = {
    hero: 'bg-persian-burgundy/20 text-persian-burgundy border-persian-burgundy/30',
    god: 'bg-persian-gold/20 text-accent-foreground border-persian-gold/30',
    creature: 'bg-persian-turquoise/20 text-persian-turquoise border-persian-turquoise/30',
  };

  return (
    <Link href={`/myths/${myth.id}`} className="group">
      <Card className="overflow-hidden border-border/50 px-6 hover:border-accent/50 transition-all duration-300 hover:shadow-persian bg-card/50 backdrop-blur-sm h-full">
        <div className="relative h-64 overflow-hidden rounded-lg">
          <Image
            src={myth.image}
            alt={myth.name[language]}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            width={400}
            height={267}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
          <Badge 
            className={`absolute top-4 ${language === 'fa' ? 'left-4' : 'right-4'} ${categoryColors[myth.category]}`}
            variant="outline"
          >
            {t(myth.category === 'hero' ? 'heroes' : myth.category === 'god' ? 'gods' : 'creatures')}
          </Badge>
        </div>
        <CardContent className="">
          <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
            {myth.name[language]}
          </h3>
          <p className="text-muted-foreground line-clamp-3 leading-relaxed">
            {myth.shortDescription[language]}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default MythCard;
