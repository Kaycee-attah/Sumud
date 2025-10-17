import { Leaf, Award, Heart, Package } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "No additives, no preservatives. Just pure cassava flour processed the traditional way.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Hand-selected cassava roots, carefully processed to maintain nutritional value.",
  },
  {
    icon: Heart,
    title: "Health First",
    description: "Gluten-free, grain-free, and packed with essential nutrients for your wellbeing.",
  },
  {
    icon: Package,
    title: "Eco-Friendly",
    description: "Sustainable packaging and ethical sourcing to protect our planet.",
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
            <div
              key={index}
              className="glass-card rounded-lg p-6 hover-elevate transition-all duration-300"
              data-testid={`card-feature-${index}`}
            >
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2" data-testid={`text-feature-title-${index}`}>
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm" data-testid={`text-feature-desc-${index}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
