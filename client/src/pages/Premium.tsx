import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Package, Award, Shield, Truck } from "lucide-react";
import { useState } from "react";

export default function Premium() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    quantity: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Premium order inquiry:', formData);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4" data-testid="badge-elite">Elite Tier</Badge>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-premium-title">
            Premium Bulk Orders
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-premium-subtitle">
            Custom orders from 10kg to 100kg for verified businesses and valued customers
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6" data-testid="text-benefits-title">Elite Tier Benefits</h2>
            <div className="space-y-4">
              <div className="glass-card rounded-lg p-6 hover-elevate">
                <div className="flex gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2" data-testid="text-benefit-custom-title">Custom Quantities</h3>
                    <p className="text-muted-foreground text-sm" data-testid="text-benefit-custom-desc">Order exactly what you need, from 10kg to 100kg</p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-lg p-6 hover-elevate">
                <div className="flex gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2" data-testid="text-benefit-pricing-title">Volume Pricing</h3>
                    <p className="text-muted-foreground text-sm" data-testid="text-benefit-pricing-desc">Exclusive discounts for bulk orders</p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-lg p-6 hover-elevate">
                <div className="flex gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2" data-testid="text-benefit-priority-title">Priority Support</h3>
                    <p className="text-muted-foreground text-sm" data-testid="text-benefit-priority-desc">Dedicated account manager for your needs</p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-lg p-6 hover-elevate">
                <div className="flex gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Truck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2" data-testid="text-benefit-delivery-title">Flexible Delivery</h3>
                    <p className="text-muted-foreground text-sm" data-testid="text-benefit-delivery-desc">Scheduled deliveries to match your needs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-lg p-8">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6" data-testid="text-inquiry-title">Request a Quote</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  data-testid="input-name"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  data-testid="input-email"
                />
              </div>
              <div>
                <Input
                  placeholder="Company Name (Optional)"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  data-testid="input-company"
                />
              </div>
              <div>
                <Input
                  placeholder="Desired Quantity (kg)"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  data-testid="input-quantity"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Tell us about your needs..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  data-testid="input-message"
                />
              </div>
              <Button type="submit" className="w-full" data-testid="button-submit-inquiry">
                Submit Inquiry
              </Button>
            </form>
          </div>
        </div>

        <div className="glass-card rounded-lg p-8 text-center">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-4" data-testid="text-eligibility-title">Eligibility Requirements</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto" data-testid="text-eligibility-desc">
            Premium bulk orders are available to verified businesses or customers with 4+ orders. New to Cassava Flour Co? Start with our standard packages and unlock elite tier benefits as you grow with us.
          </p>
        </div>
      </div>
    </div>
  );
}
