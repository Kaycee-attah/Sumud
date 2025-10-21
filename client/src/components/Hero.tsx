import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/Hero_banner_cassava_background_cee58ef0.png";
import TiltedCard from './TiltedCard';
import { Link } from "wouter";

export function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex justify-center">
        <TiltedCard
          containerHeight="auto"
          containerWidth="auto"
          rotateAmplitude={10} // Slightly increased for more dramatic effect
          scaleOnHover={1.03} // More subtle scale
          shadowIntensity={0.4} // Enhanced shadow
          enableGlare={true} // Enable the glare effect
          showMobileWarning={false}
          className="flex justify-center"
        >
          <div className="glass-card rounded-xl p-8 md:p-12 max-w-2xl backdrop-blur-xl border border-white/10 relative overflow-hidden">
            
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            
            <div className="relative z-10">
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4" data-testid="text-hero-title">
                Premium Sumud Cassava Flour
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8" data-testid="text-hero-subtitle">
                Sustainably sourced, traditionally processed. Experience the authentic taste of pure cassava flour.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/products">
                  <Button size="lg" className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 transition-all duration-300" data-testid="button-shop-now">
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="bg-transparent backdrop-blur-md border-white/50 text-white hover:bg-white/10 transition-all duration-300" data-testid="button-learn-more">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </TiltedCard>
      </div>
    </section>
  );
}