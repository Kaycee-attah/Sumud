import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { ProductCard } from "@/components/ProductCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import LightRays from "@/components/LightRays/LightRays";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import product1kg from "@assets/generated_images/Cassava_flour_1kg_product_419b2c89.png";
import product2kg from "@assets/generated_images/Cassava_flour_2kg_product_f2079dd8.png";
import product5kg from "@assets/generated_images/Cassava_flour_5kg_product_0b256313.png";
import processImage from "@assets/generated_images/Traditional_cassava_processing_scene_5f92f4d5.png";

export default function Home() {
  //todo: remove mock functionality
  const productVariants = [
    { id: '1', size: '1kg', price: 2500, stock: 38, label: 'Essentials' },
    { id: '2', size: '2kg', price: 3700, stock: 22, label: 'Family Pack' },
    { id: '3', size: '5kg', price: 5500, stock: 15, label: 'Premium Bundle' },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Home Baker",
      content: "This cassava flour has transformed my gluten-free baking. The quality is exceptional!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Professional Chef",
      content: "I've tried many cassava flours, but this one stands out for its consistency and flavor.",
      rating: 5,
    },
    {
      name: "Emma Davis",
      role: "Food Blogger",
      content: "Absolutely love the sustainable practices and the quality of the flour. Highly recommend!",
      rating: 5,
    },
  ];

  return (
    <div>
      <Hero />
      <Features />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-products-title">
              Our Premium Product
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-products-subtitle">
              Choose the perfect size for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProductCard
              image={product1kg}
              name="Artisan Cassava Flour"
              description="Perfect for trying our premium flour"
              variants={[productVariants[0]]}
            />
            <ProductCard
              image={product2kg}
              name="Artisan Cassava Flour"
              description="Ideal for regular baking needs"
              variants={[productVariants[1]]}
            />
            <ProductCard
              image={product5kg}
              name="Artisan Cassava Flour"
              description="Best value for frequent bakers"
              variants={[productVariants[2]]}
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-process-title">
                Traditional Methods, Modern Quality
              </h2>
              <p className="text-muted-foreground mb-6" data-testid="text-process-desc">
                We honor centuries-old cassava processing techniques while maintaining the highest quality standards. Each batch is carefully crafted to preserve the natural goodness of cassava.
              </p>
              <Link href="/process">
                <a>
                  <Button variant="outline" data-testid="button-learn-process">
                    Learn About Our Process
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img src={processImage} alt="Traditional cassava processing" className="w-full h-full object-cover" data-testid="img-process" />
            </div>
          </div>
        </div>
      </section>

       <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* LightRays Background - with theme-compatible colors */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="hsl(142.1, 76.2%, 36.3%)" // Using your primary color from previous code
          raysSpeed={1.2}
          lightSpread={0.7}
          rayLength={1.0}
          followMouse={true}
          mouseInfluence={0.08}
          noiseAmount={0.08}
          distortion={0.03}
          className="testimonial-section-lightrays"
        />
        
        {/* Subtle overlay that matches your site's background */}
        <div className="absolute inset-0 bg-background/20" />
      </div>
      
      {/* Your existing content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 
            className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4" 
            data-testid="text-testimonials-title"
          >
            What Our Customers Say
          </h2>
          <p 
            className="text-muted-foreground max-w-2xl mx-auto" 
            data-testid="text-testimonials-subtitle"
          >
            Join thousands of satisfied customers who trust our cassava flour
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card rounded-lg p-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-cta-title">
              Ready to Experience Premium Quality?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="text-cta-subtitle">
              Order now and discover why professional bakers and home cooks choose Sumud
            </p>
            <Link href="/products">
              <a>
                <Button size="lg" data-testid="button-cta-shop">
                  Start Shopping
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
