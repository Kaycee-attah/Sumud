import { ProcessTimeline } from "@/components/ProcessTimeline";
import processImage from "@assets/generated_images/Traditional_cassava_processing_scene_5f92f4d5.png";

export default function Process() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-process-page-title">
            Our Traditional Process
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-process-page-subtitle">
            Centuries-old methods meet modern quality standards
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="glass-card rounded-lg overflow-hidden">
            <img src={processImage} alt="Traditional cassava processing" className="w-full h-full object-cover" data-testid="img-process-page" />
          </div>
          <div className="glass-card rounded-lg p-8">
            <ProcessTimeline />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card rounded-lg p-6">
            <h3 className="font-semibold text-lg text-foreground mb-2" data-testid="text-quality-title">Quality First</h3>
            <p className="text-muted-foreground text-sm" data-testid="text-quality-desc">
              Every batch undergoes rigorous quality checks to ensure consistency and purity
            </p>
          </div>
          <div className="glass-card rounded-lg p-6">
            <h3 className="font-semibold text-lg text-foreground mb-2" data-testid="text-sustainable-title">Sustainable Sourcing</h3>
            <p className="text-muted-foreground text-sm" data-testid="text-sustainable-desc">
              We work directly with farmers who practice sustainable agriculture
            </p>
          </div>
          <div className="glass-card rounded-lg p-6">
            <h3 className="font-semibold text-lg text-foreground mb-2" data-testid="text-traditional-title">Traditional Methods</h3>
            <p className="text-muted-foreground text-sm" data-testid="text-traditional-desc">
              Honoring time-tested techniques while ensuring food safety standards
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
