import { Leaf, Users, Recycle, Heart } from "lucide-react";

export default function Sustainability() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-sustainability-title">
            Sustainability & Community
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-sustainability-subtitle">
            Building a better future through ethical practices and community support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="glass-card rounded-lg p-6 text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-2" data-testid="text-stat-farms">50+</h3>
            <p className="text-muted-foreground text-sm" data-testid="text-stat-farms-label">Partner Farms</p>
          </div>

          <div className="glass-card rounded-lg p-6 text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-2" data-testid="text-stat-families">200+</h3>
            <p className="text-muted-foreground text-sm" data-testid="text-stat-families-label">Farming Families</p>
          </div>

          <div className="glass-card rounded-lg p-6 text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Recycle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-2" data-testid="text-stat-packaging">100%</h3>
            <p className="text-muted-foreground text-sm" data-testid="text-stat-packaging-label">Recyclable Packaging</p>
          </div>

          <div className="glass-card rounded-lg p-6 text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-2" data-testid="text-stat-trees">5000+</h3>
            <p className="text-muted-foreground text-sm" data-testid="text-stat-trees-label">Trees Planted</p>
          </div>
        </div>

        <div className="space-y-12">
          <div className="glass-card rounded-lg p-8">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4" data-testid="text-ethical-title">
              Ethical Sourcing
            </h2>
            <p className="text-muted-foreground mb-4" data-testid="text-ethical-desc-1">
              We work directly with small-scale farmers, ensuring fair wages and safe working conditions. Our partnership model helps farming communities thrive while preserving traditional knowledge.
            </p>
            <p className="text-muted-foreground" data-testid="text-ethical-desc-2">
              Every purchase supports sustainable agriculture practices and contributes to the economic development of cassava-growing regions.
            </p>
          </div>

          <div className="glass-card rounded-lg p-8">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4" data-testid="text-environment-title">
              Environmental Commitment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2" data-testid="text-commitment-1-title">Carbon Neutral Processing</h3>
                <p className="text-muted-foreground text-sm" data-testid="text-commitment-1-desc">
                  Our processing facilities use renewable energy and offset remaining emissions
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2" data-testid="text-commitment-2-title">Water Conservation</h3>
                <p className="text-muted-foreground text-sm" data-testid="text-commitment-2-desc">
                  Closed-loop water systems reduce consumption by 80% compared to traditional methods
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2" data-testid="text-commitment-3-title">Zero Waste</h3>
                <p className="text-muted-foreground text-sm" data-testid="text-commitment-3-desc">
                  Cassava byproducts are repurposed for animal feed and organic fertilizer
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2" data-testid="text-commitment-4-title">Reforestation</h3>
                <p className="text-muted-foreground text-sm" data-testid="text-commitment-4-desc">
                  We plant 10 trees for every ton of cassava flour produced
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-lg p-8">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4" data-testid="text-community-title">
              Community Impact
            </h2>
            <p className="text-muted-foreground mb-4" data-testid="text-community-desc">
              Beyond fair trade practices, we invest in education, healthcare, and infrastructure in farming communities. Our programs include:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li data-testid="text-program-1">• Agricultural training and modern farming techniques</li>
              <li data-testid="text-program-2">• Scholarship programs for farmers' children</li>
              <li data-testid="text-program-3">• Healthcare access and nutrition education</li>
              <li data-testid="text-program-4">• Community infrastructure development</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
