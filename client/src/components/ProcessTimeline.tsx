import { CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Harvest",
    description: "Premium cassava roots hand-selected from sustainable farms",
  },
  {
    title: "Clean & Peel",
    description: "Traditional washing and peeling methods preserve natural nutrients",
  },
  {
    title: "Grate & Press",
    description: "Stone-ground to perfection, maintaining authentic texture",
  },
  {
    title: "Dry & Mill",
    description: "Sun-dried and finely milled for optimal quality",
  },
  {
    title: "Package",
    description: "Sealed fresh in eco-friendly packaging for your kitchen",
  },
];

export function ProcessTimeline() {
  return (
    <div className="space-y-8">
      {steps.map((step, index) => (
        <div key={index} className="flex gap-4" data-testid={`step-${index}`}>
          <div className="flex flex-col items-center">
            <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center">
              <CheckCircle className="h-5 w-5" />
            </div>
            {index < steps.length - 1 && (
              <div className="w-0.5 h-full bg-border mt-2" />
            )}
          </div>
          <div className="pb-8">
            <h3 className="font-semibold text-lg text-foreground mb-1" data-testid={`text-step-title-${index}`}>
              {step.title}
            </h3>
            <p className="text-muted-foreground text-sm" data-testid={`text-step-desc-${index}`}>
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
