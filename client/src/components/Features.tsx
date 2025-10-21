// Features.tsx
import { Leaf, Award, Heart, Package, LucideIcon } from "lucide-react";
import SpotlightCard from "./SpotlightCard/SpotlightCard";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  spotlightColor: string;
  iconColor?: string;
}

const features: Feature[] = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "No additives, no preservatives. Just pure cassava flour processed the traditional way.",
    spotlightColor: "rgba(34, 197, 94, 0.15)", // Green tint for natural theme
    iconColor: "text-green-500"
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Hand-selected cassava roots, carefully processed to maintain nutritional value.",
    spotlightColor: "rgba(234, 179, 8, 0.15)", // Gold/yellow tint for premium
    iconColor: "text-yellow-500"
  },
  {
    icon: Heart,
    title: "Health First",
    description: "Gluten-free, grain-free, and packed with essential nutrients for your wellbeing.",
    spotlightColor: "rgba(239, 68, 68, 0.15)", // Red/pink tint for health
    iconColor: "text-red-500"
  },
  {
    icon: Package,
    title: "Eco-Friendly",
    description: "Sustainable packaging and ethical sourcing to protect our planet.",
    spotlightColor: "rgba(6, 182, 212, 0.15)", // Blue/cyan tint for eco-friendly
    iconColor: "text-cyan-500"
  },
];

export function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-features-title">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-features-subtitle">
            We're committed to delivering the finest cassava flour while supporting sustainable practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <SpotlightCard
              key={index}
              className="h-full"
              spotlightColor={feature.spotlightColor}
              data-testid={`card-feature-${index}`}
            >
              <div className="glass-card rounded-lg p-6 hover-elevate transition-all duration-300 h-full flex flex-col">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2" data-testid={`text-feature-title-${index}`}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm flex-grow" data-testid={`text-feature-desc-${index}`}>
                  {feature.description}
                </p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}