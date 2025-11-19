import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Users, Sparkles, Brain } from 'lucide-react';

const Page = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              About Persian Mythology
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover the rich heritage of ancient Persia through its timeless myths and legends
            </p>
          </div>

          <div className="space-y-12">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="w-8 h-8 text-accent" />
                  <h2 className="text-3xl font-bold">The Shahnameh</h2>
                </div>
                <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                  The Shahnameh (Book of Kings) is the monumental epic poem written by the Persian poet Ferdowsi around 1000 CE. This masterpiece took over 30 years to complete and contains approximately 50,000 rhyming couplets, making it one of the longest epic poems ever written by a single author.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  The Shahnameh chronicles the mythical and historical past of Persia from the creation of the world until the Arab conquest of Iran in the 7th century. It preserves Persian language, culture, and mythology, serving as the national epic of Greater Iran.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-8 h-8 text-accent" />
                  <h2 className="text-3xl font-bold">Cultural Significance</h2>
                </div>
                <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                  Persian mythology has profoundly influenced literature, art, and culture not only in Iran but throughout the Middle East and beyond. The tales embody universal themes of heroism, sacrifice, love, and the eternal struggle between good and evil.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  These stories have been passed down through generations, shaping Persian identity and values. They continue to inspire modern literature, cinema, and art, demonstrating their timeless relevance and appeal.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Brain className="w-8 h-8 text-accent" />
                  <h2 className="text-3xl font-bold">Educational Purpose</h2>
                </div>
                <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                  This platform is designed to make Persian mythology accessible to students, educators, and enthusiasts worldwide. Through interactive storytelling, multilingual content, and AI-powered educational tools, we aim to preserve and promote these ancient tales for future generations.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Teachers can use our platform to create engaging lessons, generate quizzes, and adapt content to different learning levels, making these epic stories come alive in the classroom.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-8 h-8 text-accent" />
                  <h2 className="text-3xl font-bold">Key Themes</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-accent">Heroism & Valor</h3>
                    <p className="text-foreground/80">Epic battles and legendary warriors defending their homeland</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-accent">Good vs Evil</h3>
                    <p className="text-foreground/80">The eternal struggle between light and darkness</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-accent">Wisdom & Knowledge</h3>
                    <p className="text-foreground/80">Ancient wisdom passed down through generations</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-accent">Loyalty & Honor</h3>
                    <p className="text-foreground/80">The importance of duty, loyalty, and moral integrity</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
