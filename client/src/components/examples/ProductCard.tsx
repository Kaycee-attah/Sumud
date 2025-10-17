import { ProductCard } from '../ProductCard';
import product1kg from '@assets/generated_images/Cassava_flour_1kg_product_419b2c89.png';

export default function ProductCardExample() {
  const variants = [
    { id: '1', size: '1kg', price: 8.99, stock: 38, label: 'Essentials' },
    { id: '2', size: '2kg', price: 16.99, stock: 22, label: 'Family Pack' },
    { id: '3', size: '5kg', price: 39.99, stock: 15, label: 'Premium Bundle' },
  ];

  return (
    <div className="max-w-md">
      <ProductCard
        image={product1kg}
        name="Artisan Cassava Flour"
        description="Premium quality cassava flour, perfect for all your baking needs"
        variants={variants}
      />
    </div>
  );
}
