import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

type ProductVariant = {
  id: string;
  size: string;
  price: number;
  stock: number;
  label: string;
};

type ProductCardProps = {
  image: string;
  name: string;
  description: string;
  variants: ProductVariant[];
};

export function ProductCard({ image, name, description, variants }: ProductCardProps) {
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    console.log(`Added ${quantity}x ${selectedVariant.size} to cart`);
  };

  return (
    <div className="glass-card rounded-lg p-6 hover-elevate transition-all duration-300" data-testid="card-product">
      <div className="aspect-square bg-background rounded-lg mb-4 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" data-testid="img-product" />
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="font-serif text-xl font-bold text-foreground mb-2" data-testid="text-product-name">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground" data-testid="text-product-desc">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {variants.map((variant) => (
            <Badge
              key={variant.id}
              variant={selectedVariant.id === variant.id ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setSelectedVariant(variant)}
              data-testid={`badge-variant-${variant.size}`}
            >
              {variant.size} - ₦{variant.price}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center border border-border rounded-md">
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              data-testid="button-decrease-qty"
            >
              -
            </Button>
            <span className="px-4 text-foreground" data-testid="text-quantity">{quantity}</span>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setQuantity(Math.min(selectedVariant.stock, quantity + 1))}
              data-testid="button-increase-qty"
            >
              +
            </Button>
          </div>
          <p className="text-xs text-muted-foreground" data-testid="text-stock">
            {selectedVariant.stock} in stock
          </p>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-2xl font-bold text-foreground" data-testid="text-price">
              ₦{(selectedVariant.price * quantity).toFixed(2)}
            </p>
            <p className="text-xs text-muted-foreground" data-testid="text-variant-label">
              {selectedVariant.label}
            </p>
          </div>
          <Button onClick={handleAddToCart} data-testid="button-add-to-cart">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
