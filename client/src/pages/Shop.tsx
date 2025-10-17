import { ProductCard } from "@/components/ProductCard";
import product1kg from "@assets/generated_images/Cassava_flour_1kg_product_419b2c89.png";
import product2kg from "@assets/generated_images/Cassava_flour_2kg_product_f2079dd8.png";
import product5kg from "@assets/generated_images/Cassava_flour_5kg_product_0b256313.png";

export default function Shop() {
  //todo: remove mock functionality
  const variants = [
    { id: '1', size: '1kg', price: 8.99, stock: 38, label: 'Essentials' },
    { id: '2', size: '2kg', price: 16.99, stock: 22, label: 'Family Pack' },
    { id: '3', size: '5kg', price: 39.99, stock: 15, label: 'Premium Bundle' },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-shop-title">
            Shop Premium Cassava Flour
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-shop-subtitle">
            Choose the perfect size for your baking needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard
            image={product1kg}
            name="Artisan Cassava Flour - 1kg"
            description="Perfect for trying our premium flour or small batch baking"
            variants={[variants[0]]}
          />
          <ProductCard
            image={product2kg}
            name="Artisan Cassava Flour - 2kg"
            description="Ideal for regular baking needs and family use"
            variants={[variants[1]]}
          />
          <ProductCard
            image={product5kg}
            name="Artisan Cassava Flour - 5kg"
            description="Best value for frequent bakers and large families"
            variants={[variants[2]]}
          />
        </div>

        <div className="mt-16 glass-card rounded-lg p-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-4" data-testid="text-bulk-title">
            Need Larger Quantities?
          </h2>
          <p className="text-muted-foreground mb-6" data-testid="text-bulk-desc">
            Explore our premium bulk options for businesses and verified customers
          </p>
          <a href="/premium" className="text-primary hover:underline font-medium" data-testid="link-premium">
            Explore Premium Bulk Orders →
          </a>
        </div>
      </div>
    </div>
  );
}
