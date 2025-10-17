import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/Hero_banner_cassava_background_cee58ef0.png";

export function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="glass-card rounded-lg p-8 md:p-12 max-w-2xl backdrop-blur-xl">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4" data-testid="text-hero-title">
            Premium Artisan Cassava Flour
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8" data-testid="text-hero-subtitle">
            Sustainably sourced, traditionally processed. Experience the authentic taste of pure cassava flour.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30" data-testid="button-shop-now">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent backdrop-blur-md border-white/50 text-white hover:bg-white/10" data-testid="button-learn-more">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
