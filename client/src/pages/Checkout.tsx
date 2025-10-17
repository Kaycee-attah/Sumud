import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock } from "lucide-react";
import { useState } from "react";

export default function Checkout() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zip: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Processing order:', formData);
  };

  //todo: remove mock functionality
  const orderTotal = 39.97;

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-serif text-4xl font-bold text-foreground mb-8" data-testid="text-checkout-title">
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="glass-card rounded-lg p-6">
                <h2 className="font-serif text-xl font-bold text-foreground mb-4" data-testid="text-contact-title">
                  Contact Information
                </h2>
                <div>
                  <Label htmlFor="email" data-testid="label-email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    data-testid="input-email"
                  />
                </div>
              </div>

              <div className="glass-card rounded-lg p-6">
                <h2 className="font-serif text-xl font-bold text-foreground mb-4" data-testid="text-shipping-title">
                  Shipping Address
                </h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" data-testid="label-first-name">First Name</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        data-testid="input-first-name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" data-testid="label-last-name">Last Name</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        data-testid="input-last-name"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="address" data-testid="label-address">Address</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      data-testid="input-address"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city" data-testid="label-city">City</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        data-testid="input-city"
                      />
                    </div>
                    <div>
                      <Label htmlFor="zip" data-testid="label-zip">ZIP Code</Label>
                      <Input
                        id="zip"
                        value={formData.zip}
                        onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                        data-testid="input-zip"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <h2 className="font-serif text-xl font-bold text-foreground" data-testid="text-payment-title">
                    Payment Information
                  </h2>
                  <Lock className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="cardNumber" data-testid="label-card-number">Card Number</Label>
                    <Input
                      id="cardNumber"
                      value={formData.cardNumber}
                      onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                      placeholder="1234 5678 9012 3456"
                      data-testid="input-card-number"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry" data-testid="label-expiry">Expiry Date</Label>
                      <Input
                        id="expiry"
                        value={formData.expiry}
                        onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                        placeholder="MM/YY"
                        data-testid="input-expiry"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvc" data-testid="label-cvc">CVC</Label>
                      <Input
                        id="cvc"
                        value={formData.cvc}
                        onChange={(e) => setFormData({ ...formData, cvc: e.target.value })}
                        placeholder="123"
                        data-testid="input-cvc"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full" size="lg" data-testid="button-place-order">
                Place Order - ${orderTotal.toFixed(2)}
              </Button>
            </form>
          </div>

          <div className="lg:col-span-1">
            <div className="glass-card rounded-lg p-6 sticky top-24">
              <h2 className="font-serif text-xl font-bold text-foreground mb-4" data-testid="text-order-summary-title">
                Order Summary
              </h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-foreground" data-testid="text-item-name">Artisan Cassava Flour</p>
                    <p className="text-sm text-muted-foreground" data-testid="text-item-variant">2kg - Family Pack × 2</p>
                  </div>
                  <p className="font-medium text-foreground" data-testid="text-item-price">$33.98</p>
                </div>
              </div>
              <div className="border-t border-border pt-4 space-y-2">
                <div className="flex justify-between text-foreground">
                  <span data-testid="text-summary-subtotal-label">Subtotal</span>
                  <span data-testid="text-summary-subtotal">$33.98</span>
                </div>
                <div className="flex justify-between text-foreground">
                  <span data-testid="text-summary-shipping-label">Shipping</span>
                  <span data-testid="text-summary-shipping">$5.99</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-foreground pt-2 border-t border-border">
                  <span data-testid="text-summary-total-label">Total</span>
                  <span data-testid="text-summary-total">${orderTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
