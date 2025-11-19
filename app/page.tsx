"use client";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MythCard from "@/components/MythCard";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { allMyths } from "@/data/myths";
import { Sparkles } from "lucide-react";

const queryClient = new QueryClient();

export default function Home() {
  const { t } = useLanguage();
  const featuredMyths = allMyths.slice(0, 3);
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Sonner />
        {/* <LanguageProvider> */}
          <div className="min-h-screen bg-background">
            <Navigation />
            <HeroSection />

            <section className="py-20 px-4">
              <div className="container mx-auto">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-accent" />
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                      {t("featuredMyths")}
                    </h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuredMyths.map((myth) => (
                    <MythCard key={myth.id} myth={myth} />
                  ))}
                </div>
              </div>
            </section>
          </div>
        {/* </LanguageProvider> */}
      </TooltipProvider>
    </QueryClientProvider>
  );
}
