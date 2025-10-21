import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function Cart() {

  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'Artisan Cassava Flour',
      variant: '2kg - Family Pack',
      price: 3700,
      quantity: 2,
      image: '/placeholder.png',
    },
  ]);

  const updateQuantity = (id: string, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-4" data-testid="text-empty-cart-title">
            Your Cart is Empty
          </h1>
          <p className="text-muted-foreground mb-8" data-testid="text-empty-cart-subtitle">
            Start shopping to add items to your cart
          </p>
          <Link href="/products">
            <a>
              <Button data-testid="button-start-shopping">Start Shopping</Button>
            </a>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-serif text-4xl font-bold text-foreground mb-8" data-testid="text-cart-title">
          Shopping Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="glass-card rounded-lg p-6" data-testid={`cart-item-${item.id}`}>
                <div className="flex gap-6">
                  <div className="w-24 h-24 bg-muted rounded-lg flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-foreground mb-1" data-testid={`text-item-name-${item.id}`}>
                      {item.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3" data-testid={`text-item-variant-${item.id}`}>
                      {item.variant}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 border border-border rounded-md">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => updateQuantity(item.id, -1)}
                          data-testid={`button-decrease-${item.id}`}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="px-4 text-foreground" data-testid={`text-quantity-${item.id}`}>
                          {item.quantity}
                        </span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => updateQuantity(item.id, 1)}
                          data-testid={`button-increase-${item.id}`}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center gap-4">
                        <p className="text-lg font-semibold text-foreground" data-testid={`text-item-total-${item.id}`}>
                          ₦{(item.price * item.quantity).toFixed(2)}
                        </p>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => removeItem(item.id)}
                          data-testid={`button-remove-${item.id}`}
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="glass-card rounded-lg p-6 sticky top-24">
              <h2 className="font-serif text-xl font-bold text-foreground mb-4" data-testid="text-summary-title">
                Order Summary
              </h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-foreground">
                  <span data-testid="text-subtotal-label">Subtotal</span>
                  <span data-testid="text-subtotal">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-foreground">
                  <span data-testid="text-shipping-label">Shipping</span>
                  <span data-testid="text-shipping">
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                {subtotal < 50 && (
                  <p className="text-xs text-muted-foreground" data-testid="text-free-shipping-notice">
                    Add ${(50 - subtotal).toFixed(2)} more for free shipping
                  </p>
                )}
                <div className="border-t border-border pt-3">
                  <div className="flex justify-between text-lg font-bold text-foreground">
                    <span data-testid="text-total-label">Total</span>
                    <span data-testid="text-total">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <Link href="/checkout">
                <a>
                  <Button className="w-full" data-testid="button-checkout">
                    Proceed to Checkout
                  </Button>
                </a>
              </Link>
              <Link href="/products">
                <a>
                  <Button variant="outline" className="w-full mt-3" data-testid="button-continue-shopping">
                    Continue Shopping
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
